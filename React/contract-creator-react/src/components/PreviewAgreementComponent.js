import { useState } from "react";

export default function PreviewAgreementComponent(props) {
  switch (props.value) {
    case 1:
        FetchPurchaseAgreement();
    case 2:
        // FetchRentalAgreement();
  }

  const FetchPurchaseAgreement = (event) => {
    event.preventDefault();
    fetch("https://localhost:7029/Contract/purchase-agreement", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        buyerName: props.buyerName,
        buyerSocialSecurity: props.buyerSocialSecurity,
        buyerAddress: props.buyerAddress,
        buyerPhone: props.buyerPhone,
        sellerName: props.sellerName,
        sellerSocialSecurity: props.sellerSocialSecurity,
        sellerAddress: props.sellerAddress,
        sellerPhone: props.sellerPhone,
        object: props.object,
        price: props.price,
        other: props.other,
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
}
