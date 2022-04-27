export const render = (app) => {
    const FormToRental = (e) => {
        debugger;
        e.preventDefault();
        fetch("https://localhost:7029/Contract/rental-agreement", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            buyerName: form2[0].value,
            buyerSocialSecurity: form2[1].value,
            buyerAddress: form2[2].value,
            buyerPostalCode: form2[3].value,
            buyerCity: form2[4].value,
            buyerPhone: form2[5].value,
            sellerName: form2[6].value,
            sellerSocialSecurity: form2[7].value,
            sellerAddress: form2[8].value,
            sellerPostalCode: form2[9].value,
            sellerCity: form2[10].value,
            sellerPhone: form2[11].value,
            objectName: form2[12].value,
            objectNumber: form2[13].value,
            objectAdress: form2[14].value,
            objectPurpose: form2[15].value,
            objectNumberOfRooms: form2[16].value,
            objectArea: form2[17].value,
            price: form2[18].value,
            other: form2[19].value,
          }),
        })
          .then(function (response) {
            return response.text();
          })
          .then(function (html) {
            var app = document.getElementById("app");
            app.innerHTML = html;
          })
          .catch(function (err) {
            console.warn("Something went wrong.", err);
          });
      };
}
