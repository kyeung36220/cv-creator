import trashSvg from "../assets/trash.svg"
import downloadSvg from "../assets/download.svg"
import styles from "./Editor.module.css"


function ActionsRow() {
    return(
        <div className={styles.actionsRow}>
            <div className={[styles.row, styles.remove].join(' ')}>
                <a><img className={[styles.icon, styles.trash].join(' ')} src={trashSvg}></img>Clear</a>
            </div>
            <div className={[styles.row, styles.example].join(' ')}>Load Example</div>
            <div className={[styles.row, styles.download].join(' ')}>
                <a><img className={[styles.icon, styles.downloadIcon].join(' ')} src={downloadSvg}></img>Download</a>
            </div>
        </div>
    )
}

export default ActionsRow