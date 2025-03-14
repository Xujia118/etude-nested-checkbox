import React, { useState } from "react";
import options from "./data";

const NestedCheckBox = () => {
  const [selected, setSelected] = useState({});
  const [selectAll, setSelectAll] = useState(false);

  // Function to toggle selection for a node and its children
  const toggleSelection = (items, isSelected, newSelected) => {
    items.forEach((item) => {
      if (isSelected) {
        newSelected[item.value] = true; // Select
      } else {
        delete newSelected[item.value]; // Deselect
      }
      if (item.children) {
        toggleSelection(item.children, isSelected, newSelected); // Recursive call
      }
    });
  };

  const handleChange = (value, children) => {
    setSelected((prevSelected) => {
      const newSelected = { ...prevSelected };

      const isSelected = !newSelected[value]; // Toggle selection
      if (isSelected) {
        newSelected[value] = true;
      } else {
        delete newSelected[value];
      }

      // If parent has children, select/deselect all
      if (children) {
        toggleSelection(children, isSelected, newSelected);
      }

      return newSelected;
    });
  };

  const handleChildChange = (value, parentChildren, parentValue) => {
    setSelected((prevSelected) => {
      const newSelected = { ...prevSelected };

      // Toggle selection for the child
      const isSelected = !newSelected[value];
      if (isSelected) {
        newSelected[value] = true; // Select the child
      } else {
        delete newSelected[value]; // Deselect the child by removing it
      }

      // Update parent state based on children's state
      if (parentChildren) {
        const allChildrenSelected = parentChildren.every((child) => newSelected[child]);
        const someChildrenSelected = parentChildren.some((child) => newSelected[child]);

        if (allChildrenSelected) {
          newSelected[parentValue] = true; // Select the parent if all children are selected
        } else if (someChildrenSelected) {
          newSelected[parentValue] = "indeterminate"; // Set parent to indeterminate if some children are selected
        } else {
          delete newSelected[parentValue]; // Deselect the parent if none of the children are selected
        }
      }

      return newSelected;
    });
  };

  const handleSelectAll = () => {
    setSelectAll((prev) => !prev);
    setSelected((prevSelected) => {
      const newSelected = {};
      if (!selectAll) {
        toggleSelection(options, true, newSelected);
      }
      return newSelected;
    });
  };

  const renderCheckboxes = (items, parentValue = null) => {
    return (
      <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
        {items.map((item) => (
          <li key={item.value}>
            <label>
              <input
                type="checkbox"
                checked={!!selected[item.value]}
                onChange={() =>
                  item.children
                    ? handleChange(item.value, item.children)
                    : handleChildChange(item.value, items, parentValue)
                }
              />
              {item.label}
            </label>
            {item.children && renderCheckboxes(item.children, item.value)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h3>Nested Checkbox List</h3>
      <button onClick={handleSelectAll}>{selectAll ? "Deselect All" : "Select All"}</button>
      {renderCheckboxes(options)}
      <pre>{JSON.stringify(selected, null, 2)}</pre>
    </div>
  );
};

export default NestedCheckBox;
