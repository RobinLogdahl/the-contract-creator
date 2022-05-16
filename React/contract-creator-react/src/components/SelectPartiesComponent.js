import React from "react";
import { useState } from "react";
import DropdownComponent from "./DropdownComponent";

const useSelectPartisComponent = () => {
  const [buyers, setBuyers] = useState("1");

  return {
    buyers,

    renderNumberOfBuyersDropDown: (
      <div>
        <DropdownComponent
          label="Antal köpare"
          options={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
          ]}
          onChange={(e) => setBuyers(e.target.value)}
        />
      </div>
    ),
  };
};

export default useSelectPartisComponent;
