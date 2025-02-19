import styles from "./Editor.module.css"
import gradCap from "../assets/edu.svg"
import caret from "../assets/caret.svg"
import {useState} from "react"
import edit from "../assets/edit.svg"
import eye from "../assets/eye.svg"
import eyeCrossed from "../assets/eyeCrossed.svg"
import trash from "../assets/trash.svg"

function Education({ setSchoolInfo, schoolInfo }) {

    const [showEducationHTML, setShowEducationHTML] = useState("")

    return(
        <div className={styles.education}>
            <div className={styles.infoBars} onClick={handleShowEduClick}>
                <img src={gradCap}></img>
                <div className={styles.headerText}>Education</div>
                <img src={caret} className={styles.caret}></img>
            </div>
            <div className={styles.showEdu}>{showEducationHTML}</div>
        </div>
    )

    function handleShowEduClick() {
        if (showEducationHTML != "") {
            setShowEducationHTML("")
        }
        else {
            setShowEducationHTML(
                <div>
                    {schoolInfo.map((school) => 
                        <div key={school.id} className={styles.showMore}>
                            <div className={styles.schoolName}>{school.schoolName}</div>
                            <div className={styles.iconList}>
                                <img className={[styles.icon, styles.editIcon].join(' ')} 
                                     src={edit}
                                     onClick={handleEditClick}></img>
                                <img className={[styles.icon, styles.eyeIcon].join(' ')}
                                     id = {"editProject-" + school.id} 
                                     src={school.hidden ? eyeCrossed : eye}
                                     onClick={() => {handleEyeClick(school)}}></img>
                                <img className={[styles.icon, styles.trashIcon].join(' ')} 
                                     src={trash}
                                     onClick={handleTrashClick}></img>
                            </div>
                        </div>)}
                </div>
            )
        }
    }

    function handleEditClick() {
        return
    }

    function handleEyeClick(school) {
        const schoolId = school.id
        setSchoolInfo(schoolInfo => 
            schoolInfo.map((school, index) => 
                index === schoolId ? {...school, hidden: !school.hidden} : school)
        )
        document.querySelector(`#editProject-${schoolId}`).src = schoolInfo[schoolId].hidden ? eye : eyeCrossed
    }

    function handleTrashClick() {
        return
    }
}

export default Education