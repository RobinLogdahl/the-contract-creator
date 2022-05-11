import { useState } from "react";
import StepNavigationComponent from "./components/StepNavigationComponent";

import SelectAgreementComponent from "./components/SelectAgreementComponent";
import SelectPartiesComponent from "./components/SelectPartiesComponent";
import SelectSigningComponent from "./components/SelectSigningComponent";
import FormFetcherComponent from "./components/FormFetcherComponent";
import PreviewAgreementComponent from "./components/PreviewAgreementComponent";

function App() {
  const labelArray = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }

  function handleSubmit() {}

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
        onClick={() =>
          updateStep(currentStep + 1 === 5 ? currentStep : currentStep + 1)
        }
        >
          Generera Avtal
        </button>
      )}
          {(() => {
            switch (currentStep) {
              case 1:
                return <SelectAgreementComponent />;
              case 2:
                return <SelectPartiesComponent />;
              case 3:
                return <SelectSigningComponent />;
              case 4:
                return <FormFetcherComponent />;
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
