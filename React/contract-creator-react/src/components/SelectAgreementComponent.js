import React from "react";
import { useState } from "react";

const useSelectAgreementComponent = () => {
  const [agreementType, setAgreementType] = useState("Köpesavtal");

  const handleClick = (event) => {
    const buy = document.getElementById("buyCheck");
    const hire = document.getElementById("hireCheck");

    if (buy.checked === true && hire.checked === false) {
      setAgreementType(event.target.value);
      console.log(event.target.value);
      hire.checked = false;
    }
    if (hire.checked === true && buy.checked === false) {
      setAgreementType(event.target.value);
      console.log(event.target.value);
      buy.checked = false;
    }
    if (hire.checked === true && buy.checked === true) {
      event.target.checked = false;
    }
  };

  return {
    agreementType,

    renderAgreementTypeDropDown: (
      <div className="checkboxWrapper">
        <p className="checkboxHead">Välj avtalstyp</p>
        <label className="checkboxContainer">
          <input
            type="checkbox"
            id="buyCheck"
            value="Köpesavtal"
            name="Köpesavtal"
            onChange={handleClick}
          />
          Köpesavtal
          <span className="checkmark"></span>
        </label>
        <br />
        <label className="checkboxContainer">
          <input
            type="checkbox"
            id="hireCheck"
            value="Hyresavtal"
            name="Hyresavtal"
            onChange={handleClick}
          />
          Hyresavtal
          <span className="checkmark"></span>
        </label>
      </div>
    ),
  };
};

export default useSelectAgreementComponent;
