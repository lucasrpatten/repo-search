import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import css from './App.css';


function App() {
    const [inputs, setInputs] = useState({});
   

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }


    return(
        <div class='root'>
        <form onSubmit={handleSubmit}>
        <label>test:
              <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
              />
        </label>
        <label>AGe:
            <input
            type="text"
            name="age"
            value={inputs.username || ""}
            onChange={handleChange}
            />
        </label>
        <input type="submit"/>
        </form>

    </div>
    );
}
export default App;
