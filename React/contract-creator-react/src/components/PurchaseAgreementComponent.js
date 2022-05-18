import React from "react";
import {useState} from 'react';
import "./PurchaseAgreementComponent.css";
import useBuyerOneInputComponent from "./BuyerOneInputComponent";
import useSellerOneInputComponent from "./SellerOneInputComponent";
import useObjectComponent from "./ObjectComponent";
import SaveToPDFComponent from "./SaveToPDFComponent"


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
    debugger
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
        var getHTML = document.getElementById("htmlinsert");
        getHTML.innerHTML = html;
      })
      .catch(function (err) {
        console.warn("Something went wrong.", err);
      });
      setBool(true);
  }

  return (
    <div id="formContainer">
      <div className="navigationItems">
      {(() => {
        switch (myBool) {
          case false:
            return (
                <button className="primaryButton newButton" onClick={handleButtonClicked}>Generera Avtal</button>
              );
          case true:
            return (
              <div>
                {renderPDFButton}
              </div>
            );
        }
      })()}
      </div>
      <div id="htmlinsert">
        <form className="purchaseAgreementForm" id="form">
          {renderBuyer}
          {renderSeller}
          {renderObject}
        </form>
      </div>
    </div>
  );
}

export default PurchaseAgreementComponent;
