import React, { Fragment } from "react";
import { useState } from "react";
import PurchaseAgreementComponent from "./PurchaseAgreementComponent";
import SaveToPDFComponent from "./SaveToPDFComponent";

const FormFetcherComponent = (props) => {
  const getSessionStorage = () => {
    let agreementType = sessionStorage.getItem('Köpeskontrakt-key');
    sessionStorage.getItem('Hyreskontrakt-key');
    sessionStorage.getItem('1-key');
    sessionStorage.getItem('2-key');
    sessionStorage.getItem('Skriftligt-key');
    sessionStorage.getItem('E-signering-key');
    sessionStorage.clear();
  };

  return (
    <Fragment>
      <PurchaseAgreementComponent />
    </Fragment>
  );
};

export default FormFetcherComponent;
