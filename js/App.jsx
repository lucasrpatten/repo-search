import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import css from '../css/App.css';
import { PageHeader } from "react-bootstrap";

var $ = require('jquery');



function App() {
    //current_languages = "";
      //  $(function() {
        //  $('.container-language button').on('click', function(e) {
          //  e.preventDefault()
          //  $.getJSON('/addlang',
          //      function(data) {
          //      current_languages = data;
          //  });
         //   return false;
       //   });
      //  });

    return(
        <div class="body">
        <div class="container-main">
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
        <div class="container-language">
    
                          
            <button id="langall">Add/Remove All</button>

            <button id="assembly" >Assembly</button>
            <button id="bash">Bash</button>
            <button id="c">C</button>
            <button id="c++">C++</button>
            <button id="c#">C#</button>
            <button id="elixir">Elixir</button>
            <button id="go">Go</button>
            <button id="java">Java</button>
            <button id="javascript">Javascript</button>
            <button id="julia">Julia</button>
            <button id="lua">Lua</button>
            <button id="objective-c">Objective C</button>
            <button id="pearl">PEARL</button>
            <button id="php">PHP</button>
            <button id="powershell">PowerShell</button>
            <button id="python">Python</button>
            <button id="ruby">Ruby</button>
            <button id="rust">Rust</button>
            <button id="scala">Scala</button>
            <button id="sql">SQL</button>
            <button id="swift">Swift</button>
            <button id="typescript">TypeScript</button>
            <button id="vimscript">VimScript</button>
            <button id="xml">XML</button>

</div>
        </div>

    );
}
export default App;
