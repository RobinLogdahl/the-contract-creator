import React from "react";
import { useState } from "react";
import DropdownComponent from "./DropdownComponent";

const SelectAgreementComponent = (props) => {
  const [buyers, setBuyers] = useState("1");
  console.log(props.value1)

  const handleBuyerChange = (event) => {
    setBuyers(event.target.value);
    sessionStorage.removeItem('parties-key');
    sessionStorage.setItem('parties-key', event.target.value);
  };

  return (
    <div>
      <DropdownComponent
        label="Antal köpare"
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
        ]}
        value={buyers}
        onChange={handleBuyerChange}
      />
    </div>
  );
};

export default SelectAgreementComponent;