import { useState } from "react";
import StepNavigationComponent from "./components/StepNavigationComponent";
import FormFetcherComponent from "./components/FormFetcherComponent";
import ButtonNavigationComponent from "./components/ButtonNavigationComponent";
import PreviewAgreementComponent from "./components/PreviewAgreementComponent";
import useSelectAgreementComponent from "./components/SelectAgreementComponent";

import useSelectPartisComponent from "./components/SelectPartiesComponent";
import useSelectSigningComponent from "./components/SelectSigningComponent";

function App() {
  // function updateStep(step) {
  //   updateCurrentStep(step);
  // }

  const { renderAgreementTypeDropDown, agreementType } =
    useSelectAgreementComponent();

  const { renderNumberOfBuyersDropDown, buyers } = useSelectPartisComponent();

  const { renderSignTypeDropDown, signType } = useSelectSigningComponent();

  const { renderNavButtons, currentStep } = ButtonNavigationComponent();

  return (
    <div className="App">
      <div className="header">
        <h1>Avtalsskaparen</h1>
      </div>
      {/* <div className="navigationStepContainer">
        <StepNavigationComponent
          labelArray={labelArray}
          currentStep={currentStep}
          updateStep={updateStep}
        />
      </div> */}

      {/* <div className="navigationButtonContainer">
        {(() => {
          switch (currentStep) {
            case 1:
            case 2:
            case 3:
              return (
                <div className="navigationItems">
                  <button
                    className="primaryButton" 
                    onClick={() =>
                      updateStep(
                        currentStep - 1 === 0 ? currentStep : currentStep - 1
                      )
                    }
                  >
                    Föregående steg
                  </button>
                  <button
                    className="primaryButton"
                    onClick={() =>
                      updateStep(
                        currentStep + 1 === 5 ? currentStep : currentStep + 1
                      )
                    }
                  >
                    Nästa steg
                  </button>
                </div>
              );
          }
        })()}
      </div> */}
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
            // case 5:
            //   return <PreviewAgreementComponent />;
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
