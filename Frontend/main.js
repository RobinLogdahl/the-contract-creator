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

let form = document.getElementById('form');
form.addEventListener('submit', FormToContract)

const GeneratePDF = (quality = 2) =>{
    const filename  = `Köpeskontrakt_${form[8].value}.pdf`;

		html2canvas(document.querySelector('#contract-container'), {scale: quality})
    .then(canvas => {
			let pdf = new jsPDF('p', 'mm', 'a4');
			pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
			pdf.save(filename);
		});
}