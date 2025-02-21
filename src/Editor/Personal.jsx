import styles from "./Editor.module.css"


function Personal({setPersonalInfo, personalInfo}) {

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
                           value={personalInfo.name}
                           onChange={handleNameChange}></input><br />

                    <label id="addressInput">Address:</label><br />
                    <input type="text" 
                           name="addressInput"
                           placeholder="Enter Address Here"
                           value={personalInfo.address}
                           onChange={handleAddressChange}></input><br />
                </div>
                <div className={styles.rightSide}>
                    <label id="phoneInput">Phone Number:</label><br />
                    <input className={styles.inputGap} 
                           type="tel" 
                           name="phoneInput"
                           placeholder="Enter Phone Number Here"
                           value={personalInfo.number}
                           onChange={handleNumberChange}></input><br />

                    <label id="emailInput">Email:</label><br />
                    <input type="email" 
                           name="emailInput"
                           placeholder="Enter Email Here"
                           value={personalInfo.email}
                           onChange={handleEmailChange}></input><br />
                </div>
            </div>
        </div>
    )

    function handleNameChange(e) {
        setPersonalInfo({name: e.target.value,
                         address: personalInfo.address,
                         number: personalInfo.number,
                         email: personalInfo.email,
        })
    }

    function handleAddressChange(e) {
        setPersonalInfo({name: personalInfo.name,
                         address: e.target.value,
                         number: personalInfo.number,
                         email: personalInfo.email,
        })
    }

    function handleNumberChange(e) {
        setPersonalInfo({name: personalInfo.name,
                         address: personalInfo.address,
                         number: e.target.value,
                         email: personalInfo.email,
        })
    }

    function handleEmailChange(e) {
        setPersonalInfo({name: personalInfo.name,
                         address: personalInfo.address,
                         number: personalInfo.number,
                         email: e.target.value,
        })
    }
}

export default Personal