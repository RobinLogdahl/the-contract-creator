import React from "react";
import { useState } from "react";
import "./PurchaseAgreementComponent.css";
import FormComponent from "./FormComponent";

function InputRenterObject() {

    const [objectName, setObjectName] = useState("");
    const [objectNumber, setObjectNumber] = useState("");
    const [objectAddress, setObjectAddress] = useState("");
    const [objectPostalCode, setObjectPostalCode] = useState("");
    const [objectCity, setObjectCity] = useState("");
    const [objectPrice, setObjectPrice] = useState("");
    const [objectArea, setObjectArea] = useState("");
    const [objectAmountOfRooms, setObjectAmountOfRooms] = useState("");
    const [objectPurpose, setObjectPurpose] = useState("");
    const [other, setOther] = useState("");

  return {
    objectName,
    objectNumber,
    objectAddress,
    objectPostalCode,
    objectCity,
    objectPrice,
    objectArea,
    objectAmountOfRooms,
    objectPurpose,
    other,


    renderObject: (
      <div className="objectInfoContainer">
        <p className="objectInfo">Hyresobjekt</p>
        <FormComponent
          label="Fastighetsbetäckning"
          id="objectName"
          value={objectName}
          onChange={(e) => setObjectName(e.target.value)}
        />
        <FormComponent
          label="Nummer"
          id="objectNumber"
          value={objectNumber}
          onChange={(e) => setObjectNumber(e.target.value)}
        />
        <FormComponent
          label="Adress"
          id="buyerAddress"
          value={objectAddress}
          onChange={(e) => setObjectAddress(e.target.value)}
        />
        <FormComponent
          label="Postkod"
          id="buyerPostalCode"
          value={objectPostalCode}
          onChange={(e) => setObjectPostalCode(e.target.value)}
        />
        <FormComponent
          label="Stad"
          id="buyerCity"
          value={objectCity}
          onChange={(e) => setObjectCity(e.target.value)}
        />
        <FormComponent
          label="Pris/mån"
          id="objectPrice"
          value={objectPrice}
          onChange={(e) => setObjectPrice(e.target.value)}
        />
        <FormComponent
          label="Area i kvm"
          id="objectArea"
          value={objectArea}
          onChange={(e) => setObjectArea(e.target.value)}
        />
        <FormComponent
          label="Antal rum"
          id="objectAmountOfRooms"
          value={objectAmountOfRooms}
          onChange={(e) => setObjectAmountOfRooms(e.target.value)}
        />
        <FormComponent
          label="Syfte"
          id="objectPurpose"
          value={objectPurpose}
          onChange={(e) => setObjectPurpose(e.target.value)}
        />
        <FormComponent
          label="Övrig information"
          id="other"
          value={other}
          onChange={(e) => setOther(e.target.value)}
        />
        </div>
    ),
  };
}

export default InputRenterObject;