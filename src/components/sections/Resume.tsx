import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import Section from '@/components/ui/Section';
import pdfFile from '@/Assets/Front-End-Jorge.pdf';



export default function Resume() {

  return (
    <Section id="resume" className="py-28 bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-[2.4em] font-heading font-medium text-center pb-4 pt-2 leading-tight">
          My <strong className="text-accent">Resume</strong>
        </h2>
        <p className="text-center text-white/50 text-base md:text-lg mb-14 max-w-xl mx-auto">
          Download or view my resume below.
        </p>

        {/* Action buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <a
            href={pdfFile}
            download="Jorge_Rios_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark
              text-white font-medium rounded-lg transition-all duration-300
              hover:shadow-[0_0_20px_rgba(199,112,240,0.4)]"
          >
            <FaDownload />
            Download PDF
          </a>
          <a
            href={pdfFile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent/40
              text-accent hover:bg-accent/10 font-medium rounded-lg transition-all duration-300"
          >
            <FaExternalLinkAlt />
            Open in New Tab
          </a>
        </div>
      </div>
    </Section>
  );
}
