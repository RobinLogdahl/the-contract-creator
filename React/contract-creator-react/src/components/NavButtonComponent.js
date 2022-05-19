import { useState, Fragment } from "react";
import StepNavigationComponent from "./NavStepComponent";

export default function NavButton(props) {
  const labelArray = ["", "", "", ""];
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }

  return {
    currentStep,
    renderNavButtons: (
      <div className="navigationBox">
        <div className="navigationStepContainer">
          <StepNavigationComponent
            labelArray={labelArray}
            currentStep={currentStep}
            updateStep={updateStep}
          />
        </div>
        <div className="navigationButtonContainer">
          {(() => {
            switch (currentStep) {
              case 1:
              case 2:
              case 3:
                return (
                  <div className="navigationItems">
                    <button
                      className="primaryButton previousStep"
                      onClick={() =>
                        updateStep(
                          currentStep - 1 === 0 ? currentStep : currentStep - 1
                        )
                      }
                    >
                      Föregående steg
                    </button>
                    <button
                      className="primaryButton nextStep"
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
              case 4:
                return (
                  <div className="navigationItems">
                    <button
                      className="primaryButton previousStep"
                      onClick={() =>
                        updateStep(
                          currentStep - 1 === 0 ? currentStep : currentStep - 1
                        )
                      }
                    >
                      Föregående steg
                    </button>
                  </div>
                );
            }
          })()}
        </div>
      </div>
    ),
  };
}
