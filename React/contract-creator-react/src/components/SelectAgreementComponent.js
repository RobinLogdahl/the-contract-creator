import React from "react";
import { useState } from "react";
import CheckboxComponent from "./CheckboxComponent";

const useSelectAgreementComponent = () => {
  const [agreementType, setAgreementType] = useState("Köpeskontrakt");

  return {
    agreementType,

    renderAgreementTypeDropDown: (
        <CheckboxComponent 
        label="Avtalstyp"
        value="Köpesavtal"
        id="Köpesavtal"
        onChange={(e) => setAgreementType(e.target.value)}
          />
    ),
  };
};

export default useSelectAgreementComponent;
