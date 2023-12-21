
// StudentList.jsx
import React, { useRef, useState } from 'react';
import Student from '../models/Student';
import './StudentList.css';

const StudentList = () => {
  const studentInputRef = useRef(null);
  const gradeInputRef = useRef(null);

  const [students, setStudents] = useState([
    { name: 'Daniel D', grade: 'A' },
    { name: 'Damian Lillard', grade: 'B' },
    { name: 'Bobby Portis', grade: 'C' },
    { name: 'Brook Lopez', grade: 'A-' },
    { name: 'Giannis Atekokounmpo', grade: 'B+' },
  ]);

  const addStudent = () => {
    const newStudent = studentInputRef.current.value;
    const newGrade = gradeInputRef.current.value;

    if (newStudent.trim() !== '' && newGrade.trim() !== '') {
      setStudents((prevStudents) => [...prevStudents, { name: newStudent, grade: newGrade }]);
      studentInputRef.current.value = '';
      gradeInputRef.current.value = '';
    }
  };

  return (
    <div className="container">
      <h2>Enter Student Name and Grade </h2>
      <div className="input-group">
        <div>
          <label forStuName="studentName">Name</label>
          <input type="text" id="studentName" placeholder="Enter Student Name" ref={studentInputRef} />
        </div>
        <div>
          <label forGrade="studentGrade">Grade</label>
          <input type="text" id="studentGrade" placeholder="Enter Grade" ref={gradeInputRef} />
        </div>
        <button onClick={addStudent}>Add Student</button>
      </div>

      <ul>
        {students.map((student, index) => (
          <Student key={index} name={student.name} grade={student.grade} />
        ))}
      </ul>
    </div>
  );
};

export default StudentList;

