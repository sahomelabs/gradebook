// App.js
import React from 'react';
import StudentList from './components/StudentList';
import './components/StudentList.css';

const App = () => {
  return (
    <div>
      <h1 className='appname'>Student Grade App</h1>
      <StudentList />
    </div>
  );
};

export default App;
