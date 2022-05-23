import React from "react";
import { useState } from "react";
import "./PurchaseAgreementComponent.css";
import FormComponent from "./FormComponent";

function InputSellerOne() {
  const [sellerName, setSellerName] = useState("");
  const [sellerSocialSecurity, setSellerSocial] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [sellerPostalCode, setSellerPostalCode] = useState("");
  const [sellerCity, setSellerCity] = useState("");
  const [sellerPhone, setSellerPhone] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");

  return {
    sellerName,
    sellerSocialSecurity,
    sellerAddress,
    sellerPostalCode,
    sellerCity,
    sellerPhone,
    sellerEmail,


    renderSeller: (
      <div className="sellerInfoContainer">
        <p className="sellerInfo">Säljarens uppgifter</p>
        <FormComponent
          label="För- och efternamn"
          id="buyerName"
          value={sellerName}
          onChange={(e) => setSellerName(e.target.value)}
        />
        <FormComponent
          label="Personnummer"
          id="buyerSocialSecurity"
          value={sellerSocialSecurity}
          onChange={(e) => setSellerSocial(e.target.value)}
        />
        <FormComponent
          label="Adress"
          id="buyerAddress"
          value={sellerAddress}
          onChange={(e) => setSellerAddress(e.target.value)}
        />
        <FormComponent
          label="Postkod"
          id="buyerPostalCode"
          value={sellerPostalCode}
          onChange={(e) => setSellerPostalCode(e.target.value)}
        />
        <FormComponent
          label="Stad"
          id="buyerCity"
          value={sellerCity}
          onChange={(e) => setSellerCity(e.target.value)}
        />
        <FormComponent
          label="Telefon"
          id="buyerPhone"
          value={sellerPhone}
          onChange={(e) => setSellerPhone(e.target.value)}
        />
        <FormComponent
          label="Email"
          id="buyerEmail"
          value={sellerEmail}
          onChange={(e) => setSellerEmail(e.target.value)}
        />
      </div>
    )
  };
}

export default InputSellerOne;
