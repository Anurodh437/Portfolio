import React, { useEffect, useState } from "react";
import Particle from "../components/Particle";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiOutlineDownload } from "react-icons/ai";
import samplePdf from "../assets/Anurodh_Dubey_Resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="pt-16 bg-gray-900 text-white">
      <Particle />
      <div className="flex justify-center mt-16">
        <a href={samplePdf} target="_blank" rel="noreferrer">
          <button class="bg-loving hover:bg-violet-700 text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
            <AiOutlineDownload className="font-semibold text-lg " />
            <span>Download CV</span>
          </button>
        </a>
      </div>
      <div className="pt-16 flex justify-center">
        <Document file={samplePdf}>
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>
      <div className="flex justify-center mt-12 pb-10">
        <a href={samplePdf} target="_blank" rel="noreferrer">
          <button class="bg-loving hover:bg-violet-700 text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
            <AiOutlineDownload className="font-semibold text-lg " />
            <span>Download CV</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
