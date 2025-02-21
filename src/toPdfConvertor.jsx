import { useRef } from "react";
import { useReactToPdf } from "react-to-pdf";

const PDFDownload = () => {
  const targetRef = useRef();
  const { toPdf } = useReactToPdf({ filename: "resume.pdf" });

  return (
    <div>
      <div ref={targetRef} style={{ padding: "20px", border: "1px solid black" }}>
        <h1>My Resume</h1>
        <p>Experience: Regional Champion at Pokémon League</p>
      </div>
      <button onClick={() => toPdf(targetRef)}>Download PDF</button>
    </div>
  );
};

export default PDFDownload;