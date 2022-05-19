import { useState } from "react";
import StepNavigationComponent from "./components/StepNavigationComponent";
import FormFetcherComponent from "./components/FormFetcherComponent";
import useSelectAgreementComponent from "./components/SelectAgreementComponent";
import useSelectPartisComponent from "./components/SelectPartiesComponent";
import useSelectSigningComponent from "./components/SelectSigningComponent";
import ButtonNavigationComponent from "./components/ButtonNavigationComponent"
import image from "../src/images/agreementlogo.PNG";

function App() {
  const { renderAgreementTypeDropDown, agreementType } =
    useSelectAgreementComponent();

  const { renderNumberOfBuyersDropDown, buyers } = useSelectPartisComponent();

  const { renderSignTypeDropDown, signType } = useSelectSigningComponent();

  const { renderNavButtons, currentStep } = ButtonNavigationComponent();

  const Refresh = () =>{
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="header" onClick={Refresh}>
        <img className="logo" src={image} />
        <p className="logoText">EasyAgreements</p>
      </div>
      <div className="componentContainer">
        {(() => {
          switch (currentStep) {
            case 1:
              return <div className="agreementType">{renderAgreementTypeDropDown}</div>
            case 2:
              return <div className="buyers">{renderNumberOfBuyersDropDown}</div>
            case 3:
              return <div className="signingType">{renderSignTypeDropDown}</div>
            case 4:
              return (
                <FormFetcherComponent
                  value1={agreementType}
                  value2={buyers}
                  value3={signType}
                />
              );
            default:
              return <p>Something went wrong, reload the page</p>;
          }
        })()}
      </div>
      {renderNavButtons}
    </div>
  );
}

export default App;
