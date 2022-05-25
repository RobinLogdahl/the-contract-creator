import React from "react";
import { useState } from "react";
import "./RentalAgreement2BuyersComponent.css";
import InputRenterOne from "./InputRenterOneComponent";
import InputRenterTwo from "./InputRenterTwoComponent";
import InputLandlordOne from "./InputLandlordOneComponent";
import InputRenterObject from "./InputRenterObjectComponent";
import SaveToPDFComponent from "./SaveToPDFComponent";

function RentalAgreementTwoBuyersComponent() {
  const [myBool, setBool] = useState(false);

  const { renderPDFButton } = SaveToPDFComponent();

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
    renderRenterTwo,
    buyerName2,
    buyerSocialSecurity2,
    buyerAddress2,
    buyerPostalCode2,
    buyerCity2,
    buyerPhone2,
    buyerEmail2,
  } = InputRenterTwo();

  const {
    renderLandlordOne,
    landlordName,
    landlordSocialSecurity,
    landlordAddress,
    landlordPostalCode,
    landlordCity,
    landlordPhone,
    landlordEmail,
  } = InputLandlordOne();
  const {
    renderObject,
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
  } = InputRenterObject();

  const handleButtonClicked = (event) => {
    event.preventDefault();
    fetch("https://localhost:7029/Contract/rental-agreement-two-renters", {
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

        sellerName: landlordName,
        sellerSocialSecurity: landlordSocialSecurity,
        sellerAddress: landlordAddress,
        sellerPostalCode: landlordPostalCode,
        sellerCity: landlordCity,
        sellerPhone: landlordPhone,
        sellerEmail: landlordEmail,

        objectCity: objectCity,
        objectName: objectName,
        objectNumber: objectNumber,
        objectAddress: objectAddress,
        objectPostalCode: objectPostalCode,
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
                <button className="primaryButton newButton" onClick={handleButtonClicked}>Visa Förhandsvisning</button>
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
        <form className="rentalAgreementForm" id="form">
          {renderRenterOne}
          {renderRenterTwo}
          {renderLandlordOne}
          {renderObject}
        </form>
      </div>
    </div>
  );
}

export default RentalAgreementTwoBuyersComponent;
