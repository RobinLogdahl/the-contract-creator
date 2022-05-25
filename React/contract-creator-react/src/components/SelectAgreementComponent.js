import React from "react";
import { useState } from "react";

const useSelectAgreementComponent = () => {
  const [agreementType, setAgreementType] = useState("Köpesavtal")
  const [value, setValue] = useState("Köpesavtal");

  const handleClick = (event) => {
    if(event.target.checked === true){
        setValue(event.target.value);
        setAgreementType(event.target.value);
        console.log(agreementType);
      } 
      else {
        setValue("");
        setAgreementType("");
        console.log(agreementType);
      }
    }

  return {
    agreementType,
    
    renderAgreementTypeDropDown: (
      <div>
        <input type="checkbox" value="Köpesavtal" name="Köpesavtal" onChange={handleClick} /> Köpesavtal
        <input type="checkbox" value="Hyresavtal" name="Hyresavtal" onChange={handleClick}/> Hyresavtal
      </div>
    ),
  };
};

export default useSelectAgreementComponent;

// import React from "react";
// import { useState } from "react";
// // import CheckboxComponent from "./CheckboxComponent";

// const useSelectAgreementComponent = () => {
//   const [agreementType, setAgreementType] = useState("Köpesavtal");
//   const [value, setValue] = useState("Köpesavtal");

//   // const onChangeValue = (e) => {
//   //   console.log(e.target.value);
//   //   if(e.target.checked){
//   //     e.target.unchecked = true;
//   //   }
//   // };

//   const handleClick = (e) => {
//     if (e.target.value === value) {
//       setValue("");
//     } else {
//       setValue(e.target.value);
//     }
//   }

//   return {
//     agreementType,

//     renderAgreementTypeDropDown: (
//       <div>
//         <input type="radio" value="Köpesavtal" name="Köpesavtal" onClick={handleClick} /> Köpesavtal
//         <input type="radio" value="Hyresavtal" name="Hyresavtal" onClick={handleClick} /> Hyresavtal
//       </div>
//     ),
//   };
// };

// export default useSelectAgreementComponent;
