import React from "react";
import {useState} from 'react';
import "./PurchaseAgreementComponent.css";
import useBuyerOneInputComponent from "./BuyerOneInputComponent";
import useSellerOneInputComponent from "./SellerOneInputComponent";
import useObjectComponent from "./ObjectComponent";
import SaveToPDFComponent from "./SaveToPDFComponent";

function PurchaseAgreementComponent() {
  const [myBool, setBool] = useState(false);

  const{
    renderPDFButton,
  } = SaveToPDFComponent();

  const {
    renderBuyer,
    buyerName,
    buyerSocialSecurity,
    buyerAddress,
    buyerPhone,
  } = useBuyerOneInputComponent();

  const {
    renderSeller,
    sellerName,
    sellerSocialSecurity,
    sellerAddress,
    sellerPhone,
  } = useSellerOneInputComponent();

  const { renderObject, object, price, other } = useObjectComponent();

  const handleButtonClicked = (event) => {
    event.preventDefault();
    fetch("https://localhost:7029/Contract/purchase-agreement", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        buyerName: buyerName,
        buyerSocialSecurity: buyerSocialSecurity,
        buyerAddress: buyerAddress,
        buyerPhone: buyerPhone,
        sellerName: sellerName,
        sellerSocialSecurity: sellerSocialSecurity,
        sellerAddress: sellerAddress,
        sellerPhone: sellerPhone,
        object: object,
        price: price,
        other: other,
      }),
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        var root = document.getElementById("htmlinsert");
        root.innerHTML = html;
      })
      .catch(function (err) {
        console.warn("Something went wrong.", err);
      });
      setBool(true);
  }


  return (
    <div id="sdd">
      <div>
      {(() => {
        switch (myBool) {
          case false:
            return (
              <div>
                <button className="primaryButton" onClick={()=>updateStep(currentStep - 1 === 0 ? currentStep : currentStep - 1)}>Föregående steg</button>
                <button className="primaryButton" onClick={handleButtonClicked}>Visa Förhandsvisning</button>
              </div>
              
              );
              case true:
                return (
                  <div>
                <button className="primaryButton">Föregående steg</button>
                {renderPDFButton}
              </div>
            );
        }
      })()}
      </div>
      <div id="htmlinsert">
        <form id="form">
          <p>Köparens uppgifter</p>
          {renderBuyer}
          <p>Säljarens uppgifter</p>
          {renderSeller}
          <p>Produkt</p>
          {renderObject}
        </form>
      </div>
    </div>
  );
}

export default PurchaseAgreementComponent;
