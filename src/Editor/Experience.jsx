import styles from "./Editor.module.css"
import suitcase from "../assets/suitcase.svg"
import caret from "../assets/caret.svg"
import { textDateToDate } from "./dateConvertor"
import {useState} from "react"
import edit from "../assets/edit.svg"
import eye from "../assets/eye.svg"
import eyeCrossed from "../assets/eyeCrossed.svg"
import trash from "../assets/trash.svg"
import plus from "../assets/plus.svg"
import up from "../assets/up.svg"
import down from "../assets/down.svg"


function Experience({setExperienceInfo, experienceInfo}) {

    const [isShowExperiences, setIsShowExperiences] = useState(false)
    const [isExpandExperience, setIsExpandExperience] = useState(false)
    const [expandedExperienceId, setExpandedExperienceId] = useState(0)

    return(
        <>
            <div className={styles.infoBars} onClick={ () => {!isExpandExperience && setIsShowExperiences(!isShowExperiences)}}>
                <img src={suitcase}></img>
                <div className={styles.headerText}>Experience</div>
                <img src={caret} className={styles.caret}></img>
            </div>
            {isShowExperiences && (<div className={styles.expandAnimation}>
                {experienceInfo.map((experience) => 
                    <div key={experience.id} className={styles.showMore}>
                        <div className={styles.experienceName}>{experience.companyName}: {experience.position}</div>
                        <div className={styles.iconList}>
                            <img className={[styles.icon, styles.upIcon].join(' ')} 
                                 src={up}
                                 onClick={() => {handleUpClick(experience)}}/>
                            <img className={[styles.icon, styles.downIcon].join(' ')} 
                                 src={down}
                                 onClick={() => {handleDownClick(experience)}}/>
                            <img className={[styles.icon, styles.editIcon].join(' ')} 
                                    src={edit}
                                    onClick={() => {setIsShowExperiences(false)
                                                    setIsExpandExperience(true)
                                                    setExpandedExperienceId(experience.id)}}/>
                            <img className={experience.hidden ? [styles.icon, styles.eyeShut].join(' ') : 
                                                            [styles.icon, styles.eyeIcon].join(' ')}
                                    src={experience.hidden ? eyeCrossed : eye}
                                    onClick={() => {handleEyeClick(experience)}}/>
                            <img className={[styles.icon, styles.trashIcon].join(' ')} 
                                    src={trash}
                                    onClick={() => {handleTrashClick(experience)}}/>
                        </div>
                    </div>)
                }
                <div className={[styles.showMore, styles.addMore].join(' ')} onClick={handleAddExperienceClick}>
                    <a><img src={plus} className={[styles.addIcon].join(' ')}/></a>
                    <div className={styles.addMoreText}>
                        Add Experience
                    </div>
                </div>
            </div>)}
            {isExpandExperience && experienceInfo.length > 0 && (
                <div className={styles.editScreen}>
                    <label id="companyNameInput">Company Name:</label><br />
                    <input
                            type="text" 
                            name="companyNameInput"
                            placeholder="Enter Company Name Here"
                            value={experienceInfo[expandedExperienceId].companyName}
                            onChange={handleCompanyNameChange}></input><br />

                    <label id="positionInput">Position:</label><br />
                    <input type="text" 
                           name="positionInput"
                           placeholder="Enter Your Position Here"
                           value={experienceInfo[expandedExperienceId].position}
                           onChange={handlePositionChange}></input><br />
                    <label id="locationInput">Location:</label><br />
                    <input
                            type="text" 
                            name="locationInput"
                            placeholder="Enter Location Here"
                            value={experienceInfo[expandedExperienceId].location}
                            onChange={handleLocationChange}>
                    </input><br />
                    <label id="startDateInput">Start Date:</label><br />
                    <input
                            type="month" 
                            name="startDateInput"
                            placeholder="Enter Start Date Here"
                            value={textDateToDate(experienceInfo[expandedExperienceId].startDate)}
                            onChange={handleStartDateChange}>
                    </input><br />
                    <label id="endDateExperienceInput">End Date:</label><br />
                    <input
                            type="month" 
                            name="endDateExperienceInput"
                            placeholder="Enter End Date Here"
                            value={textDateToDate(experienceInfo[expandedExperienceId].endDate)}
                            onChange={handleEndDateChange}>
                    </input>
                    <div className={styles.presentCheckBox}>
                        <input type="checkbox" 
                               name="presentExperience"
                               onChange={handlePresentCheck} 
                               checked={experienceInfo[expandedExperienceId].endDate === "Present"}
                               className={styles.checkbox}/>
                        <label id="presentExperience">Present</label>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <label>Description Points:</label>
                        {experienceInfo[expandedExperienceId].description.length > 0 && 
                         experienceInfo[expandedExperienceId].description.map( (bullet, index) => (
                            <div key={index} className={styles.descriptionBullet}>
                                <input type="text" 
                                       value={bullet} 
                                       onChange={(e) => handleDescriptionChange(index, e)}
                                       placeholder="Enter Description Bullet Here"/>
                                <a><img src={trash} 
                                        className={[styles.trashBullet, styles.trashIcon].join(' ')}
                                        onClick={() => handleDescriptionTrashClick(index)}/></a>
                            </div>
                        ))}
                        <div className={styles.addDescBullet} onClick={handleAddDescBullet}>
                            <a><img src={plus} className={[styles.addIcon].join(' ')}/></a>
                            <div className={styles.addMoreText}>
                                Add Description Point
                            </div>
                        </div>
                    </div>
                    <div className={styles.doneButton} onClick={handleDoneClick}>
                        Done
                    </div>
                </div>
            )}
        </>
    )

    function handleUpClick(experience) {
        //setting limit to prevent underflow
        if (experience.id === 0) {
            return
        }
    
        const experienceId = experience.id
        const experienceInfoCopy = experienceInfo.slice()
        const movingExperience = experienceInfoCopy.splice(experienceId, 1)
        experienceInfoCopy.splice(experienceId - 1, 0, movingExperience[0])
        for (let i = 0; i < experienceInfoCopy.length; i++) {
            experienceInfoCopy[i].id = i
        }
        setExperienceInfo(experienceInfoCopy)
    }

    function handleDownClick(experience) {
        //setting limit to prevent overflow
        if (experience.id === experience.length - 1) {
            return
        }
    
        const experienceId = experience.id
        const experienceInfoCopy = experienceInfo.slice()
        const movingExperience = experienceInfoCopy.splice(experienceId, 1)
        experienceInfoCopy.splice(experienceId + 1, 0, movingExperience[0])
        for (let i = 0; i < experienceInfoCopy.length; i++) {
            experienceInfoCopy[i].id = i
        }
        setExperienceInfo(experienceInfoCopy)
    }

    function handleEyeClick(experience) {
        const experienceId = experience.id
        const experienceInfoCopy = experienceInfo.slice()
        experienceInfoCopy[experienceId].hidden = !experienceInfoCopy[experienceId].hidden
        setExperienceInfo(experienceInfoCopy)
    }

    function handleTrashClick(experience) {
        if (confirm(`Are you sure you want to delete ${experience.position} at ${experience.companyName}`)) {
            const experienceId = experience.id
            const experienceInfoCopy = experienceInfo.slice()
            experienceInfoCopy.splice(experienceId, 1)
            for (let i = 0; i < experienceInfoCopy.length; i++) {
                experienceInfoCopy[i].id = i
            }
            setExperienceInfo(experienceInfoCopy)
        }
    }

    function handleCompanyNameChange(e) {
        const experienceId = expandedExperienceId
        const experienceInfoCopy = experienceInfo.slice()
        experienceInfoCopy[experienceId].companyName = e.target.value
        setExperienceInfo(experienceInfoCopy)
    }

    function handlePositionChange(e) {
        const experienceId = expandedExperienceId
        const experienceInfoCopy = experienceInfo.slice()
        experienceInfoCopy[experienceId].position = e.target.value
        setExperienceInfo(experienceInfoCopy)
    }

    function handleStartDateChange(e) {
        const experienceId = expandedExperienceId
        const experienceInfoCopy = experienceInfo.slice()
        
        const dateObject = new Date(`${e.target.value}-1`)
        dateObject.setMonth(dateObject.getMonth())
        const formatDate = new Intl.DateTimeFormat("en-US", {month: 'long', year:'numeric'})
        experienceInfoCopy[experienceId].startDate = formatDate.format(dateObject)

        setExperienceInfo(experienceInfoCopy)
    }

    function handleEndDateChange(e) {
        const experienceId = expandedExperienceId
        const experienceInfoCopy = experienceInfo.slice()
        
        const dateObject = new Date(`${e.target.value}-1`)
        dateObject.setMonth(dateObject.getMonth())
        const formatDate = new Intl.DateTimeFormat("en-US", {month: 'long', year:'numeric'})
        experienceInfoCopy[experienceId].endDate = formatDate.format(dateObject)

        setExperienceInfo(experienceInfoCopy)
    }

    function handlePresentCheck(e) {
        const experienceId = expandedExperienceId
        const experienceInfoCopy = experienceInfo.slice()
    
        if (e.target.checked) {
            experienceInfoCopy[experienceId].endDate = "Present"
        }
        else {
            experienceInfoCopy[experienceId].endDate = ""
        }
        setExperienceInfo(experienceInfoCopy)
    }

    function handleLocationChange(e) {
        const experienceId = expandedExperienceId
        const experienceInfoCopy = experienceInfo.slice()
        experienceInfoCopy[experienceId].location = e.target.value
        setExperienceInfo(experienceInfoCopy)
    }

    function handleDescriptionChange(index, e) {
        const experienceId = expandedExperienceId
        const experienceInfoCopy = experienceInfo.slice()
        const descriptionId = index
        experienceInfoCopy[experienceId].description[descriptionId] = e.target.value
        setExperienceInfo(experienceInfoCopy)

    }

    function handleAddDescBullet() {
        const experienceId = expandedExperienceId
        const experienceInfoCopy = experienceInfo.slice()
        experienceInfoCopy[experienceId].description.push("")
        setExperienceInfo(experienceInfoCopy)
    }

    function handleDoneClick() {
        setIsExpandExperience(false)
        setIsShowExperiences(true)
    }

    function handleAddExperienceClick() {
        const newExperienceId = experienceInfo.length
        const experienceInfoCopy = experienceInfo.slice()
        experienceInfoCopy.push({id: newExperienceId,
                                 companyName: "",
                                 position: "",
                                 startDate: "",
                                 endDate: "",
                                 location: "",
                                 description: [],
                                 hidden: false,
        })
        setExperienceInfo(experienceInfoCopy)
        setIsExpandExperience(true)
        setExpandedExperienceId(newExperienceId)
        setIsShowExperiences(false)
    }

    function handleDescriptionTrashClick(index) {
        if (confirm(`Are you sure you want to delete description bullet ${index + 1}?`)) {
            const experienceId = expandedExperienceId
            const experienceInfoCopy = structuredClone(experienceInfo)
            experienceInfoCopy[experienceId].description.splice(index, 1)
            setExperienceInfo(experienceInfoCopy)
        }
    }
}

export default Experience