// Student.js
import React from 'react';

const Student = ({ name, grade }) => {
  return (
       
        <li>
        <div className="name">Name: {name}</div>
        <div className="grade">Grade: {grade}</div>
        </li>
  )
};

export default Student;
