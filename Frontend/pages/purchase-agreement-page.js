import { SetLabel } from "../functions/form-creator.js";
import { CreateForm } from "../functions/form-creator.js";
import { GeneratePDF } from "../functions/pdf-creator.js";

export const render = (app) => {

  const buyerFieldHeader = "Köpare";
  const buyerFields = [
    "buyerName",
    "buyerSocialSecurity",
    "buyerAddress",
    "buyerPhone",
  ];
  const sellerFieldHeader = "Säljare";
  const sellerFields = [
    "sellerName",
    "sellerSocialSecurity",
    "sellerAddress",
    "sellerPhone",
  ];
  const objectFieldHeader = "Produkt";
  const objectFields = ["object", "price", "other"];
  const formid = "form";
  const form1 = CreateForm(
    buyerFieldHeader,
    buyerFields,
    sellerFieldHeader,
    sellerFields,
    objectFieldHeader,
    objectFields,
    formid
  );

  app.appendChild(form1);

  SetLabel("buyerName-label", "För- och efternamn");
  SetLabel("buyerSocialSecurity-label", "Personnummer");
  SetLabel("buyerAddress-label", "Adress");
  SetLabel("buyerPhone-label", "Telefon");
  SetLabel("sellerName-label", "För- och efternamn");
  SetLabel("sellerSocialSecurity-label", "Personnummer");
  SetLabel("sellerAddress-label", "Adress");
  SetLabel("sellerPhone-label", "Telefon");
  SetLabel("object-label", "Typ av produkt");
  SetLabel("price-label", "Pris");
  SetLabel("other-label", "Annan information");

  const FormToContract = (e) => {
    e.preventDefault();
    fetch("https://localhost:7029/Contract/purchase-agreement", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        buyerName: form[0].value,
        buyerSocialSecurity: form[1].value,
        buyerAddress: form[2].value,
        buyerPhone: form[3].value,
        sellerName: form[4].value,
        sellerSocialSecurity: form[5].value,
        sellerAddress: form[6].value,
        sellerPhone: form[7].value,
        object: form[8].value,
        price: form[9].value,
        other: form[10].value,
      }),
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        var app = document.getElementById("app");
        app.innerHTML = html;
      })
      .then(function () {
        let button = document.getElementById("SaveAsPDF");
        button.addEventListener("click", GeneratePDF);
      })
      .catch(function (err) {
        console.warn("Something went wrong.", err);
      });
  };

  let form = document.getElementById("form");
  form.addEventListener("submit", FormToContract);
};
