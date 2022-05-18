import React from "react";
import { useState } from "react";
import DropdownComponent from "./DropdownComponent";

const useSelectSigningComponent = (props) => {
  const [signType, setSignType] = useState("Skriftligt");

  //console.log(`useSelectAgreementComponent value: ${signType}`)

  return {
    signType,

    renderSignTypeDropDown: (
        <DropdownComponent
          label="Signeringstyp"
          options={[
            { label: "Skriftligt", value: "Skriftligt" },
            { label: "E-signering", value: "E-signering" },
          ]}
          onChange={(e) => setSignType(e.target.value)}

        />
    )
  }
};

export default useSelectSigningComponent;