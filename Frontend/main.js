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
      var app = document.getElementById("app")
      app.innerHTML = html;
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
};

const FormToRental = (e) => {
  debugger
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
      var app = document.getElementById("app")
      app.innerHTML = html;
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
};

let form = document.getElementById('form');
form.addEventListener('submit', FormToContract)

let form2 = document.getElementById('form2');
form2.addEventListener('submit', FormToRental)

const GeneratePDF = (quality = 2) =>{
    const filename  = `Köpeskontrakt_${form[8].value}.pdf`;

		html2canvas(document.querySelector('#contract-container'), {scale: quality})
    .then(canvas => {
			let pdf = new jsPDF('p', 'mm', 'a4');
			pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
			pdf.save(filename);
		});
}