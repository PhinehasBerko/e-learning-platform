
const API_URL = "http://localhost:8000/api/courses";

async function fetchCourses() {
    const res = await fetch(API_URL);
    const courses = await res.json();
    document.getElementById("courses").innerHTML = courses.map(c => `
    <div class="course-item">  
        <div class="course">
            <h3 style="color:#941e1e">${c.title}</h3>
            <p>${c.description}</p>
            <small>By ${c.teacher}</small>
        </div>
    </div>
`).join("");
}

async function addCourse() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const teacher = document.getElementById("teacher").value;

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, teacher })
    });

    fetchCourses();
}

fetchCourses();
