import React from "react";
import { useState } from "react";
import PurchaseAgreementComponent from "./PurchaseAgreementComponent";

const FormFetcherComponent = (props) => {

    const handleIncomingData = () => {
        let arr = Object.values(props);
        console.log(arr);
        const [newArr] = arr;
        console.log(newArr);
        let [agreementType, buyers, signingType] = newArr;
        console.log(agreementType.value, buyers.value, signingType.value)
    }


    
  return (
    <div>
        <button onClick={() => handleIncomingData()}>Testdata</button>    
        <PurchaseAgreementComponent />
    </div>
  );
};

export default FormFetcherComponent;
