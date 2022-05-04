import React from "react";
import { useState } from "react";
import DropdownComponent from "./DropdownComponent";
import FormFetcherComponent from "./FormFetcherComponent";

const AgreementSelectorComponent = () => {
  const [AgreementType, setAgreementType] = useState("Köpeskontrakt");
  const [Buyers, setBuyers] = useState("1");
  const [SigningOptions, setSigningOptions] = useState("Skriftligt");
  const [data, setData] = useState([]);
  const [myBool, setBool] = useState(false);

  const handleAgreementChange = (event) => {
    setAgreementType(event.target.value);
    console.log(event.target.value);
    let newData = {value: event.target.value}
    setData([...data, newData]);
  };

  const handleBuyersChange = (event) => {
    setBuyers(event.target.value);
    console.log(event.target.value);
    let newData = {value: event.target.value}
    setData([...data, newData]);
  };

  const handleSigningChange = (event) => {
    setSigningOptions(event.target.value);
    console.log(event.target.value);
    let newData = {value: event.target.value}
    setData([...data, newData]);
  };

  const generateForm = () => {
    console.log(data)
    setBool(true);
  };

  return (
    <div>
      <DropdownComponent
        label="Avtalstyp"
        options={[
          { label: "Köpeskontrakt", value: "Köpeskontrakt" },
          { label: "Hyreskontrakt", value: "Hyreskontrakt" },
        ]}
        value={AgreementType}
        onChange={handleAgreementChange}
      />
      <DropdownComponent
        label="Antal köpare"
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
        ]}
        value={Buyers}
        onChange={handleBuyersChange}
      />

      <DropdownComponent
        label="Signeringstyp"
        options={[
          { label: "Skriftligt", value: "Skriftligt" },
          { label: "E-signering", value: "E-signering" },
        ]}
        value={SigningOptions}
        onChange={handleSigningChange}
      />
      <button onClick={() => generateForm(data)}>Generera inmatning</button>
      {myBool === true ? <FormFetcherComponent props={data} /> : <p>falsebool</p>}
    </div>
  );
};

export default AgreementSelectorComponent;
