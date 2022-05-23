import React from "react";
import { useState } from "react";
import "./PurchaseAgreementComponent.css";
import FormComponent from "./FormComponent";

function InputRenterOne() {
    const [buyerName, setBuyerName] = useState("");
    const [buyerSocialSecurity, setBuyerSocial] = useState("");
    const [buyerAddress, setBuyerAddress] = useState("");
    const [buyerPostalCode, setBuyerPostalCode] = useState("");
    const [buyerCity, setBuyerCity] = useState("");
    const [buyerPhone, setBuyerPhone] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");

  return {
    buyerName,
    buyerSocialSecurity,
    buyerAddress,
    buyerPostalCode,
    buyerCity,
    buyerPhone,
    buyerEmail,


    renderRenterOne: (
        <div className="renterInfoContainer">
          <p className="renterInfo">Hyresgäst uppgifter</p>
        <FormComponent
          label="För- och efternamn"
          id="buyerName"
          value={buyerName}
          onChange={(e) => setBuyerName(e.target.value)}
        />
        <FormComponent
          label="Personnummer"
          id="buyerSocialSecurity"
          value={buyerSocialSecurity}
          onChange={(e) => setBuyerSocial(e.target.value)}
        />
        <FormComponent
          label="Adress"
          id="buyerAddress"
          value={buyerAddress}
          onChange={(e) => setBuyerAddress(e.target.value)}
        />
        <FormComponent
          label="Postkod"
          id="buyerPostalCode"
          value={buyerPostalCode}
          onChange={(e) => setBuyerPostalCode(e.target.value)}
        />
        <FormComponent
          label="Stad"
          id="buyerCity"
          value={buyerCity}
          onChange={(e) => setBuyerCity(e.target.value)}
        />
        <FormComponent
          label="Telefon"
          id="buyerPhone"
          value={buyerPhone}
          onChange={(e) => setBuyerPhone(e.target.value)}
        />
        <FormComponent
          label="Email"
          id="buyerEmail"
          value={buyerEmail}
          onChange={(e) => setBuyerEmail(e.target.value)}
        />
        </div>
    ),
  };
}

export default InputRenterOne;
