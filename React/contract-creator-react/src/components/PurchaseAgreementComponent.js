import React, { Component } from "react";

export class PurchaseAgreementComponent extends Component {
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
      <form onSubmit={this.handleSubmit}>
        <label>
          För- och efternamn
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Personnummer
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Adress
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Telefon
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Adress
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}