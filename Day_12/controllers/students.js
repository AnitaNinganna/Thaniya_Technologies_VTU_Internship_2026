let students = [
  { id: 1, name: 'John Doe', age: 20 },
  { id: 2, name: 'Jane Smith', age: 22 }
];

const getStudents = (req, res) => {
  res.json(students);
};

const createStudent = (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }
  const newStudent = {
    id: students.length + 1,
    name,
    age
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
};

const getStudentById = (req, res) => {
  const { id } = req.params;
  const student = students.find(student => student.id === parseInt(id));
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }
  res.json(student);
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const student = students.find(student => student.id === parseInt(id));
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }
  if (name) student.name = name;
  if (age) student.age = age;
  res.json(student);
};

const deleteStudent = (req, res) => {
  const { id } = req.params;
  const studentIndex = students.findIndex(student => student.id === parseInt(id));
  if (studentIndex === -1) {
    return res.status(404).json({ error: 'Student not found' });
  }
  students.splice(studentIndex, 1);
  res.status(204).send();
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};