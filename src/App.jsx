import { Editor } from "./Editor/Editor.jsx"
import { Display } from "./Display/Display.jsx"
import { useState } from "react"
import { defaultPersonalInfo, defaultSchoolInfo, defaultExperienceInfo, defaultSkillsInfo } from "./defaultInfo.jsx"
import github from "./assets/github.svg"

function App() {

  // dsitributes same states to both editor and display so both sides' information are synced
  const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo)
  const [schoolInfo, setSchoolInfo] = useState(defaultSchoolInfo)
  const [experienceInfo, setExperienceInfo] = useState(defaultExperienceInfo)
  const [skillsInfo, setSkillsInfo] = useState(defaultSkillsInfo)

  return (
    <>
      <div className="mainScreen">
        <Editor setPersonalInfo = {setPersonalInfo}
                personalInfo = {personalInfo}

                setSchoolInfo = {setSchoolInfo}
                schoolInfo = {schoolInfo}

                setExperienceInfo = {setExperienceInfo}
                experienceInfo = {experienceInfo}

                setSkillsInfo = {setSkillsInfo}
                skillsInfo = {skillsInfo}/>

        <Display personalInfo = {personalInfo}
                 schoolInfo = {schoolInfo}
                 experienceInfo = {experienceInfo}
                 skillsInfo = {skillsInfo}/>
      </div>
      <div className="footer">
        <a className="footerContainer" href="https://github.com/kyeung36220" target="_blank"> 
          <a><img src={github}/></a>
          <div>Made by Kenneth Yeung</div>
        </a>
      </div>
    </>
  )
}

export default App
