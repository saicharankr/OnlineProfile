import PdfViewer from "../components/PdfViewer";
import Resume from "../public/Resume.pdf";

const pdfResume = () => {
    return (
        <div className="lg:flex lg:justify-center overflow-y-scroll" style={{height:"80vh"}}>
            <PdfViewer />
        </div>
    )
}

export default pdfResume
