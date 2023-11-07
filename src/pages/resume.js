import Navbar from "../components/navbar";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import resume from "../files/Resume.pdf";
import { IconButton } from "@material-tailwind/react";
import { FaDownload } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess() {
    setNumPages(numPages);
  }
  return (
    <div className="bg-gray-50 h-screen w-screen flex justify-items-center">
      <Navbar />
      <div className="flex-1 h-full justify-center flex overflow-auto scrollbar-hide px-3 gap-3">
        <Document
          className="my-auto h-fit hidden lg:block"
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            className=""
            renderTextLayer={false}
            renderAnnotationLayer={false}
            pageNumber={pageNumber}
            height="800"
          />
        </Document>
        <div className="my-auto text-xl lg:hidden">
          Expand horizontally to Preview
        </div>
        <a
          href={resume}
          download="Resume Zhenye Zhu 2023"
          target="_blank"
          className="my-auto"
          rel="noreferrer"
        >
          <IconButton variant="outlined" color="light-blue">
            <FaDownload size={25} />
          </IconButton>
        </a>
      </div>
    </div>
  );
}

export default Resume;
