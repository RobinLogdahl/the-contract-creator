import React, { Fragment } from "react";
import PurchaseAgreementComponent from "./PurchaseAgreementComponent";
import SaveToPDFComponent from "./SaveToPDFComponent";
import RentalAgreementComponent from "./RentalAgreementComponent";
import RentalAgreementTwoBuyersComponent from "./RentalAgreementTwoBuyersComponent";

const NavFormSelector = (props) => {
  let arr = Object.values(props);
  console.log(arr);
  const [value1, value2, value3] = arr;

  return (
    <div>
      {(() => {
        if (value1 === "Köpesavtal" &&value2 === "1" &&value3 === "Skriftligt") {
          return <PurchaseAgreementComponent />;
        } 
        else if (value1 === "Hyresavtal" &&value2 === "1" &&value3 === "Skriftligt") {
          return <RentalAgreementComponent />;
        } 
        else if (value1 === "Hyresavtal" &&value2 === "2" &&value3 === "Skriftligt") {
          return <RentalAgreementTwoBuyersComponent />
        } 
        else {
          return <p>Else</p>;
        }
      })()}
    </div>
  );
};

export default NavFormSelector;
