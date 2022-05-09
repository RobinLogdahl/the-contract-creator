import AgreementSelectorComponent from "./components/AgreementSelectorComponent";
import {useState} from 'react'


function App() {

  const [currentStep, updateCurrentStep] = useState(1);
  return (
    <div className='App'>
      <AgreementSelectorComponent/>
    </div>
  )
}

export default App;














// import './App.css';
// import React, { Component } from "react";
// import AgreementChoiceComponent from './components/AgreementChoiceComponent';

// export class App extends Component {
//   state = {
//     step: 1,
//     PurchaseAgreement: false,
//     RentalAgreement: false,
//     OneBuyer: false,
//     TwoBuyer: false,
//     OneSeller: false,
//     TwoSeller: false,
//     PaperSign: false,
//     ESign: false,
//   };

//   nextStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step + 1,
//     });
//   };

//   previousStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step - 1,
//     });
//   };

//   handleChange = (input) => (e) => {
//     this.setState({ [input]: e.target.value });
//   };

//   handleSubmit = (input) => (e) => {
//     e.preventDefault();
//     this.handleChange(input)
//     console.log(input)
//   }

//   render() {
//     const { step } = this.state;
//     const { PurchaseAgreement, RentalAgreement } = this.state;
//     const values = { PurchaseAgreement, RentalAgreement };

//     switch (step) {
//       case 1:
//         return (
//           <AgreementChoiceComponent
//             nextStep={this.nextStep}
//             handleChange={this.handleChange}
//             values={values}
//           />
//         );
//       case 2:
//         return <h1>Form2</h1>;
//       case 3:
//         return <h1>Form3</h1>;
//       case 4:
//         return <h1>Success</h1>;
//       default:
//         return <h1>madadadadad</h1>
//     }
//   }
// }

// export default App;
