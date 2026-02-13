
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let students = [];
app.get('/', (req, res) => {
res.send(`
<h2>Add Student</h2>
<form method="POST" action="/students">
<input type="text" name="name" placeholder="Enter name" />
<button type="submit">Add</button>
</form>
`);
});
app.post('/students', (req, res) => {
const name = req.body.name;
const newStudent = {
id: students.length + 1,
name: name
};
students.push(newStudent);
res.send("Student Added Successfully!");
});

app.get('/students', (req, res) => {
res.json(students);
});
app.listen(3000, () => {
console.log("Server running on port 3000");
});


app.get('/students', (req, res) => {
res.json(students);
});



app.get('/students/:id', (req, res) => {
const id = parseInt(req.params.id);
const student = students.find(s => s.id === id);
if (!student) {
return res.status(404).json({ message: "Student not found" });
}
res.json(student);
});





app.post('/students', (req, res) => {
const { name } = req.body;
if (!name) {
return res.status(400).json({ message: "Name is required" });
}
const newStudent = {
id: students.length + 1,
name: name
};
students.push(newStudent);
res.status(201).json(newStudent);
});



app.put('/students/:id', (req, res) => {
const id = parseInt(req.params.id);
const { name } = req.body;
const student = students.find(s => s.id === id);
if (!student) {
return res.status(404).json({ message: "Student not found" });
}
student.name = name;
res.json({ message: "Student updated", student });
});





app.delete('/students/:id', (req, res) => {
const id = parseInt(req.params.id);
students = students.filter(s => s.id !== id);
res.json({ message: "Student deleted" });
});
app.listen(3000, () => {
console.log("Server running on port 3000");
});


