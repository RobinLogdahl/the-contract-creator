import React from "react";
import { useState } from "react";
import "./PurchaseAgreementComponent.css";
import FormComponent from "./FormComponent";

function InputBuyerOne() {
  const [buyerName, setBuyerName] = useState("");
  const [buyerSocialSecurity, setBuyerSocial] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");

  return {
    buyerName,
    buyerSocialSecurity,
    buyerAddress,
    buyerPhone,

    renderBuyer: (
    <div className="buyerInfoContainer">
      <p className="buyerInfo">Köparens uppgifter</p>
      <FormComponent
        label="För- och efternamn"
        id="buyerName"
        onChange={(e) => setBuyerName(e.target.value)}
      />
      <FormComponent
        label="Personnummer"
        id="buyerSocialSecurity"
        onChange={(e) => setBuyerSocial(e.target.value)}
      />
      <FormComponent
        label="Adress"
        id="buyerAddress"
        onChange={(e) => setBuyerAddress(e.target.value)}
      />
      <FormComponent
        label="Telefon"
        id="buyerPhone"
        onChange={(e) => setBuyerPhone(e.target.value)}
      />
    </div> 
    )
  }
}

export default InputBuyerOne;
