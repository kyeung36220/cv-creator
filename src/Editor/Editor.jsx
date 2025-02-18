import ActionsRow from "./ActionsRow.jsx"
import Personal from "./Personal.jsx"
import Education from "./Education.jsx"
import Experience from "./Experience.jsx"
import Skills from "./Skills.jsx"
import styles from "./Editor.module.css"

function Editor({ setName, name }) {
    return(
        <div className={styles.editor}>
            <ActionsRow />
            <Personal setName={setName} name={name}/>
            <Education />
            <Experience />
            <Skills />
        </div>
    )
}

export default Editor