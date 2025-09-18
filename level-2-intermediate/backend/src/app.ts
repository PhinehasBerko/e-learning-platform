import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import authRoutes from '../src/routes/authRoute.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes)


// Example route
app.get("/", (req, res) => {
  res.json({ message: "E-Learning Platform API running 🚀" });
});

export default app;
