import React from "react";
import { useState } from "react";
import FormComponent from "./FormComponent";
import { html2canvas } from "html2canvas";
// import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf-react'
import { jsPDF } from "jspdf";

export default class PurchaseAgreementComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInputs: {
        buyerName: props.buyerName,
        buyerSocialSecurity: props.buyerSocialSecurity,
        buyerAddress: props.buyerAddress,
        buyerPhone: props.buyerPhone,
        // sellerName: props.sellerName,
        // sellerSocialSecurity: props.sellerSocialSecurity,
        // sellerAddress: props.sellerAddress,
        // sellerPhone: props.sellerPhone,
        // object: props.object,
        // price: props.price,
        // other: props.other,
      },
    };
  }

  // let jsonData = {
  //     "buyerName": `${buyerName}`,
  //     "buyerSocialSecurity": `${buyerSocialSecurity}`,
  //     "buyerAddress": `${buyerAddress}`,
  //     "buyerPhone": `${buyerPhone}`,
  //     "sellerName": `${sellerName}`,
  //     "sellerSocialSecurity": `${sellerSocialSecurity}`,
  //     "sellerAddress": `${sellerAddress}`,
  //     "sellerPhone": `${sellerPhone}`,
  //     "object": `${object}`,
  //     "price": `${price}`,
  //     "other": `${other}`,
  // }

  handleBuyerNameChange = (event) => {
    var userInputs = this.state.userInputs;
    userInputs.buyerName = event.target.value;

    this.setState({ userInputs: userInputs });
  };

  handleBuyerSocialChange = (event) => {
    var userInputs = this.state.userInputs;
    userInputs.buyerSocialSecurity = event.target.value;

    this.setState({ userInputs: userInputs });
  };

  handleBuyerAddressChange = (event) => {
    var userInputs = this.state.userInputs;
    userInputs.buyerAddress = event.target.value;

    this.setState({ userInputs: userInputs });
  };

  handleBuyerPhoneChange = (event) => {
    var userInputs = this.state.userInputs;
    userInputs.buyerPhone = event.target.value;

    this.setState({ userInputs: userInputs });
  };

  GeneratePDF = () => {
    const filename = `Köpeskontrakt_test.pdf`;

    html2canvas(document.querySelector("#contract-container"), {
      scale: 2,
    }).then((canvas) => {
      let pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
      pdf.save(filename);
    });
  };

  handleButtonClicked() {
    console.log(this.state.userInputs);
  }

  render() {
    return (
      <div>
        <form id="form">
          <p>Köparens uppgifter</p>
          <FormComponent
            label="För- och efternamn"
            id="buyerName"
            value={this.state.userInputs.buyerName}
            onChange={this.handleChanged.handleBuyerNameChange.bind(this)}
          />
          <FormComponent
            label="Personnummer"
            id="buyerSocialSecurity"
            value={this.state.userInputs.buyerSocialSecurity}
            onChange={this.handleChanged.handleBuyerSocialChange.bind(this)}
          />
          <FormComponent
            label="Adress"
            id="buyerAddress"
            value={this.state.userInputs.buyerAddress}
            onChange={this.handleChanged.handleBuyerAddressChange.bind(this)}
          />
          <FormComponent
            label="Telefon"
            id="buyerPhone"
            value={this.state.userInputs.buyerPhone}
            onChange={this.handleChanged.handleBuyerPhoneChange.bind(this)}
          />
          {/* <p>Säljarens uppgifter</p>
          <FormComponent
            label="För- och efternamn"
            id="sellerName"
            onChange={handleChange}
          />
          <FormComponent
            label="Personnummer"
            id="sellerSocialSecurity"
            onChange={handleChange}
          />
          <FormComponent
            label="Adress"
            id="sellerAddress"
            onChange={handleChange}
          />
          <FormComponent
            label="Telefon"
            id="sellerPhone"
            onChange={handleChange}
          />
          <p>Produkt</p>
          <FormComponent
            label="Typ av produkt"
            id="object"
            onChange={handleChange}
          />
          <FormComponent label="Pris" id="price" onChange={handleChange} />
          <FormComponent
            label="Övrig information"
            id="other"
            onChange={handleChange}
          /> */}
          <button onClick={this.handleButtonClicked.bind(this)}>click me</button>
        </form>
      </div>
    );
  }
}
