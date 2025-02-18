import Editor from "./Editor/Editor.jsx"
import { Display } from "./Display/Display.jsx"
import { useState } from "react"

function App() {

  const [name, setName] = useState("John Smith")

  return (
    <>
      <div className="mainScreen">
        <Editor setName={setName} name={name} />
        <Display name={name}/>
      </div>
    </>
  )
}

export default App
