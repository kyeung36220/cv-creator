import trashSvg from "../assets/trash.svg"
import downloadSvg from "../assets/download.svg"
import styles from "./Editor.module.css"
import { defaultPersonalInfo, defaultSchoolInfo, defaultExperienceInfo, defaultSkillsInfo } from "../defaultInfo.jsx"


function ActionsRow({ setPersonalInfo, setSchoolInfo, setExperienceInfo, setSkillsInfo }) {
    return(
        <div className={styles.actionsRow}>
            <div onClick={clearEverything} className={[styles.row, styles.remove].join(' ')}>
                <a><img className={[styles.icon, styles.trash].join(' ')} src={trashSvg}></img>Clear</a>
            </div>
            <div onClick={fillDefault} className={[styles.row, styles.example].join(' ')}>Load Example</div>
            <div className={[styles.row, styles.download].join(' ')}>
                <a><img className={[styles.icon, styles.downloadIcon].join(' ')} src={downloadSvg}></img>Download</a>
            </div>
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