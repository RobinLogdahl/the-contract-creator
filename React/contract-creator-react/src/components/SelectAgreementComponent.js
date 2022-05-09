import React from "react";
import { useState } from "react";
import DropdownComponent from "./DropdownComponent";

const SelectAgreementComponent = () => {
  const [agreementType, setAgreementType] = useState("Köpeskontrakt");

  const handleAgreementChange = (event) => {
    setAgreementType(event.target.value);
    console.log(agreementType);
  };

  return (
    <div>
      <DropdownComponent
        label="Avtalstyp"
        options={[
          { label: "Köpeskontrakt", value: "Köpeskontrakt" },
          { label: "Hyreskontrakt", value: "Hyreskontrakt" },
        ]}
        value={agreementType}
        onChange={handleAgreementChange}
      />
    </div>
  );
};

export default SelectAgreementComponent;