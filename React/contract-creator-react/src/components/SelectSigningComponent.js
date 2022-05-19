import React from "react";
import { useState } from "react";
import DropdownComponent from "./NavDropdownComponent";

const useSelectSigningComponent = (props) => {
  const [signType, setSignType] = useState("Skriftligt");

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
