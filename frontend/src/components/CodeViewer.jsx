import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { downloadProject } from "../utils/downloadProject";

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
                <button
                    onClick={() => downloadProject(files)}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 12px",
                        marginRight: "6px",
                        border: "none",
                        borderRadius: "10px",
                        backgroundColor: "#1976d2",
                        color: "white",
                        fontWeight: "500",
                        cursor: "pointer",
                        boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                        transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#1565c0";
                        e.target.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#1976d2";
                        e.target.style.boxShadow = "0px 2px 4px rgba(0,0,0,0.2)";
                    }}
                >
                    <span style={{ fontSize: "16px" }}>⬇</span>
                    Download Files
                </button>
            </div>

            <div
                style={{
                    maxHeight: "500px",
                    overflow: "auto",
                    border: "1px solid #ccc",
                    padding: "10px"
                }}
            >
                <SyntaxHighlighter language="javascript">
                    {files[activeFile].code}
                </SyntaxHighlighter>
            </div>

        </div>
    );
}