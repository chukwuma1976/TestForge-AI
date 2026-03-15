import { useState } from "react";
import { generateTest } from "../services/api";

export default function UrlInput({ setCode }) {

    const [url, setUrl] = useState("");
    const [language, setLanguage] = useState("JavaScript");
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {

        setLoading(true);

        try {

            const res = await generateTest({ url, language });

            setCode(res.data.code);

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
                style={{ width: "400px", padding: "10px", marginBottom: "10px" }}
            />

            <br />

            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{ width: "200px", padding: "10px", marginBottom: "10px" }}
            >
                <option>JavaScript</option>
                <option>TypeScript</option>
                <option>Python</option>
                <option>Java</option>
                <option>C#</option>
            </select>

            <br />

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
