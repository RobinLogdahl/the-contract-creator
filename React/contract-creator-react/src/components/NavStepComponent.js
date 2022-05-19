import { useState } from 'react';
import StepComponent from "./NavStepCounterComponent";


export default function StepNavigationComponent(props) {
    

    return (
        <div className="stepWrapper">
            {props.labelArray.map((item, index) => 
            <StepComponent 
                key={index} 
                index={index} 
                label={item} 
                selected={props.currentStep === index + 1} 
                updateStep={props.updateStep}
            />)}           
        </div>
    );
}