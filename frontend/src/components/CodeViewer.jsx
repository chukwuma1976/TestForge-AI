export default function CodeViewer({ code }) {

    const cleaned = code
        .replace(/```[a-zA-Z]*\n?/g, "")
        .replace(/```/g, "")
        .trim();

    const downloadFile = () => {

        const blob = new Blob([cleaned], {
            type: "text/javascript"
        });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;
        a.download = "generated.spec.js";

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);

    };

    return (

        <div>

            <button
                onClick={downloadFile}
                style={{
                    padding: "10px 10px",
                    marginTop: "10px",
                    cursor: "pointer"
                }}
            >
                Download Playwright Test
            </button>


            <pre
                style={{
                    background: "#111",
                    color: "#0f0",
                    padding: "20px",
                    textAlign: "left",
                    overflowX: "auto",
                    fontFamily: "monospace",
                    lineHeight: "1.5"
                }}
            >
                {cleaned}
            </pre>

        </div>

    );
}
