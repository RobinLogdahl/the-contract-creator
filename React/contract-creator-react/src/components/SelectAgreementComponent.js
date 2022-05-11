import React from "react";
import { useState } from "react";
import DropdownComponent from "./DropdownComponent";

const useSelectAgreementComponent = () => {
  const [agreementType, setAgreementType] = useState("Köpeskontrakt");

  //console.log(`useSelectAgreementComponent value: ${agreementType}`)

  return {
    agreementType,

    renderAgreementTypeDropDown: (
      <div>
        <DropdownComponent
          label="Avtalstyp"
          options={[
            { label: "Köpeskontrakt", value: "Köpeskontrakt" },
            { label: "Hyreskontrakt", value: "Hyreskontrakt" },
          ]}
          onChange={(e) => setAgreementType(e.target.value)}
        />
      </div >
    )
  };
};

export default useSelectAgreementComponent;