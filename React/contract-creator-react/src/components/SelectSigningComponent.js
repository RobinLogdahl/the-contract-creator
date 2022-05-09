import React from "react";
import { useState } from "react";
import DropdownComponent from "./DropdownComponent";

const SelectSigningComponent = (props) => {
  const [signType, setSignType] = useState("1");
  console.log(props.value1)

  const handleSigningChange = (event) => {
    setSignType(event.target.value);
    console.log(props.signType)
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