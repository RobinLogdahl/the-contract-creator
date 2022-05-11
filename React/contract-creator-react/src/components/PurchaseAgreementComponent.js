import React from "react";
import { useState } from "react";
import './PurchaseAgreementComponent.css';
import FormComponent from "./FormComponent";

function PurchaseAgreementComponent() {
  const [buyerName, setBuyerName] = useState("");
  const [buyerSocialSecurity, setBuyerSocial] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");

  const [sellerName, setSellerName] = useState("");
  const [sellerSocialSecurity, setSellerSocial] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [sellerPhone, setSellerPhone] = useState("");

  const [object, setObject] = useState("");
  const [price, setPrice] = useState("");
  const [other, setOther] = useState("");

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
    };
  

  return (
    <div id="htmlinsert">
      <form id="form">
        <p>Köparens uppgifter</p>
        <FormComponent
          label="För- och efternamn"
          id="buyerName"
          value={buyerName}
          onChange={(e) => setBuyerName(e.target.value)}
        />
        <FormComponent
          label="Personnummer"
          id="buyerSocialSecurity"
          value={buyerSocialSecurity}
          onChange={(e) => setBuyerSocial(e.target.value)}
        />
        <FormComponent
          label="Adress"
          id="buyerAddress"
          value={buyerAddress}
          onChange={(e) => setBuyerAddress(e.target.value)}
        />
        <FormComponent
          label="Telefon"
          id="buyerPhone"
          value={buyerPhone}
          onChange={(e) => setBuyerPhone(e.target.value)}
        />
        <p>Säljarens uppgifter</p>
        <FormComponent
          label="För- och efternamn"
          id="socialName"
          value={sellerName}
          onChange={(e) => setSellerName(e.target.value)}
        />
        <FormComponent
          label="Personnummer"
          id="sellerSocialSecurity"
          value={sellerSocialSecurity}
          onChange={(e) => setSellerSocial(e.target.value)}
        />
        <FormComponent
          label="Adress"
          id="sellerAddress"
          value={sellerAddress}
          onChange={(e) => setSellerAddress(e.target.value)}
        />
        <FormComponent
          label="Telefon"
          id="sellerPhone"
          value={sellerPhone}
          onChange={(e) => setSellerPhone(e.target.value)}
        />
        <p>Produkt</p>
        <FormComponent
          label="Typ av produkt"
          id="object"
          value={object}
          onChange={(e) => setObject(e.target.value)}
        />
        <FormComponent
          label="Pris"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <FormComponent
          label="Övrig information"
          id="other"
          value={other}
          onChange={(e) => setOther(e.target.value)}
        />

        <button onClick={handleButtonClicked}>Generera Avtal</button>
      </form>
    </div>
  );
}

export default PurchaseAgreementComponent;
