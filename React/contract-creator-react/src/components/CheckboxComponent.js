import React from "react";

const CheckboxComponent = ({ label, value, onChangeValue }) => {
  return (
          <fieldset>
            <legend>{label}</legend>
            <div>
              <input
                type="radio"
                id={value}
                name={value}
                onChange={onChangeValue}
              />
              <label htmlFor={value}>{value}</label>
            </div>
          </fieldset>
  );
};


{
  /* <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select> */
}

export default CheckboxComponent;
