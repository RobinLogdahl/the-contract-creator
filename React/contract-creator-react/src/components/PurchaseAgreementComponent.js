import React from "react";
import "./PurchaseAgreementComponent.css";
import useBuyerOneInputComponent from "./BuyerOneInputComponent";
import useSellerOneInputComponent from "./SellerOneInputComponent";
import useObjectComponent from "./ObjectComponent";
import html2canvas from "html2canvas";
// import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf-react'
import { jsPDF } from "jspdf";

function PurchaseAgreementComponent() {
  let clickedButton = 1;

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

  const GeneratePDF = (event) => {
    const filename = `Köpeskontrakt_test.pdf`;

    html2canvas(document.querySelector("#contract-container"), {
      scale: 2,
    }).then((canvas) => {
      let pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
      pdf.save(filename);
    });
  };

  const handleButtonClicked = (event) => {
    event.preventDefault();
    clickedButton = 2;
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
  };

  return (
    <div id="sdd">
      <div>
        <button className="primaryButton">Börja om</button>
        {(() => {
          switch (clickedButton) {
            case 1:
              return (
                <button className="primaryButton" onClick={handleButtonClicked}>
                  Generera Avtal
                </button>
              );
            case 2:
              return (
                <button className="primaryButton" onClick={GeneratePDF}>
                  Spara som PDF
                </button>
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
