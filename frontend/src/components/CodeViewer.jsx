import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeViewer({ files }) {

    const [activeFile, setActiveFile] = useState(0);

    if (!files || files.length === 0) return null;

    return (
        <div>

            <div style={{ marginBottom: "10px" }}>
                {files.map((file, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveFile(index)}
                        style={{
                            padding: "6px 12px",
                            marginRight: "6px",
                            border: "1px solid #ccc",
                            borderBottom: activeFile === index ? "2px solid #007bff" : "1px solid #ccc",
                            backgroundColor: activeFile === index ? "#007bff" : "#f5f5f5",
                            color: activeFile === index ? "white" : "black",
                            cursor: "pointer",
                            borderRadius: "4px"
                        }}
                    >
                        {file.filename}
                    </button>
                ))}
            </div>

            <div
                style={{
                    textAlign: "left",
                    whiteSpace: "pre",
                    fontFamily: "monospace"
                }}
            >
                <SyntaxHighlighter
                    language="javascript"
                    wrapLongLines={true}
                    customStyle={{
                        margin: 0,
                        padding: "20px",
                        whiteSpace: "pre"
                    }}
                >
                    {files[activeFile].code}
                </SyntaxHighlighter>

            </div>

        </div>
    );
}