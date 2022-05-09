import React, { Fragment } from "react";
import { useState } from "react";
import PurchaseAgreementComponent from "./PurchaseAgreementComponent";
import SaveToPDFComponent from "./SaveToPDFComponent";

const FormFetcherComponent = (props) => {

  let arr = Object.values(props);
        console.log(arr);
        debugger
        const [value1, value2, value3] = arr;
        console.log(value1)
        console.log(value2)
        console.log(value3)

    

    
  return(
    <div>
    {(() =>{
                if(value1 === 'Köpeskontrakt'){
                  return(
                      <Fragment>
                      <SaveToPDFComponent />   
                      <PurchaseAgreementComponent />
                      </Fragment>
                  )
                  
                }
                else if(value1 === 'Hyreskontrakt'){
                  return <h1>Hyreskontrakt</h1>
                }
                
    })()}
    </div>
  )
}

      
    
  // }
  //   <Fragment>
  //       <SaveToPDFComponent />   
  //       <PurchaseAgreementComponent />
  //   </Fragment>
  // );

export default FormFetcherComponent;
