const express = require('express');
const router = express.Router();
const studentController = require('../controllers/students');

// GET /students - Get all students
router.get('/', studentController.getStudents);

// GET /students/:id - Get a single student
router.get('/:id', studentController.getStudentById);

// POST /students - Create a new student
router.post('/', studentController.createStudent);

// PUT /students/:id - Update a student
router.put('/:id', studentController.updateStudent);

// DELETE /students/:id - Delete a student
router.delete('/:id', studentController.deleteStudent);

module.exports = router;