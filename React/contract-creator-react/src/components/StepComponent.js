import { useState } from 'react';

export default function StepComponent(props) {
    return (
        <div className="stepBlock">
            <div className="">

            </div>
            <span>{props.label}</span>
        </div>
    );
}