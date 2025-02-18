import styles from "./Display.module.css"


export function Display( {name} ) {
    return(
        <div className={styles.display}>
            <div>{name}</div>
        </div>
    )
}