import { render as purchaseAgreementRender } from "./pages/purchase-agreement-page.js";
import { render as rentalAgreementRender } from "./pages/rental-agreement-page.js";
import { render as agreementTypeRender} from "../pages/agreement-type-page.js";
import { render as agreementPartysRender} from "./pages/agreement-partys-page.js";
import { registerChangeListener } from "./router.js";
import { Header } from "./header.js";

const header = new Header();

const app = document.getElementById("app");


registerChangeListener((newPage) => {
  app.innerHTML = "";
  switch (newPage) {
    case "agreement-type-page":
      agreementTypeRender(app);
      break;
    case "agreement-party-page":
      agreementPartysRender(app);
      break;
    case "purchase-agreement-page":
      purchaseAgreementRender(app);
      break;
    case "rental-agreement-page":
      rentalAgreementRender(app);
      break;
  }
});

// const Router = (e) => {
//   e.preventDefault();

//   let input = document.getElementById("agreement-types");

//   sessionStorage.setItem("agreement-type", input.value);

//   console.log(input.value);

//   FormFetcher(input.value);
// };

// const FormFetcher = (input) => {
//   fetch(`${input}-form.html`)
//     .then((response) => response.text())
//     .then((text) => (document.getElementById("app").innerHTML = text));
// };

// const GetAllKeys = () => {
//   for (let key of keys) {
//     console.log(`${key}: ${sessionStorage.getItem(key)}`);
//   }
// };

// let test = document.getElementById("agreement-type-form");
// test.addEventListener("submit", Router);


// let form = document.getElementById("form");
// form.addEventListener("submit", FormToContract);

// let form2 = document.getElementById("form2");
// form2.addEventListener("submit", FormToRental);

