import React, { Component, Fragment } from "react";

export class AgreementChoiceComponent extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;

    return (
      <Fragment>
          <h1>Vilken typ av avtal vill du ha?</h1>
          <button onClick={values.PurchaseAgreement == true}>Köpesavtal</button>
          <button onClick={values.PurchaseAgreement == true}>Hyresavtal</button>
      </Fragment>
    );
  }
}

export default AgreementChoiceComponent;
