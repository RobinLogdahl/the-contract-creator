import React, { Component } from "react";
import { PurchaseAgreementComponent } from "./PurchaseAgreementComponent";

export class FormFetcherComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {(() => {
          if (1 === 1){
            return <PurchaseAgreementComponent />
          } else {
            return <p>Hello im always here</p>
          }
        })()}
      </div>
    );
  }
}
