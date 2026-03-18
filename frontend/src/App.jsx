import { useState } from "react";
import UrlInput from "./components/UrlInput";
import CodeViewer from "./components/CodeViewer";

function App() {

  const [files, setFiles] = useState([]);

  return (
    <div>
      <h1>TestForge AI</h1>
      <h3>AI Automation Test Generator</h3>

      <UrlInput setCode={setFiles} />
      <CodeViewer files={files} />
    </div>
  );
}

export default App;