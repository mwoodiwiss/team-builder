import React, { useState } from 'react';

const Form = props => {
        const [newMember, setNewMember] = useState({
                name: '',
                email: '',
                role: ''    
        });
      
        const handleChange = event => {
          setNewMember({
            ...newMember,
            [event.target.name]: event.target.value
          });
        };
      
        const handleSubmit = event => {
          event.preventDefault();
          console.log(newMember);
          props.addTeamMembers(newMember)
          setNewMember({name:'', email: '', role: ''})
        };
      
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <br/>
             <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <br/>
             <input
              type="text"
              name="role"
              placeholder="Role"
              onChange={handleChange}
            />
            <br/>
            <button type="submit">Submit</button>
          </form>
        );
}

export default Form;