// StudentForm.js
import React, { useRef } from 'react';

const StudentForm = ({ onAddStudent }) => {
  const studentInputRef = useRef(null);

  const addStudent = () => {
    const newStudent = studentInputRef.current.value;

    if (newStudent.trim() !== '') {
      onAddStudent(newStudent);
      studentInputRef.current.value = '';
    }
  };

  return (
    <div>
      <input type="text" ref={studentInputRef} />
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
};

export default StudentForm;
