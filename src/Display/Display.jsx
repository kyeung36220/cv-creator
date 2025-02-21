import styles from "./Display.module.css"


export function Display( {personalInfo, schoolInfo, experienceInfo, skillsInfo} ) {
    return(
        <div className={styles.display} id="display">
            <div className={styles.contactSection}>
                <div className={styles.name}>{personalInfo.name}</div>
                <div className={styles.address}>{personalInfo.address}</div>
                <div className={styles.number}>{personalInfo.number}</div>
                <div className={styles.email}>{personalInfo.email}</div>
            </div>
            {schoolInfo.length > 0 && <div className={styles.schoolSection}>
                <header><div>Education</div></header>
                <div className={styles.line}></div>
                <div className={styles.school}>{schoolInfo.map((school) => {
                    if (school.hidden === false) {
                        return (<>
                            <div key={school.id} className={styles.topRow}>
                                <div className={styles.schoolName}>{school.schoolName}</div>
                                <div className={styles.endDate}>{school.endDate}</div></div>

                            <div className={styles.degree}>{school.degree}</div>
                        </>)
                    }
                }
                )}</div>
            </div>}
            {experienceInfo.length > 0 && <div className={styles.experienceSection}>
                <header><div>Experience</div></header>
                <div className={styles.line}></div>
                <div className={styles.experience}>{experienceInfo.map((experience) => {
                        if (experience.hidden === false) {
                            return(<>
                                <div key={experience.id} className={styles.position}>
                                    <div className={styles.positionName}>{experience.position}</div>
                                    <div className={styles.dates}>{experience.startDate} to {experience.endDate}</div></div>
                                <div className={styles.companyName}>{experience.companyName}</div>
                                <div className={styles.location}>{experience.location}</div>
                                <ul className={styles.description}>{experience.description.map((bullet, index) => 
                                    <li key={index}>{bullet}</li>
                                )}</ul> 
                            </>)
                        }
                }
                    )}</div>
            </div>}
            {skillsInfo.length > 0 && <div className={styles.skillsSection}>
                <header><div>Skills</div></header>
                <div className={styles.line}></div>
                <ul className={styles.skills}>{skillsInfo.map((skill) => 
                {if (skill.hidden === false) {
                    return (
                        <>
                            <li key={skill.id} className={styles.skill}>{skill.name}</li>
                        </>
                    )
                }}
                )}</ul>
            </div>}
        </div>
    )
}