export const GeneratePDF = (quality = 2) => {
    const filename = `Köpeskontrakt_${form[8].value}.pdf`;
  
    html2canvas(document.querySelector("#contract-container"), {
      scale: quality,
    }).then((canvas) => {
      let pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
      pdf.save(filename);
    });
};