export const GeneratePDF = () => {
    const filename = `Köpeskontrakt_test.pdf`;

    html2canvas(document.querySelector("#contract-container"), {
      scale: 2,
    }).then((canvas) => {
      let pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
      pdf.save(filename);
    });
};

// html2canvas(document.querySelector("#contract-container"), {
//   scale: quality,
// }).then((canvas) => {
//   let pdf = new jsPDF("p", "mm", "a4");
//   pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
//   pdf.save(filename);
// });

// var node = document.getElementById('my-node');

// domtoimage.toPng(node)
//     .then (function (dataUrl) {
//         var img = new Image();
//         img.src = dataUrl;
//         document.appendChild(img);
//     })
//     .catch(function (error) {
//         console.error('oops, something went wrong!', error);
//     });

// pdf.internal.scaleFactor = 30;
// pdf.addHTML($('#print-area')[0], function () {
//     pdf.save(calendarName);
// });

// $('#print').click(function() {

//     var w = document.getElementById("content").offsetWidth;
//     var h = document.getElementById("content").offsetHeight;
//     html2canvas(document.getElementById("content"), {
//       dpi: 300, // Set to 300 DPI
//       scale: 3, // Adjusts your resolution
//       onrendered: function(canvas) {
//         var img = canvas.toDataURL("image/jpeg", 1);
//         var doc = new jsPDF('L', 'px', [w, h]);
//         doc.addImage(img, 'JPEG', 0, 0, w, h);
//         doc.save('sample-file.pdf');
//       }
//     });
//   });

// html2canvas(document.querySelector("#capture")).then(canvas => {
//     document.body.appendChild(canvas)
// });

// html2canvas(element, {
//     onrendered: function (canvas) {
//         srcpath = canvas.toDataURL("image/png");
//         imageData.src=srcpath;
//         doc.addImage(imageData , 'PNG',  20, 20,400,150);
//     }
// });

// export const GeneratePDF = (quality = 2) => {
//     const filename = `Köpeskontrakt_test.pdf`;

//     html2canvas(document.querySelector("#contract-container"), {
//       scale: quality,
//     }).then((canvas) => {
//       let pdf = new jsPDF("p", "mm", "a4");
//       pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
//       pdf.save(filename);
//     });
// };
