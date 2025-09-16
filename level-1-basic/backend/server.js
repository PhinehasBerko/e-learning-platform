import express, { json } from "express";
import { connect, Schema, model } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


const app = express();
app.use(cors());
app.use(json());

// MongoDB connection
connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected successfully🎊"))
  .catch(err => console.error(err));

// Schema & Models
const courseSchema = new Schema({
  title: String,
  description: String,
  teacher: String
});

const Course = model("Course", courseSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the E-Learning Platform API");
});

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    if (courses.length === 0) {
      return res.status(404).json({ message: "No courses found" });
    }else{
      res.json(courses).status(200);
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/courses", async (req, res) => {
  try { 
    const { title, description, teacher } = req.body;
    const newCourse = new Course({ title, description, teacher });
    await newCourse.save();
    res.json(newCourse);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.put("/api/courses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCourse = await Course.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/api/courses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.json({ message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
