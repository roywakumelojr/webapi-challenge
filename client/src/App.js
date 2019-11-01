import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [projects, setProjects] =  useState([])
  useEffect(() => {
    axios
    .get('http://localhost:6000/project/')
    .then(res => {
      setProjects(res.data)
      console.log(res)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Web API React App</h1>
        <h3>Project List</h3>
        {projects.map(project => (
        <div key={project.id}>
          <p>{project.name}</p>
        </div>
      ))}
      </header>
    </div>
  );
}

export default App;
