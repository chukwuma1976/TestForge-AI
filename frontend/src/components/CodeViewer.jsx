import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { downloadProject } from "../utils/downloadProject";
import { getIcon } from "../utils/getIcon";

export default function CodeViewer({ files }) {

    const [activeFile, setActiveFile] = useState(0);

    if (!files || files.length === 0) return null;

    return (
        <div
            style={{
                display: "flex",
                height: "70vh",
                border: "1px solid #ccc",
                marginTop: "10px"
            }}
        >

            {/* LEFT SIDEBAR */}
            <div
                style={{
                    width: "20vw",
                    borderRight: "1px solid #ccc",
                    backgroundColor: "#f5f5f5",
                    overflowY: "auto"
                }}
            >
                {files.map((file, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveFile(index)}
                        style={{
                            padding: "10px",
                            cursor: "pointer",
                            textAlign: "left",
                            backgroundColor: activeFile === index ? "#e3f2fd" : "transparent",
                            borderLeft: activeFile === index ? "4px solid #1976d2" : "4px solid transparent",
                            fontWeight: activeFile === index ? "500" : "normal"
                        }}
                    >
                        {getIcon(file.filename)} {file.filename}
                    </div>
                ))}
            </div>

            {/* RIGHT PANEL */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", width: "80vw" }}>

                {/* HEADER */}
                <div
                    style={{
                        padding: "10px",
                        borderBottom: "1px solid #ccc",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#fafafa"
                    }}
                >
                    <span style={{ fontWeight: "500" }}>
                        {files[activeFile]?.filename}
                    </span>

                    <button
                        onClick={() => downloadProject(files)}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "6px 12px",
                            border: "none",
                            borderRadius: "6px",
                            backgroundColor: "#1976d2",
                            color: "white",
                            cursor: "pointer",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.2)"
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#1565c0";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "#1976d2";
                        }}
                    >
                        ⬇ Download
                    </button>
                </div>

                {/* CODE VIEW */}
                <div
                    style={{
                        flex: 1,
                        overflow: "auto",
                        padding: "10px"
                    }}
                >
                    <SyntaxHighlighter language="javascript">
                        {files[activeFile]?.code}
                    </SyntaxHighlighter>
                </div>

            </div>

        </div>
    );
}