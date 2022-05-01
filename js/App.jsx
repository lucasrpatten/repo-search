import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import css from '../css/App.css';
import { PageHeader } from "react-bootstrap";
var $ = require('jquery');




function App() {
    function sayHello() {
        alert('Hello!');
    }

function add_language (list, language) {
    inlist = false
    for (let i = 0; i < list.length; i++) {
    if (language === list[i]) {
        inlist = true
}} if (inlist === true) {
        return arr.filter(e => e !== language);
}
    else {
        return list.push(language);
    }
}

function add_all ()

    var active_languages = [
    'All Languages'
    ]
    return(
        <div class="body">
        <div class="container-main">
        </div>
        <div class="container-language">
    
                          
            <button id="langall">Add/Remove All</button>
<button class="langbutton" id="assembly" onClick={sayHello}>Assembly</button>
            <button class="langbutton" id="bash">Bash</button>
            <button class="langbutton" id="c">C</button>
            <button class="langbutton" id="c++">C++</button>
            <button class="langbutton" id="c#">C#</button>
            <button class="langbutton" id="elixir">Elixir</button>
            <button class="langbutton" id="go">Go</button>
            <button class="langbutton" id="java">Java</button>
            <button class="langbutton" id="javascript">Javascript</button>
            <button class="langbutton" id="julia">Julia</button>
            <button class="langbutton" id="lua">Lua</button>
            <button class="langbutton" id="objective-c">Objective C</button>
            <button class="langbutton" id="pearl">PEARL</button>
            <button class="langbutton" id="php">PHP</button>
            <button class="langbutton" id="powershell">PowerShell</button>
            <button class="langbutton" id="python">Python</button>
            <button class="langbutton" id="ruby">Ruby</button>
            <button class="langbutton" id="rust">Rust</button>
            <button class="langbutton" id="scala">Scala</button>
            <button class="langbutton" id="sql">SQL</button>
            <button class="langbutton" id="swift">Swift</button>
            <button class="langbutton" id="typescript">TypeScript</button>
            <button class="langbutton" id="vimscript">VimScript</button>
            <button class="langbutton" id="xml">XML</button>

</div>
        </div>

    );
}
export default App;
