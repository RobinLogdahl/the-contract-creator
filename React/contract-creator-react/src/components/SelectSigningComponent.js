import React from "react";
import { useState } from "react";
import DropdownComponent from "./DropdownComponent";

const SelectSigningComponent = (props) => {
  const [signType, setSignType] = useState("Skriftligt");
  console.log(props.value1)

  const handleSigningChange = (event) => {
    setSignType(event.target.value);
    sessionStorage.removeItem('signing-key');
    sessionStorage.setItem('signing-key', event.target.value);
  };

  return (
    <div>
      <DropdownComponent
        label="Signeringstyp"
        options={[
          { label: "Skriftligt", value: "Skriftligt" },
          { label: "E-signering", value: "E-signering" },
        ]}
        value={signType}
        onChange={handleSigningChange}
      />
    </div>
  );
};

export default SelectSigningComponent;