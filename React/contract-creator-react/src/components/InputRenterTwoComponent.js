import React from "react";
import { useState } from "react";
import "./PurchaseAgreementComponent.css";
import FormComponent from "./FormComponent";

function InputRenterTwo() {
  const [buyerName2, setBuyerName] = useState("");
  const [buyerSocialSecurity2, setBuyerSocial] = useState("");
  const [buyerAddress2, setBuyerAddress] = useState("");
  const [buyerPostalCode2, setBuyerPostalCode] = useState("");
  const [buyerCity2, setBuyerCity] = useState("");
  const [buyerPhone2, setBuyerPhone] = useState("");
  const [buyerEmail2, setBuyerEmail] = useState("");

  return {
    buyerName2,
    buyerSocialSecurity2,
    buyerAddress2,
    buyerPostalCode2,
    buyerCity2,
    buyerPhone2,
    buyerEmail2,

    renderRenterTwo: (
      <div className="renter2InfoContainer">
        <p className="renter2Info">Hyresgäst 2 uppgifter</p>
        <FormComponent
          label="För- och efternamn"
          id="buyerName"
          value={buyerName2}
          onChange={(e) => setBuyerName(e.target.value)}
        />
        <FormComponent
          label="Personnummer"
          id="buyerSocialSecurity"
          value={buyerSocialSecurity2}
          onChange={(e) => setBuyerSocial(e.target.value)}
        />
        <FormComponent
          label="Adress"
          id="buyerAddress"
          value={buyerAddress2}
          onChange={(e) => setBuyerAddress(e.target.value)}
        />
        <FormComponent
          label="Postkod"
          id="buyerPostalCode"
          value={buyerPostalCode2}
          onChange={(e) => setBuyerPostalCode(e.target.value)}
        />
        <FormComponent
          label="Stad"
          id="buyerCity"
          value={buyerCity2}
          onChange={(e) => setBuyerCity(e.target.value)}
        />
        <FormComponent
          label="Telefon"
          id="buyerPhone"
          value={buyerPhone2}
          onChange={(e) => setBuyerPhone(e.target.value)}
        />
        <FormComponent
          label="Email"
          id="buyerEmail"
          value={buyerEmail2}
          onChange={(e) => setBuyerEmail(e.target.value)}
        />
      </div>
    ),
  };
}

export default InputRenterTwo;
