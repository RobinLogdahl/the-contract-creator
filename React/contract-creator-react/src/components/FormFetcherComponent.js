import React, { Fragment } from "react";
import PurchaseAgreementComponent from "./PurchaseAgreementComponent";
import SaveToPDFComponent from "./SaveToPDFComponent";
import RentalAgreementComponent from "./RentalAgreementComponent"
import RentalAgreementTwoBuyersComponent from "./RentalAgreementTwoBuyersComponent";

const FormFetcherComponent = (props) => {

  let arr = Object.values(props);
  console.log(arr);
  const [value1, value2, value3] = arr;
  console.log(`FormFetcher value1: ${value1}`)
  console.log(`FormFetcher value2: ${value2}`)
  console.log(`FormFetcher value3: ${value3}`)




  return (
    <div>
      {(() => {
        if (value1 === 'Köpeskontrakt' && value2 === '1' && value3 === 'Skriftligt') {
          return (
            <Fragment>
              <SaveToPDFComponent />
              <PurchaseAgreementComponent />
            </Fragment>
          )
        }
        else if (value1 === 'Hyreskontrakt' && value2 === '1' && value3 === 'Skriftligt') {
          return (
            <Fragment>
              <SaveToPDFComponent />
              <RentalAgreementComponent />
            </Fragment>
          )
        }
        else if (value1 === 'Hyreskontrakt' && value2 === '2' && value3 === 'Skriftligt') {
          return (
            <Fragment>
              <SaveToPDFComponent />
              <RentalAgreementTwoBuyersComponent />
            </Fragment>)
        }

      })()}
    </div>
  )
}

export default FormFetcherComponent;
