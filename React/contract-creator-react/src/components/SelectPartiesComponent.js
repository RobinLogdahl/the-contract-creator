import React from "react";
import { useState } from "react";

const useSelectPartiesComponent = () => {
  const [buyers, setBuyers] = useState("1");

  const handleClick = (event) => {
    const oneBuy = document.getElementById("oneBuyer");
    const twoBuy = document.getElementById("twoBuyer");

    if (oneBuy.checked === true && twoBuy.checked === false) {
      setBuyers(event.target.value);
      console.log(event.target.value);
      twoBuy.checked = false;
    }
    if (twoBuy.checked === true && oneBuy.checked === false) {
      setBuyers(event.target.value);
      console.log(event.target.value);
      oneBuy.checked = false;
    }
    if (twoBuy.checked === true && oneBuy.checked === true) {
      event.target.checked = false;
    }
  };

  return {
    buyers,

    renderNumberOfBuyersDropDown: (
      <div className="checkboxWrapper">
        <p className="checkboxHead">Välj antal parter</p>
        <label className="checkboxContainer">
          <input
            type="checkbox"
            id="oneBuyer"
            value="1"
            name="1"
            onChange={handleClick}
          />
          <p>1</p>
          <span className="checkmark"></span>
        </label>
        <br />
        <label className="checkboxContainer">
          <input
            type="checkbox"
            id="twoBuyer"
            value="2"
            name="2"
            onChange={handleClick}
          />
          <p>2</p>
          <span className="checkmark"></span>
        </label>
      </div>
    ),
  };
};

export default useSelectPartiesComponent;
