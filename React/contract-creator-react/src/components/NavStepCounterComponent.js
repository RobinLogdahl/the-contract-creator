import { useState } from 'react';


export default function StepComponent(props) {
    return (
        <div className={"stepBlock" + (props.selected ? " selected" : '')}>
            <div className={"circleWrapper"} onClick={() => props.updateStep(props.index + 1)}>
                <div className="circle">{props.index + 1}</div>
            </div>
            <span className="stepItem">{props.label}</span>
        </div>
    );
}