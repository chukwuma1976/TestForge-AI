import axios from "axios";

export const downloadProject = async (files) => {

    const response = await axios.post(
        "http://localhost:3000/api/tests/download",
        { files },
        { responseType: "blob" }
    );

    const url = window.URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "testforge-project.zip");

    document.body.appendChild(link);
    link.click();
};