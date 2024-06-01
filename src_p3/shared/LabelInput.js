import React from "react";

function LabelInput({ id, value, type = "text", handleInputChange, children }) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={handleInputChange}
      />
    </>
  );
}

export default LabelInput;
