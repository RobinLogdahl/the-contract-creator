import React from "react";

const CheckboxComponent = ({ label, value, id, onChange }) => {
    return (
        <fieldset>
            <legend>{label}</legend>
            <div>
            <input type="checkbox" id={value} name={value} onChange={onChange} checked={id}
             />
            <label htmlFor={id}>{id}</label>
            </div>
        </fieldset>
    );
  };


{/* <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select> */}

  export default CheckboxComponent;