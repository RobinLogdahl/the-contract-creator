import React from "react";
import { useState } from "react";
import "./PurchaseAgreementComponent.css";
import FormComponent from "./FormComponent";

function InputLandlordOne() {
  const [landlordName, setLandlordName] = useState("");
  const [landlordSocialSecurity, setLandlordSocial] = useState("");
  const [landlordAddress, setLandlordAddress] = useState("");
  const [landlordPostalCode, setLandlordPostalCode] = useState("");
  const [landlordCity, setLandlordCity] = useState("");
  const [landlordPhone, setLandlordPhone] = useState("");
  const [landlordEmail, setLandlordEmail] = useState("");

  return {
    landlordName,
    landlordSocialSecurity,
    landlordAddress,
    landlordPostalCode,
    landlordCity,
    landlordPhone,
    landlordEmail,

    renderLandlordOne: (
      <div className="landlordInfoContainer">
        <p className="landlordInfo">Hyresvärd uppgifter</p>
        <FormComponent
          label="För- och efternamn"
          id="socialName"
          value={landlordName}
          onChange={(e) => setLandlordName(e.target.value)}
        />
        <FormComponent
          label="Personnummer"
          id="sellerSocialSecurity"
          value={landlordSocialSecurity}
          onChange={(e) => setLandlordSocial(e.target.value)}
        />
        <FormComponent
          label="Adress"
          id="sellerAddress"
          value={landlordAddress}
          onChange={(e) => setLandlordAddress(e.target.value)}
        />
        <FormComponent
          label="Postkod"
          id="sellerPostalCode"
          value={landlordPostalCode}
          onChange={(e) => setLandlordPostalCode(e.target.value)}
        />
        <FormComponent
          label="Stad"
          id="sellerCity"
          value={landlordCity}
          onChange={(e) => setLandlordCity(e.target.value)}
        />
        <FormComponent
          label="Telefon"
          id="sellerPhone"
          value={landlordPhone}
          onChange={(e) => setLandlordPhone(e.target.value)}
        />
        <FormComponent
          label="Email"
          id="sellerEmail"
          value={landlordEmail}
          onChange={(e) => setLandlordEmail(e.target.value)}
        />
      </div>
    ),
  };
}

export default InputLandlordOne;
