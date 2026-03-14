import { useState } from "react";
import { generateTest } from "../services/api";

export default function UrlInput({ setCode }) {

    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {

        setLoading(true);

        try {

            const res = await generateTest(url);

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
                style={{ width: "400px", padding: "10px" }}
            />

            <button onClick={handleGenerate}>
                Generate Test
            </button>

            {loading && <p>Generating...</p>}

        </div>

    );
}