import React from "react";
import { useState } from "react";
import './PurchaseAgreementComponent.css';
import FormComponent from "./FormComponent";

function RentalAgreementTwoBuyersComponent() {
  const [buyerName, setBuyerName] = useState("");
  const [buyerSocialSecurity, setBuyerSocial] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const [buyerPostalCode, setBuyerPostalCode] = useState("");
  const [buyerCity, setBuyerCity] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");

  const [buyerName2, setBuyerName2] = useState("");
  const [buyerSocialSecurity2, setBuyerSocial2] = useState("");
  const [buyerAddress2, setBuyerAddress2] = useState("");
  const [buyerPostalCode2, setBuyerPostalCode2] = useState("");
  const [buyerCity2, setBuyerCity2] = useState("");
  const [buyerPhone2, setBuyerPhone2] = useState("");
  const [buyerEmail2, setBuyerEmail2 ] = useState("");

  const [sellerName, setSellerName] = useState("");
  const [sellerSocialSecurity, setSellerSocial] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [sellerPostalCode, setSellerPostalCode] = useState("");
  const [sellerCity, setSellerCity] = useState("");
  const [sellerPhone, setSellerPhone] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");

  const [objectName, setObjectName] = useState("");
  const [objectNumber, setObjectNumber] = useState("");
  const [objectAdress, setObjectAdress] = useState("");
  const [objectPrice, setObjectPrice] = useState("");
  const [objectArea, setObjectArea] = useState("");
  const [objectAmountOfRooms, setObjectAmountOfRooms] = useState("");
  const [objectPurpose, setObjectPurpose] = useState("");
  const [other, setOther] = useState("");

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
    };
  

  return (
    <div id="htmlinsert">
      <form id="form">
        <p>Hyresgäst 1 uppgifter</p>
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
          label="Postkod"
          id="buyerPostalCode"
          value={buyerPostalCode}
          onChange={(e) => setBuyerPostalCode(e.target.value)}
        />
        <FormComponent
          label="Stad"
          id="buyerCity"
          value={buyerCity}
          onChange={(e) => setBuyerCity(e.target.value)}
        />
        <FormComponent
          label="Telefon"
          id="buyerPhone"
          value={buyerPhone}
          onChange={(e) => setBuyerPhone(e.target.value)}
        />
        <FormComponent
          label="Email"
          id="buyerEmail"
          value={buyerEmail}
          onChange={(e) => setBuyerEmail(e.target.value)}
        />
        <p>Hyresgäst 2 uppgifter</p>
        <FormComponent
          label="För- och efternamn"
          id="buyerName2"
          value={buyerName2}
          onChange={(e) => setBuyerName2(e.target.value)}
        />
        <FormComponent
          label="Personnummer"
          id="buyerSocialSecurity2"
          value={buyerSocialSecurity2}
          onChange={(e) => setBuyerSocial2(e.target.value)}
        />
        <FormComponent
          label="Adress"
          id="buyerAddress2"
          value={buyerAddress2}
          onChange={(e) => setBuyerAddress2(e.target.value)}
        />
        <FormComponent
          label="Postkod"
          id="buyerPostalCode2"
          value={buyerPostalCode2}
          onChange={(e) => setBuyerPostalCode2(e.target.value)}
        />
        <FormComponent
          label="Stad"
          id="buyerCity2"
          value={buyerCity2}
          onChange={(e) => setBuyerCity2(e.target.value)}
        />
        <FormComponent
          label="Telefon"
          id="buyerPhone2"
          value={buyerPhone2}
          onChange={(e) => setBuyerPhone2(e.target.value)}
        />
        <FormComponent
          label="Email"
          id="buyerEmail2"
          value={buyerEmail2}
          onChange={(e) => setBuyerEmail2(e.target.value)}
        />
        <p>Hyresvärd uppgifter</p>
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
          label="Postkod"
          id="sellerPostalCode"
          value={sellerPostalCode}
          onChange={(e) => setSellerPostalCode(e.target.value)}
        />
        <FormComponent
          label="Stad"
          id="sellerCity"
          value={sellerCity}
          onChange={(e) => setSellerCity(e.target.value)}
        />
        <FormComponent
          label="Telefon"
          id="sellerPhone"
          value={sellerPhone}
          onChange={(e) => setSellerPhone(e.target.value)}
        />
        <FormComponent
          label="Email"
          id="sellerEmail"
          value={sellerEmail}
          onChange={(e) => setSellerEmail(e.target.value)}
        />
        <p>Hyresobjekt</p>
        <FormComponent
          label="Hyres objektetets namn"
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

        <button onClick={handleButtonClicked}>Generera Avtal</button>
      </form>
    </div>
  );
}

export default RentalAgreementTwoBuyersComponent;