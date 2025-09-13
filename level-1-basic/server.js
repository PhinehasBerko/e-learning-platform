const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI_ATLAS, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error(err));

// Schema & Models
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  teacher: String
});

const Course = mongoose.model("Course", courseSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the E-Learning Platform API");
});

app.get("/api/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

app.post("/api/courses", async (req, res) => {
  const { title, description, teacher } = req.body;
  const newCourse = new Course({ title, description, teacher });
  await newCourse.save();
  res.json(newCourse);
});

app.put("/api/courses/:id", async (req, res) => {
  const { id } = req.params;
  const updatedCourse = await Course.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedCourse);
});

app.delete("/api/courses/:id", async (req, res) => {
  const { id } = req.params;
  await Course.findByIdAndDelete(id);
  res.json({ message: "Course deleted" });
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
