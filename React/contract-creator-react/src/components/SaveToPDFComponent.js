import React from "react";
import html2canvas from "html2canvas";
// import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf-react'
import { jsPDF } from "jspdf";

const SaveToPDFComponent = () => {

    const GeneratePDF = (event) => {
        const filename = `Köpeskontrakt_test.pdf`;
    
        html2canvas(document.querySelector("#contract-container"), {
          scale: 2,
        }).then((canvas) => {
          let pdf = new jsPDF("p", "mm", "a4");
          pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
          pdf.save(filename);
        });
      };
    
    return (
        <div>
            <button onClick={GeneratePDF}>Generate PDF</button>
        </div>
    );
  };

  export default SaveToPDFComponent;