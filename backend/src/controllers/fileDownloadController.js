import JSZip from "jszip";

export async function downloadProject(req, res) {

    const { files } = req.body;

    const zip = new JSZip();

    files.forEach(file => {
        const folder = getFolder(file.filename);

        if (folder) {
            zip.folder(folder).file(file.filename, file.code);
        } else {
            zip.file(file.filename, file.code);
        }
    });

    // Optional supporting files
    zip.file(
        "README.md",
        `# TestForge AI Generated Project

## Structure
- tests/ → test files
- api/ → API utilities
- pages/ → page objects

## Run
npm install
npx playwright test
`
    );

    zip.file(
        "package.json",
        JSON.stringify({
            name: "testforge-project",
            version: "1.0.0"
        }, null, 2)
    );

    const zipContent = await zip.generateAsync({ type: "nodebuffer" });

    res.set({
        "Content-Type": "application/zip",
        "Content-Disposition": "attachment; filename=testforge-project.zip"
    });

    res.send(zipContent);
}

const getFolder = (filename) => {
    const lower = filename.toLowerCase();

    if (lower.includes("test")) return "tests";
    if (lower.includes("api")) return "api";
    if (lower.includes("page")) return "page";
    if (lower.includes("util")) return "utils";

    return "misc";
};