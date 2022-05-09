import React, { Fragment } from "react";
import { useState } from "react";
import PurchaseAgreementComponent from "./PurchaseAgreementComponent";
import SaveToPDFComponent from "./SaveToPDFComponent";

const FormFetcherComponent = (props) => {

    const handleIncomingData = () => {
        let arr = Object.values(props);
        console.log(arr);
        
    }

    handleIncomingData();

    
  return (
    <Fragment>
        <SaveToPDFComponent />   
        <PurchaseAgreementComponent />
    </Fragment>
  );
};

export default FormFetcherComponent;
