import styles from "./Editor.module.css"
import gradCap from "../assets/edu.svg"
import caret from "../assets/caret.svg"
import {useState} from "react"
import edit from "../assets/edit.svg"
import eye from "../assets/eye.svg"
import eyeCrossed from "../assets/eyeCrossed.svg"
import trash from "../assets/trash.svg"
import plus from "../assets/plus.svg"
import { textDateToDate } from "./dateConvertor"
import up from "../assets/up.svg"
import down from "../assets/down.svg"

function Education({ setSchoolInfo, schoolInfo }) {

    // used for functions below html
    const [isShowEducation, setIsShowEducation] = useState(false)
    const [isShowSchool, setIsShowSchool] = useState(false)
    const [showSchoolId, setShowSchoolId] = useState(0)

    return(
        <>
            <div className={styles.education}>
                <div className={styles.infoBars} onClick={() => { !isShowSchool && setIsShowEducation(!isShowEducation)}}>
                    <img src={gradCap}></img>
                    <div className={styles.headerText}>Education</div>
                    <img src={caret} className={styles.caret}/>
                </div>
            </div>
            {isShowEducation && (<div className={styles.expandAnimation}>
                {schoolInfo.length > 0 && schoolInfo.map((school) => 
                    <div key={school.id} className={styles.showMore}>
                        <div className={styles.schoolName}>{school.schoolName}</div>
                        <div className={styles.iconList}>
                            <img className={[styles.icon, styles.upIcon].join(' ')} 
                                    src={up}
                                    onClick={() => {handleUpClick(school)}}/>
                            <img className={[styles.icon, styles.downIcon].join(' ')} 
                                    src={down}
                                    onClick={() => {handleDownClick(school)}}/>
                            <img className={[styles.icon, styles.editIcon].join(' ')} 
                                 src={edit}
                                 onClick={() => {setIsShowEducation(false)
                                                 setIsShowSchool(true)
                                                 setShowSchoolId(school.id)}}/>
                            <img className={school.hidden ? [styles.icon, styles.eyeShut].join(' ') : 
                                                            [styles.icon, styles.eyeIcon].join(' ')}
                                 src={school.hidden ? eyeCrossed : eye}
                                 onClick={() => {handleEyeClick(school)}}/>
                            <img className={[styles.icon, styles.trashIcon].join(' ')} 
                                 src={trash}
                                 onClick={() => {handleTrashClick(school)}}/>
                        </div>
                    </div>)
                }
                <div className={[styles.showMore, styles.addMore].join(' ')} onClick={handleAddSchoolClick}>
                    <a><img src={plus} className={[styles.addIcon].join(' ')}/></a>
                    <div className={styles.addMoreText}>
                        Add School
                    </div>
                </div>
            </div>)}
            {isShowSchool && (
                <div className={styles.editScreen}>
                    <label id="schoolNameInput">School Name:</label><br />
                    <input
                            type="text" 
                            name="schoolNameInput"
                            placeholder="Enter School Name Here"
                            value={schoolInfo[showSchoolId].schoolName}
                            onChange={handleSchoolNameChange}></input><br />

                    <label id="degreeInput">Degree:</label><br />
                    <input type="text" 
                            name="degreeInput"
                            placeholder="Enter Your Degree Here"
                            value={schoolInfo[showSchoolId].degree}
                            onChange={handleDegreeChange}></input><br />
                    <label id="endDateInput">End Date:</label><br />
                    <input
                            type="month" 
                            name="endDateInput"
                            placeholder="Enter End Date Here"
                            value={textDateToDate(schoolInfo[showSchoolId].endDate)}
                            onChange={handleEndDateChange}>
                    </input>
                    <div className={styles.presentCheckBox}>
                        <input type="checkbox" 
                               name="present"
                               onChange={handlePresentCheck} 
                               checked={schoolInfo[showSchoolId].endDate === "Present"}
                               className={styles.checkbox}/>
                        <label id="present">Present</label>
                    </div>
                    <div className={styles.doneButton} onClick={handleDoneClick}>
                        Done
                    </div>
                </div>
        )}
            
        </>
    )

    function handleUpClick(school) {
        //setting limit to prevent underflow
        if (school.id === 0) {
            return
        }
    
        const schoolId = school.id
        const schoolInfoCopy = schoolInfo.slice()
        const movingSchool = schoolInfoCopy.splice(schoolId, 1)
        schoolInfoCopy.splice(schoolId - 1, 0, movingSchool[0])
        for (let i = 0; i < schoolInfoCopy.length; i++) {
            schoolInfoCopy[i].id = i
        }
        setSchoolInfo(schoolInfoCopy)
    }

    function handleDownClick(school) {
        //setting limit to prevent overflow
        if (school.id === school.length - 1) {
            return
        }
    
        const schoolId = school.id
        const schoolInfoCopy = schoolInfo.slice()
        const movingSchool = schoolInfoCopy.splice(schoolId, 1)
        schoolInfoCopy.splice(schoolId + 1, 0, movingSchool[0])
        for (let i = 0; i < schoolInfoCopy.length; i++) {
            schoolInfoCopy[i].id = i
        }
        setSchoolInfo(schoolInfoCopy)
    }

    function handleEyeClick(school) {
        const schoolId = school.id
        const schoolInfoCopy = schoolInfo.slice()
        schoolInfoCopy[schoolId].hidden = !schoolInfoCopy[schoolId].hidden
        setSchoolInfo(schoolInfoCopy)
    }

    function handleTrashClick(school) {
        if (confirm(`Are you sure you want to delete ${school.schoolName}`)) {
            const schoolId = school.id
            const schoolInfoCopy = schoolInfo.slice()
            schoolInfoCopy.splice(schoolId, 1)
            for (let i = 0; i < schoolInfoCopy.length; i++) {
                schoolInfoCopy[i].id = i
            }
            setSchoolInfo(schoolInfoCopy)
        }
    }

    function handleSchoolNameChange(e) {
        const schoolId = showSchoolId
        const schoolInfoCopy = schoolInfo.slice()
        schoolInfoCopy[schoolId].schoolName = e.target.value
        setSchoolInfo(schoolInfoCopy)
    }

    function handleDegreeChange(e) {
        const schoolId = showSchoolId
        const schoolInfoCopy = schoolInfo.slice()
        schoolInfoCopy[schoolId].degree = e.target.value
        setSchoolInfo(schoolInfoCopy)
    }

    function handleEndDateChange(e) {
        const schoolId = showSchoolId
        const schoolInfoCopy = schoolInfo.slice()
    
        const dateObject = new Date(`${e.target.value}-1`)
        dateObject.setMonth(dateObject.getMonth())
        const formatDate = new Intl.DateTimeFormat("en-US", {month: 'long', year:'numeric'})
        schoolInfoCopy[schoolId].endDate = formatDate.format(dateObject)

        setSchoolInfo(schoolInfoCopy)
    }

    function handlePresentCheck(e) {
        const schoolId = showSchoolId
        const schoolInfoCopy = schoolInfo.slice()
    
        if (e.target.checked) {
            schoolInfoCopy[schoolId].endDate = "Present"
        }
        else {
            schoolInfoCopy[schoolId].endDate = ""
        }
        setSchoolInfo(schoolInfoCopy)
    }
    
    function handleDoneClick() {
        // when done, goes back to displaying all schools
        setIsShowSchool(false)
        setIsShowEducation(true)
    }

    function handleAddSchoolClick() {
        const newSchoolId = schoolInfo.length
        const schoolInfoCopy = schoolInfo.slice()
        schoolInfoCopy.push({id: newSchoolId,
                             schoolName: "",
                             degree: "",
                             endDate: "",
                             hidden: false,
        })
        setSchoolInfo(schoolInfoCopy)
        setIsShowSchool(true)
        setShowSchoolId(newSchoolId)
        setIsShowEducation(false)
    }
}

export default Education