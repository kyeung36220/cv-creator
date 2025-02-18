import styles from "./Editor.module.css"
import gradCap from "../assets/edu.svg"
import caret from "../assets/caret.svg"

function Education() {
    return(
        <div className={[styles.education, styles.infoBars].join(' ')}>
            <img src={gradCap}></img>
            <div className={styles.headerText}>Education</div>
            <img src={caret} className={styles.caret}></img>
        </div>
    )
}

export default Education