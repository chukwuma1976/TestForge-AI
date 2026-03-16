export function parseGeneratedFiles(code) {

    const parsed = JSON.parse(code);

    return parsed.files;

}