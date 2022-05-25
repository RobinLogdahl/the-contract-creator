import React from "react";
import { useState } from "react";

const useSelectSigningComponent = () => {
  const [signType, setSignType] = useState("Skriftligt");
  
  const handleClick = (event) => {
    const buy = document.getElementById("papersign");
    const hire = document.getElementById("esign");

    if (buy.checked === true && hire.checked === false) {
      setSignType(event.target.value);
      console.log(event.target.value);
      hire.checked=false;
    }
    if (hire.checked === true && buy.checked === false) {
      setSignType(event.target.value);
      console.log(event.target.value);
      buy.checked=false;
    }
    if(hire.checked === true && buy.checked === true){
      event.target.checked=false;
    }
  };

  return {
    signType,

    renderSignTypeDropDown: (
      <div>
        <input
          type="checkbox"
          id="papersign"
          value="Skriftligt"
          name="Skriftligt"
          onChange={handleClick}
        />
        Skriftligt
        <input
          type="checkbox"
          id="esign"
          value="E-signering"
          name="E-signering"
          onChange={handleClick}
        />
        E-signering
      </div>
    ),
  };
};

export default useSelectSigningComponent;