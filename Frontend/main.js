const postContract = (e) => {
  e.preventDefault();
  fetch("https://localhost:7029/Contract/create", {
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
      console.log(html);
      // let parser = new DOMParser();
      // let doc = parser.parseFromString(html, 'text/html');
      var app = document.getElementById("app")
      app.innerHTML = html;
      // var body = document.body;
      // body.innerHTML = html;
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
};

let form = document.getElementById('form');
form.addEventListener('submit', postContract)


const getHTML = () => {
  fetch("https://localhost:7029/Contract/create")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      console.log(html);
      // let parser = new DOMParser();
      // let doc = parser.parseFromString(html, 'text/html');
      // var app = document.getelementById('app');
      // app.innerHTML = html;
      var body = document.body;
      body.innerHTML = html;
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
};

const ChangeCSS = () => {
  var myCSS = document.getElementById("contract-container")
  myCSS.classList.remove("preview");
  myCSS.classList.add("printable")
}

const GeneratePDF = () => {
  ChangeCSS();

  var pdf = new jsPDF('p','px', 'A4');
  pdf.addHTML(document.getElementById("contract-container"),function() {
    pdf.save(`Köpeskontrakt_${form[8].value}.pdf`);
  });

  location.reload();
}