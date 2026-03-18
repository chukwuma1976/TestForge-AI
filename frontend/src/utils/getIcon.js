export const getIcon = (name) => {
    const lower = name.toLowerCase();

    if (lower.includes("test")) return "🧪";        // test files
    if (lower.includes("api")) return "🌐";          // API related
    if (lower.includes("page")) return "📘";         // page objects
    if (lower.includes("config")) return "⚙️";       // configs
    if (lower.includes("util")) return "🧩";         // utilities

    return "📄"; // default
};