import React from "react";
import { useState } from "react";

const useSelectPartiesComponent = () => {
  const [buyers, setBuyers] = useState("1");
  
  const handleClick = (event) => {
    const buy = document.getElementById("oneBuyer");
    const hire = document.getElementById("twoBuyer");

    if (buy.checked === true && hire.checked === false) {
      setBuyers(event.target.value);
      console.log(event.target.value);
      hire.checked=false;
    }
    if (hire.checked === true && buy.checked === false) {
      setBuyers(event.target.value);
      console.log(event.target.value);
      buy.checked=false;
    }
    if(hire.checked === true && buy.checked === true){
      event.target.checked=false;
    }
  };

  return {
    buyers,

    renderNumberOfBuyersDropDown: (
      <div>
        <input
          type="checkbox"
          id="oneBuyer"
          value="1"
          name="1"
          onChange={handleClick}
        />
        1
        <input
          type="checkbox"
          id="twoBuyer"
          value="2"
          name="2"
          onChange={handleClick}
        />
        2
      </div>
    ),
  };
};

export default useSelectPartiesComponent;