const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// In-memory student database
let students = [
  { id: 1, name: 'John Doe', course: 'Computer Science' },
  { id: 2, name: 'Jane Smith', course: 'Information Technology' },
  { id: 3, name: 'Mike Johnson', course: 'Software Engineering' }
];

// GET all students
app.get('/students', (req, res) => {
  res.json({
    success: true,
    message: 'Students retrieved successfully',
    data: students
  });
});

// POST - Create a new student
app.post('/students', (req, res) => {
  const { name, course } = req.body;

  // Validation
  if (!name || !course) {
    return res.status(400).json({
      success: false,
      message: 'Name and course are required'
    });
  }

  // Generate new ID
  const newStudent = {
    id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
    name,
    course
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: 'Student created successfully',
    data: newStudent
  });
});

// DELETE - Delete student by ID
app.delete('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const studentIndex = students.findIndex(s => s.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Student with ID ${studentId} not found`
    });
  }

  const deletedStudent = students.splice(studentIndex, 1);

  res.json({
    success: true,
    message: 'Student deleted successfully',
    data: deletedStudent[0]
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Student API',
    endpoints: {
      'GET /students': 'Get all students',
      'POST /students': 'Create a new student (body: {name, course})',
      'DELETE /students/:id': 'Delete a student by ID'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Student API running on http://localhost:${PORT}`);
  console.log(`Test endpoints at http://localhost:${PORT}`);
});
