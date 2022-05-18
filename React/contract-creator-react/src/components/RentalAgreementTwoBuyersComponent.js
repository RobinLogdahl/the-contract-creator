import React from "react";
import { useState } from "react";
import "./PurchaseAgreementComponent.css";
import InputRenterOne from "./InputRenterOneComponent";
import InputLandlordOne from "./InputLandlordOneComponent";
import InputRenterObject from "./InputRenterObjectComponent";
import SaveToPDFComponent from "./SaveToPDFComponent";

function RentalAgreementTwoBuyersComponent() {
  const [myBool, setBool] = useState(false);

  const {
    renderPDFButton
  } =SaveToPDFComponent

  const {
    renderRenterOne,
    buyerName,
    buyerSocialSecurity,
    buyerAddress,
    buyerPostalCode,
    buyerCity,
    buyerPhone,
    buyerEmail,
  } = InputRenterOne();

  const {
    renderRenterOne2,
    buyerName2,
    buyerSocialSecurity2,
    buyerAddress2,
    buyerPostalCode2,
    buyerCity2,
    buyerPhone2,
    buyerEmail2,
  } = InputRenterOne();

  const {
    renderLandlordOne,
    sellerName,
    sellerSocialSecurity,
    sellerAddress,
    sellerPostalCode,
    sellerCity,
    sellerPhone,
    sellerEmail,
  } = InputLandlordOne();

  const {
    renderObject,
    objectName,
    objectNumber,
    objectAdress,
    objectPrice,
    objectArea,
    objectAmountOfRooms,
    objectPurpose,
    other,
  } = InputRenterObject();

  const handleButtonClicked = (event) => {
    event.preventDefault();
    fetch("Skapa en ny fetch här", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        buyerName: buyerName,
        buyerSocialSecurity: buyerSocialSecurity,
        buyerAddress: buyerAddress,
        buyerPostalCode: buyerPostalCode,
        buyerCity: buyerCity,
        buyerPhone: buyerPhone,
        buyerEmail: buyerEmail,
        buyerName2: buyerName2,
        buyerSocialSecurity2: buyerSocialSecurity2,
        buyerAddress2: buyerAddress2,
        buyerPostalCode2: buyerPostalCode2,
        buyerCity2: buyerCity2,
        buyerPhone2: buyerPhone2,
        buyerEmail2: buyerEmail2,
        sellerName: sellerName,
        sellerSocialSecurity: sellerSocialSecurity,
        sellerAddress: sellerAddress,
        sellerPostalCode: sellerPostalCode,
        sellerCity: sellerCity,
        sellerPhone: sellerPhone,
        sellerEmail: sellerEmail,
        objectName: objectName,
        objectNumber: objectNumber,
        objectAdress: objectAdress,
        objectPrice: objectPrice,
        objectArea: objectArea,
        objectAmountOfRooms: objectAmountOfRooms,
        objectPurpose: objectPurpose,
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
  };

  return (
    <div id="sdd">
      <div>
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
        <form id="form">
          <p>Hyresgäst 1 uppgifter</p>
          {renderRenterOne}
          <p>Hyresgäst 2 uppgifter</p>
          {renderRenterOne}
          <p>Hyresvärd uppgifter</p>
          {renderLandlordOne}
          <p>Hyresobjekt</p>
          {renderObject}
        </form>
      </div>
    </div>
  );
}

export default RentalAgreementTwoBuyersComponent;
