import React from "react";
import { useState } from "react";
import "./PurchaseAgreementComponent.css";
import FormComponent from "./FormComponent";

function useRenterObject() {

    const [objectName, setObjectName] = useState("");
    const [objectNumber, setObjectNumber] = useState("");
    const [objectAdress, setObjectAdress] = useState("");
    const [objectPrice, setObjectPrice] = useState("");
    const [objectArea, setObjectArea] = useState("");
    const [objectAmountOfRooms, setObjectAmountOfRooms] = useState("");
    const [objectPurpose, setObjectPurpose] = useState("");
    const [other, setOther] = useState("");

  return {
    objectName,
    objectNumber,
    objectAdress,
    objectPrice,
    objectArea,
    objectAmountOfRooms,
    objectPurpose,
    other,


    renderObject: (
        <div>
        <FormComponent
          label="HyresObjektetets namn"
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
          id="objectName"
          value={objectAdress}
          onChange={(e) => setObjectAdress(e.target.value)}
        />
        <FormComponent
          label="Pris"
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

export default useRenterObject;