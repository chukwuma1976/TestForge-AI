import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import testRoutes from "./routes/testRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tests", testRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`TestForge AI backend running on port ${PORT}`);
});