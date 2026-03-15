import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api"
});

export const generateTest = (payload) =>
    API.post("/tests/generate", payload);
