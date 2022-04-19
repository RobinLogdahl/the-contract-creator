

const postContract = (e) => {
  e.preventDefault();
  debugger
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
      debugger
      console.log(html);
      // let parser = new DOMParser();
      // let doc = parser.parseFromString(html, 'text/html');
      var body = document.body;
      body.innerHTML = html;
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
};

let form = document.getElementById('form');
form.addEventListener('submit', postContract)


const getHTML = () => {
  fetch("https://localhost:7069/Contract/creator")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      console.log(html);
      // let parser = new DOMParser();
      // let doc = parser.parseFromString(html, 'text/html');
      var body = document.body;
      body.innerHTML = html;
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
};

// let GetFetch = (endpoint) => {
//     return fetch(`${baseUrl}${endpoint}`);
//   };

// const tryHandlebar = () =>{
//     GetFetch("creator")
//       .then((response) => response.json())
//       .then((responsejson) => {
//         const app = document.getElementById("app");
//         const categories = document.createElement("h2");

//         app.appendChild(categories);
//         app.appendChild(categoryList);
//         });

// }

// tryHandlebar();
