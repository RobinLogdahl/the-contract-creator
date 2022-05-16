// import React from "react";
// import "./PurchaseAgreementComponent.css";
// import BuyerOneInputComponent from "./BuyerOneInputComponent";
// import useSellerOneInputComponent from "./SellerOneInputComponent";
// import useObjectComponent from "./ObjectComponent";

// function PreviewAgreementComponent() {

//     const {
//         renderBuyer,
//         buyerName,
//         buyerSocialSecurity,
//         buyerAddress,
//         buyerPhone,
//     } = BuyerOneInputComponent();

//     const {
//         renderSeller,
//         sellerName,
//         sellerSocialSecurity,
//         sellerAddress,
//         sellerPhone,
//     } = useSellerOneInputComponent();

//     const {
//         renderObject,
//         object,
//         price,
//         other,
//     } = useObjectComponent();


//     const handleButtonClicked = (event) => {
//         event.preventDefault();
//         fetch("https://localhost:7029/Contract/purchase-agreement", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 buyerName: buyerName,
//                 buyerSocialSecurity: buyerSocialSecurity,
//                 buyerAddress: buyerAddress,
//                 buyerPhone: buyerPhone,
//                 sellerName: sellerName,
//                 sellerSocialSecurity: sellerSocialSecurity,
//                 sellerAddress: sellerAddress,
//                 sellerPhone: sellerPhone,
//                 object: object,
//                 price: price,
//                 other: other,
//             }),
//         })
//             .then(function (response) {
//                 return response.text();
//             })
//             .then(function (html) {
//                 var root = document.getElementById("htmlinsert");
//                 root.innerHTML = html;
//             })
//             .catch(function (err) {
//                 console.warn("Something went wrong.", err);
//             });



//         return (
//             <div><button onClick={handleButtonClicked}>Generera Avtal</button></div>
//         )
//     };

// }


// export default PreviewAgreementComponent