import React from "react";
import { useState } from "react";
import "./PurchaseAgreementComponent.css";
import FormComponent from "./InputFormComponent";

function InputObject() {
    const [object, setObject] = useState("");
    const [price, setPrice] = useState("");
    const [other, setOther] = useState("");

  return {
    object,
    price,
    other,

    renderObject: (
      <div className="buyerOneComponent">
        <FormComponent
          label="Typ av produkt"
          id="object"
          onChange={(e) => setObject(e.target.value)}
        />
        <FormComponent
          label="Pris"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <FormComponent
          label="Övrig information"
          id="other"
          onChange={(e) => setOther(e.target.value)}
        />
      </div>
    ),
  };
}

export default InputObject;
