import React from "react";
import { useState } from "react";
import "./PurchaseAgreementComponent.css";
import FormComponent from "./FormComponent";

function InputSellerOne() {
  const [sellerName, setSellerName] = useState("");
  const [sellerSocialSecurity, setSellerSocial] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [sellerPhone, setSellerPhone] = useState("");

  return {
    sellerName,
    sellerSocialSecurity,
    sellerAddress,
    sellerPhone,

    renderSeller: (
    <div className="buyerInfoContainer">
      <p className="buyerInfo">Köparens uppgifter</p>
      <FormComponent
        label="För- och efternamn"
        id="sellerName"
        onChange={(e) => setSellerName(e.target.value)}
      />
      <FormComponent
        label="Personnummer"
        id="sellerSocialSecurity"
        onChange={(e) => setSellerSocial(e.target.value)}
      />
      <FormComponent
        label="Adress"
        id="sellerAddress"
        onChange={(e) => setSellerAddress(e.target.value)}
      />
      <FormComponent
        label="Telefon"
        id="sellerPhone"
        onChange={(e) => setSellerPhone(e.target.value)}
      />
    </div> 
    )
  }
}

export default InputSellerOne;
