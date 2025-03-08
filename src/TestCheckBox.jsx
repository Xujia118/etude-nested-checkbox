import React, { useState } from "react";

function TestCheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked((prev) => !prev); // Use `prev` to toggle the state
    console.log("status:", !isChecked); // Log the new state
  }

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
    </div>
  );
}

export default TestCheckBox;
