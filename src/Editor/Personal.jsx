import styles from "./Editor.module.css"


function Personal({setName, name}) {

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    return(
        <div className={styles.personal}>
            <header><div>Personal Information</div></header>
            <div className={styles.inputs}>
                <div className={styles.leftSide}>
                    <label id="nameInput">Full Name:</label><br />
                    <input className={styles.inputGap} 
                           type="text" 
                           name="nameInput"
                           placeholder="Enter Name Here"
                           value={name}
                           onChange={handleNameChange}>
                    </input><br />
                    <label id="addressInput">Address:</label><br />
                    <input type="text" name="addressInput"></input><br />
                </div>
                <div className={styles.rightSide}>
                    <label id="phoneInput">Phone Number:</label><br />
                    <input className={styles.inputGap} type="tel" name="phoneInput"></input><br />
                    <label id="emailInput">Email:</label><br />
                    <input type="email" name="emailInput"></input><br />
                </div>
            </div>
        </div>
    )
}

export default Personal