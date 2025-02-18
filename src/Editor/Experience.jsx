import styles from "./Editor.module.css"
import suitcase from "../assets/suitcase.svg"
import caret from "../assets/caret.svg"


function Experience() {
    return(
            <div className={[styles.experience, styles.infoBars].join(' ')}>
                <img src={suitcase}></img>
                <div className={styles.headerText}>Experience</div>
                <img src={caret} className={styles.caret}></img>
            </div>
        )
}

export default Experience