import React, { useState } from "react";

function TestCheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked((prev) => {
      const newChecked = !prev;
      console.log("status:", newChecked);
      return newChecked;
    });
  }

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
    </div>
  );
}

export default TestCheckBox;
