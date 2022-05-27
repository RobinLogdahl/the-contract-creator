import { useState } from "react";
import StepNavigationComponent from "./components/NavStepComponent";
import NavFormSelector from "./components/NavFormSelectorComponent";
import useSelectAgreementComponent from "./components/SelectAgreementComponent";
import useSelectPartiesComponent from "./components/SelectPartiesComponent";
import useSelectSigningComponent from "./components/SelectSigningComponent";
import NavButton from "./components/NavButtonComponent"
import image from "../src/images/agreementlogo.PNG";

function App() {
  const { renderAgreementTypeDropDown, agreementType } =
    useSelectAgreementComponent();

  const { renderNumberOfBuyersDropDown, buyers } = useSelectPartiesComponent();
  const { renderSignTypeDropDown, signType } = useSelectSigningComponent();
  const { renderNavButtons, currentStep } = NavButton();

  const Refresh = () =>{
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="header">
        <div className="logoContainer" onClick={Refresh}>
        <img className="logo" src={image} />
        <p className="logoText">EasyAgreements</p>
        </div>
        {renderNavButtons}
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
                <NavFormSelector
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
    </div>
  );
}

export default App;
