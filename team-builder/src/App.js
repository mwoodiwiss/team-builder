import React, { useState } from 'react';
import './App.css';
import Form from './components/form'

function App() {
  const [teamMembers, setTeamMembers] = useState([{name: 'Malachai', email: 'mwoodiwiss1999@gmail.com', role: 'student'}]);

  const addTeamMembers = (newMember) => {

    setTeamMembers([...teamMembers, newMember])
  }
  
  return (
    <div className="App">
      <h1>Team Members</h1>   

      <Form addTeamMembers={addTeamMembers}/>

      {teamMembers.map((form, index) => (
      <div className="form" key={index}>
      <h2>{form.name}</h2>
      <p>{form.email}</p>
      <p>{form.role}</p>
      </div>
  ))}
    </div>
  );
}

export default App;
