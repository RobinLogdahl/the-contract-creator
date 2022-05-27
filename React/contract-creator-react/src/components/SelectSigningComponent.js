import React from "react";
import { useState } from "react";

const useSelectSigningComponent = () => {
  const [signType, setSignType] = useState("Skriftligt");

  const handleClick = (event) => {
    const paper = document.getElementById("papersign");
    const esign = document.getElementById("esign");

    if (paper.checked === true && esign.checked === false) {
      setSignType(event.target.value);
      console.log(event.target.value);
      esign.checked = false;
    }
    if (esign.checked === true && paper.checked === false) {
      setSignType(event.target.value);
      console.log(event.target.value);
      paper.checked = false;
    }
    if (esign.checked === true && paper.checked === true) {
      event.target.checked = false;
    }
  };

  return {
    signType,

    renderSignTypeDropDown: (
      <div className="checkboxWrapper">
        <p className="checkboxHead">Välj signeringstyp</p>
        <label className="checkboxContainer">
          <input
            type="checkbox"
            id="papersign"
            value="Skriftligt"
            name="Skriftligt"
            onChange={handleClick}
          />
          Skriftligt
          <span className="checkmark"></span>
        </label>
        <br />
        <label className="checkboxContainer">
          <input
            type="checkbox"
            id="esign"
            value="E-signering"
            name="E-signering"
            onChange={handleClick}
          />
          E-signering
          <span className="checkmark"></span>
        </label>
      </div>
    ),
  };
};

export default useSelectSigningComponent;
