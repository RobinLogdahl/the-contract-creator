import { changePage } from "./router.js";

export class Header {
  constructor() {
    const button1 = document.getElementById("agreement-type-button");
    const button2 = document.getElementById("agreement-partys-button");
    const button3 = document.getElementById("purchase-agreement-button");
    const button4 = document.getElementById("rental-agreement-button");

    button1.addEventListener("click", () => {
      changePage("agreement-type-page");
    });
    button2.addEventListener("click", () => {
      changePage("agreement-partys-page");
    });
    button3.addEventListener("click", () => {
      changePage("purchase-agreement-page");
    });
    button4.addEventListener("click", () => {
      changePage("rental-agreement-page");
    });
  }
}
