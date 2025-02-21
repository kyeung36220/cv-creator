import trashSvg from "../assets/trash.svg"
import downloadSvg from "../assets/download.svg"
import styles from "./Editor.module.css"
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { defaultPersonalInfo, defaultSchoolInfo, defaultExperienceInfo, defaultSkillsInfo } from "../defaultInfo.jsx"

function ActionsRow({ setPersonalInfo, setSchoolInfo, setExperienceInfo, setSkillsInfo,}) {

    const DownloadPdfButton = () => {

        const handleDownloadPdf = async () => {
            const element = document.getElementById("display")
            const canvas = await html2canvas(element);
            const data = canvas.toDataURL('image/png');

            const pdf = new jsPDF();
            const imgProperties = pdf.getImageProperties(data);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

            pdf.addImage(data, 'png', 0, 0, pdfWidth, pdfHeight);
            pdf.save('resume.pdf');
        };
        
        return (
           <div>
              <div className={[styles.row, styles.download].join(' ')} onClick={handleDownloadPdf}>
                <a><img className={[styles.icon, styles.downloadIcon].join(' ')} 
                        src={downloadSvg}>
                   </img>Download</a>
              </div>
           </div>
        )
     }

    return(
        <div className={styles.actionsRow}>
            <div onClick={clearEverything} className={[styles.row, styles.remove].join(' ')}>
                <a><img className={[styles.icon, styles.trash].join(' ')} src={trashSvg}></img>Clear</a>
            </div>
            <div onClick={fillDefault} className={[styles.row, styles.example].join(' ')}>Load Example</div>
            <DownloadPdfButton />
        </div>
    )

    function clearEverything() {
        setPersonalInfo({name: "", address: "", number: "", email: ""})
        setSchoolInfo([])
        setExperienceInfo([])
        setSkillsInfo([])
    }

    function fillDefault() {
        setPersonalInfo(defaultPersonalInfo)
        setSchoolInfo(defaultSchoolInfo)
        setExperienceInfo(defaultExperienceInfo)
        setSkillsInfo(defaultSkillsInfo)
    }
}

export default ActionsRow