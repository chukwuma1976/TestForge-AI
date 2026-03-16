export function parseGeneratedFiles(code) {

    const cleaned = code
        .replace(/```[a-zA-Z]*/g, "")
        .replace(/```/g, "")
        .trim();

    const lines = cleaned.split("\n");

    const files = [];
    let currentFile = null;

    const filePattern = /^[A-Za-z0-9._-]+\.(js|ts|py|java|cs)$/;

    for (let line of lines) {

        const trimmed = line.trim();

        // Detect filename
        if (filePattern.test(trimmed)) {

            if (currentFile) {
                files.push(currentFile);
            }

            currentFile = {
                filename: trimmed,
                code: ""
            };

            continue;
        }

        // Skip language markers
        if (
            trimmed === "javascript" ||
            trimmed === "java" ||
            trimmed === "python" ||
            trimmed === "typescript" ||
            trimmed === "csharp"
        ) {
            continue;
        }

        if (currentFile) {
            currentFile.code += line + "\n";
        }
    }

    if (currentFile) {
        files.push(currentFile);
    }

    return files;
}