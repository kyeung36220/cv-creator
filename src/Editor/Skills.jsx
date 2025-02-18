import styles from "./Editor.module.css"
import skillsSvg from "../assets/skills.svg"
import caret from "../assets/caret.svg"



function Skills() {
    return(
            <div className={[styles.skills, styles.infoBars].join(' ')}>
                <img src={skillsSvg}></img>
                <div className={styles.headerText}>Skills</div>
                <img src={caret} className={styles.caret}></img>
            </div>
        )
}

export default Skills