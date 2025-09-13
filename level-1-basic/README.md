📘 E-Learning Platform – Level 1 (Basic)

This is the Level 1 implementation of my Codveda Internship Project:
An E-Learning & Student Performance Platform.

At this stage, I built:

✅ Development environment setup (Node.js, Express, MongoDB, Git)

✅ REST API for Courses (CRUD operations)

✅ Basic frontend using HTML/CSS/JS that interacts with the API

🚀 Features

Add, update, delete, and view courses

API endpoints for course management

Simple frontend UI for course listing and creation

Data persistence using MongoDB

⚙️ Tech Stack

Backend: Node.js, Express, Mongoose

Database: MongoDB

Frontend: HTML, CSS, Vanilla JavaScript

Tools: Postman, Git/GitHub, Nodemon

📂 Project Structure
level-1-basic/
│── server.js # Express backend (API)
│── index.html # Basic frontend
│── .env # Environment variables (Mongo URI)
│── package.json # Dependencies
│── README.md # Documentation

🔧 Installation & Setup

1. Clone the repository
   git clone https://github.com/your-username/e-learning-platform.git
   cd e-learning-platform/level-1-basic

2. Install dependencies
   npm install

3. Setup environment variables

Create a .env file inside level-1-basic/:

MONGO_URI=mongodb://127.0.0.1:27017/elearning
PORT=5000

4. Start the server
   npm run dev

🛣️ API Endpoints

| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| GET    | `/api/courses`     | Fetch all courses         |
| POST   | `/api/courses`     | Add a new course          |
| PUT    | `/api/courses/:id` | Update an existing course |
| DELETE | `/api/courses/:id` | Delete a course           |
