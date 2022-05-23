import React from "react";
import { useState } from "react";
import CheckboxComponent from "./CheckboxComponent";

const useSelectAgreementComponent = () => {
  const [agreementType, setAgreementType] = useState("Köpeskontrakt");

  const handleChange = (e) =>{
    setAgreementType(e.target.checked);
    console.log(e.target.checked);
  }

  return {
    agreementType,

    renderAgreementTypeDropDown: (
        <CheckboxComponent 
        label="Avtalstyp"
        value="Köpesavtal"
        id="Köpesavtal"
        onChange={(e) => handleChange(e.target.value)}
          />
    ),
  };
};

export default useSelectAgreementComponent;
