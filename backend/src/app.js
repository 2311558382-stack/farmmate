import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to FarmMate API",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "FarmMate backend is running",
  });
});

export default app;