import React from "react";
import { useState } from "react";
import "./PurchaseAgreementComponent.css";
import FormComponent from "./InputFormComponent";

function InputLandlordOne() {

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


    renderLandlordOne: (
        <div>
        <FormComponent
          label="För- och efternamn"
          id="socialName"
          value={sellerName}
          onChange={(e) => setSellerName(e.target.value)}
        />
        <FormComponent
          label="Personnummer"
          id="sellerSocialSecurity"
          value={sellerSocialSecurity}
          onChange={(e) => setSellerSocial(e.target.value)}
        />
        <FormComponent
          label="Adress"
          id="sellerAddress"
          value={sellerAddress}
          onChange={(e) => setSellerAddress(e.target.value)}
        />
        <FormComponent
          label="Postkod"
          id="sellerPostalCode"
          value={sellerPostalCode}
          onChange={(e) => setSellerPostalCode(e.target.value)}
        />
        <FormComponent
          label="Stad"
          id="sellerCity"
          value={sellerCity}
          onChange={(e) => setSellerCity(e.target.value)}
        />
        <FormComponent
          label="Telefon"
          id="sellerPhone"
          value={sellerPhone}
          onChange={(e) => setSellerPhone(e.target.value)}
        />
        <FormComponent
          label="Email"
          id="sellerEmail"
          value={sellerEmail}
          onChange={(e) => setSellerEmail(e.target.value)}
        />
        </div>
    ),
  };
}

export default InputLandlordOne;