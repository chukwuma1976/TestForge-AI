export default function CodeViewer({ code }) {

    return (

        <pre
            style={{
                background: "#111",
                color: "#0f0",
                padding: "20px",
                marginTop: "20px",
                overflowX: "auto"
            }}
        >
            {code}
        </pre>

    );
}