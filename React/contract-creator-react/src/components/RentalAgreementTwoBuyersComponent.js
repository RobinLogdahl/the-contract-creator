import React from "react";
import { useState } from "react";
import "./PurchaseAgreementComponent.css";
import useRenterOneComponent from "./RenterOneComponent";
import useLandlordOneComponent from "./LandlordOneComponent";
import useRenterObject from "./RenterObjectComponent";
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
  } = useRenterOneComponent();

  const {
    renderRenterOne2,
    buyerName2,
    buyerSocialSecurity2,
    buyerAddress2,
    buyerPostalCode2,
    buyerCity2,
    buyerPhone2,
    buyerEmail2,
  } = useRenterOneComponent();

  const {
    renderLandlordOne,
    sellerName,
    sellerSocialSecurity,
    sellerAddress,
    sellerPostalCode,
    sellerCity,
    sellerPhone,
    sellerEmail,
  } = useLandlordOneComponent();

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
  } = useRenterObject();

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
                <div>
                  <button className="primaryButton">Föregående steg</button>
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
