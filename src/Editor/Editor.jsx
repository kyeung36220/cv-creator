import ActionsRow from "./ActionsRow.jsx"
import Personal from "./Personal.jsx"
import Education from "./Education.jsx"
import Experience from "./Experience.jsx"
import Skills from "./Skills.jsx"
import styles from "./Editor.module.css"

function Editor({ setPersonalInfo, personalInfo,
                  setSchoolInfo, schoolInfo,
                  setExperienceInfo, experienceInfo,
                  setSkillsInfo, skillsInfo }) { 
    return(
        <div className={styles.editor}>
            <ActionsRow setPersonalInfo={setPersonalInfo} 
                        setSchoolInfo={setSchoolInfo} 
                        setExperienceInfo={setExperienceInfo}
                        setSkillsInfo={setSkillsInfo}/>

            <Personal setPersonalInfo={setPersonalInfo} personalInfo={personalInfo}/>
            <Education setSchoolInfo={setSchoolInfo} schoolInfo={schoolInfo}/>
            <Experience setExperienceInfo={setExperienceInfo} experienceInfo={experienceInfo}/>
            <Skills setSkillsInfo={setSkillsInfo} skillsInfo={skillsInfo}/>
        </div>
    )
}

export default Editor