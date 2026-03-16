import { useState } from "react";
import { generateTest } from "../services/api";
import automationConfig from "../utils/automationConfig.json";
import { testTypes } from "../utils/testTypes.js";

export default function UrlInput({ setCode }) {

    const [url, setUrl] = useState("");
    const tools = Object.keys(automationConfig);
    const [automationTool, setAutomationTool] = useState(tools[0]);
    const [language, setLanguage] = useState(
        automationConfig[tools[0]][0]
    );
    const [testType, setTestType] = useState(testTypes[0]);
    const [loading, setLoading] = useState(false);

    const handleToolChange = (tool) => {

        setAutomationTool(tool);

        setLanguage(automationConfig[tool][0]);
    };

    const handleGenerate = async () => {
        setLoading(true);
        try {
            const res = await generateTest({
                url,
                automationTool,
                language,
                testType
            });
            setCode(res.data.files);

        } catch (err) {
            alert("Generation failed");
        }
        setLoading(false);
    };

    return (
        <div>
            <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter website URL"
                style={{ width: "400px", padding: "10px", margin: "2px" }}
            />

            <select
                value={automationTool}
                onChange={(e) => handleToolChange(e.target.value)}
                style={{ width: "150px", padding: "10px", margin: "2px" }}
            >
                {tools.map((tool) => (
                    <option key={tool} value={tool}>
                        {tool}
                    </option>
                ))}
            </select>

            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{ width: "150px", padding: "10px", margin: "2px" }}
            >

                {automationConfig[automationTool].map((lang) => (

                    <option key={lang} value={lang}>
                        {lang}
                    </option>

                ))}
            </select>

            <select
                value={testType}
                onChange={(e) => setTestType(e.target.value)}
                style={{ width: "150px", padding: "10px", margin: "2px" }}
            >
                {testTypes.map((test) => (
                    <option key={test} value={test}>
                        {test}
                    </option>
                ))}
            </select>

            <button
                onClick={handleGenerate}
                style={{ width: "150px", padding: "10px" }}
            >
                Generate Test
            </button>

            {loading && <p>Generating...</p>}

        </div>

    );
}