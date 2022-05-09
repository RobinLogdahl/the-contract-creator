import React from "react";

const DropdownComponent = ({ label, value, options, onChange }) => {
    return (
      <label>
        {label}
        <br />
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <br />
      </label>
    );
  };

  export default DropdownComponent;