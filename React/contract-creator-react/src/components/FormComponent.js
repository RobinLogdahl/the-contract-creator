import React from "react";

const FormComponent = ({ label, id, value, onChange }) => {
    return (
      <label htmlFor={id}>
        {label}
        <br />
        <input type="text" id={id} name={id} value={value} onChange={onChange} ></input>
        <br />
      </label>
    );
  };

  export default FormComponent;