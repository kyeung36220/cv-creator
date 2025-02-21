import styles from "./Editor.module.css"
import skillsSvg from "../assets/skills.svg"
import caret from "../assets/caret.svg"
import {useState} from "react"
import eye from "../assets/eye.svg"
import eyeCrossed from "../assets/eyeCrossed.svg"
import trash from "../assets/trash.svg"
import plus from "../assets/plus.svg"



function Skills({setSkillsInfo, skillsInfo}) {

    const [isShowSkills, setIsShowSkills] = useState(false)

    return(
        <>
            <div className={[styles.skills, styles.infoBars].join(' ') } onClick={() => setIsShowSkills(!isShowSkills)}>
                <img src={skillsSvg}></img>
                <div className={styles.headerText}>Skills</div>
                <img src={caret} className={styles.caret}></img>
            </div>
            { isShowSkills && (
                <div className={[styles.skillsEditScreen, styles.expandAnimation].join(' ')}>
                    <div className={styles.skillsHeader}>Skills:</div>
                    {skillsInfo.length > 0 && skillsInfo.map((skill, index) =>
                        <div key={skill.id} className={styles.skillRow}>
                            <input value={skill.name}
                                   type="text"
                                   placeholder="Enter a Skill"
                                   onChange={(e) => handleSkillChange(index, e)}
                                   className={styles.skillInput}/>
                            <div className={styles.iconList}>
                                <img src={skill.hidden ? eyeCrossed : eye}
                                     className={skill.hidden ? [styles.icon, styles.eyeShut].join(' ') : 
                                                               [styles.icon, styles.eyeIcon].join(' ')}
                                     onClick={() => handleEyePress(index)}/>
                                <img src={trash}
                                     className={[styles.trashIcon,styles.icon].join(' ')}
                                     onClick={() => handleTrashPress(index)}/>
                            </div>
                        </div>
                    )}
                     <div className={[styles.showMore, styles.addMore].join(' ')} 
                                      onClick={handleAddSkill}>
                        <a><img src={plus} className={[styles.addIcon].join(' ')}/></a>
                        <div className={styles.addMoreText}>
                            Add Skill
                        </div>
                    </div>

                </div>
            )}
        </>
    )

    function handleSkillChange(index, e) {
        const skillId = index
        const skillsInfoCopy = skillsInfo.slice()
        skillsInfoCopy[skillId].name = e.target.value
        setSkillsInfo(skillsInfoCopy)
    }

    function handleEyePress(index) {
        const skillId = index
        const skillsInfoCopy = skillsInfo.slice()
        skillsInfoCopy[skillId].hidden = !skillsInfo[skillId].hidden
        setSkillsInfo(skillsInfoCopy)
    }

    function handleTrashPress(index) {
        const skillId = index
        const skillsInfoCopy = structuredClone(skillsInfo)
        skillsInfoCopy.splice(skillId, 1)
        for (let i = 0; i < skillsInfoCopy.length; i++) {
            skillsInfoCopy[i].id = i
        }
        setSkillsInfo(skillsInfoCopy)
    }

    function handleAddSkill() {
        const newSkillId = skillsInfo.length + 1
        const skillsInfoCopy = structuredClone(skillsInfo)
        skillsInfoCopy.push({id: newSkillId,
                             name:"",
                             hidden: false,
        })
        setSkillsInfo(skillsInfoCopy)
    }
}

export default Skills