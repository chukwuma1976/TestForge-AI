import { useState } from "react";
import UrlInput from "./components/UrlInput";
import CodeViewer from "./components/CodeViewer";

function App() {

  const [code, setCode] = useState("");

  return (

    <div style={{ padding: "40px" }}>

      <h1>TestForge AI</h1>

      <h3>AI Automation Test Generator</h3>

      <UrlInput setCode={setCode} />

      <CodeViewer code={code} />

    </div>

  );
}

export default App;