import { useState } from "react";
import StepNavigationComponent from "./components/StepNavigationComponent";
import FormFetcherComponent from "./components/FormFetcherComponent";
import PreviewAgreementComponent from "./components/PreviewAgreementComponent";
import useSelectAgreementComponent from "./components/SelectAgreementComponent";
import useSelectPartisComponent from "./components/SelectPartiesComponent"
import useSelectSigningComponent from "./components/SelectSigningComponent"
import SaveToPDFComponent from "./components/SaveToPDFComponent"


function App() {
  const labelArray = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }

  const {
    renderAgreementTypeDropDown,
    agreementType
  } = useSelectAgreementComponent();

  const {
    renderNumberOfBuyersDropDown,
    buyers
  } = useSelectPartisComponent()
  
  const {
    renderSignTypeDropDown,
    signType
  } = useSelectSigningComponent()

  return (
    <div className="App">

      <StepNavigationComponent
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
        />
      <button
        className="primaryButton"
        onClick={() =>
          updateStep(currentStep - 1 === 0 ? currentStep : currentStep - 1)
        }
        >
        Föregående steg
      </button>

      {currentStep + 1 === 0 || currentStep + 1 === 1 || currentStep + 1 === 2 || currentStep + 1 === 3 || currentStep + 1 === 4 ? (
        <button
        className="primaryButton"
        onClick={() =>
          updateStep(currentStep + 1 === 5 ? currentStep : currentStep + 1)
        }
        >
          Nästa steg
        </button>
      ) : (
        <button
        className="primaryButton"
        onClick={() => PreviewAgreementComponent()}>Generera Avtal</button>)}

          {(() => {
            switch (currentStep) {
              case 1:
                return <div>{renderAgreementTypeDropDown}</div>;
              case 2:
                return <div>{renderNumberOfBuyersDropDown}</div>;
              case 3:
                return <div>{renderSignTypeDropDown}</div>;
              case 4:
                return <FormFetcherComponent value1={agreementType} value2={buyers} value3={signType} />;
              case 5:
                return <PreviewAgreementComponent />;
              default:
                return <p>Something went wrong, reload the page</p>;
            }
          })()}
    </div>
  );
}

export default App;
