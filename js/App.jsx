/*
For documentation purposes, the comments //folds and //folde are my custom vim folding markers - feel free to ignore them.
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import '../css/App.css';
import { PageHeader } from "react-bootstrap";
var $ = require('jquery');



//folds App
function App() { 

  //folds javascript
  //folds updateLang
  function updateLang(dictionary, language) {
    if (language == "all_langs") {
      if (Object.values(dictionary).includes(1)) {
        let keys = Object.keys(dictionary);
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i]; 
          dictionary[key]=0;
          document.getElementById(key).style.background = "red"; 
        }
      }
      else {
        let keys = Object.keys(dictionary)
        for (let i=0; i < keys.length; i++) {
          let key = keys[i];
          dictionary[key]=1;
          document.getElementById(key).style.background = "green";
        }
      }
    }
    else {
      if (dictionary[language] == 0) {
        dictionary[language] = 1;
        document.getElementById(language).style.background = "green";
      }
      else {
        dictionary[language] = 0;
        document.getElementById(language).style.background = "red";
      }
    }
    active_languages = dictionary;
  }
  //folde updateLang

  //folds active_languages
  let active_languages = { 
    assembly:0,
    bash:0,
    c:0,
    "c++":0,
    "c#":0,
    elixir:0,
    go:0,
    java:0,
    javascript:0,
    julia:0,
    lua:0,
    "objective-c":0,
    pearl:0,
    php:0,
    powershell:0,
    python:0,
    ruby:0,
    rust:0,
    scala:0,
    sql:0,
    swift:0,
    typescript:0,
    vimscript:0,
    xml:0}
  //folde active_languages
  //folde javascript
  //folds mainhtml 
  return(
    <div>

    <div class="container-main">
      
    </div>
    <div class="container-language">

      {/*//folds languagebuttons*/}
      <button id="langall" onClick={() => updateLang( active_languages, 'all_langs')}>All Langs</button>
      <button class="langbutton" id="assembly" onClick={() => updateLang( active_languages, 'assembly')}>Assembly</button>
      <button onClick={() => updateLang( active_languages, 'bash')} class="langbutton" id="bash">Bash</button>
      <button onClick={() => updateLang( active_languages, 'c')} class="langbutton" id="c">C</button>
      <button onClicklick={() => updateLang( active_languages, 'c++')} class="langbutton" id="c++">C++</button>
      <button onClick={() => updateLang( active_languages, 'c#')} class="langbutton" id="c#">C#</button>
      <button onClick={() => updateLang( active_languages, 'elixir')} class="langbutton" id="elixir">Elixir</button>
      <button onClick={() => updateLang( active_languages, 'go')} class="langbutton" id="go">Go</button>
      <button onClick={() => updateLang( active_languages, 'java')} class="langbutton" id="java">Java</button>
      <button onClick={() => updateLang( active_languages, 'javascript')} class="langbutton" id="javascript">Javascript</button>
      <button onClick={() => updateLang( active_languages, 'julia')} class="langbutton" id="julia">Julia</button>
      <button onClick={() => updateLang( active_languages, 'lua')} class="langbutton" id="lua">Lua</button>
      <button onClick={() => updateLang( active_languages, 'objective-c')} class="langbutton" id="objective-c">Objective C</button>
      <button onClick={() => updateLang( active_languages, 'pearl')} class="langbutton" id="pearl">PEARL</button>
      <button onClick={() => updateLang( active_languages, 'php')} class="langbutton" id="php">PHP</button>
      <button onClick={() => updateLang( active_languages, 'powershell')} class="langbutton" id="powershell">PowerShell</button>
      <button onClick={() => updateLang( active_languages, 'python')}  class="langbutton" id="python">Python</button>
      <button onClick={() => updateLang( active_languages, 'ruby')}  class="langbutton" id="ruby">Ruby</button>
      <button onClick={() => updateLang( active_languages, 'rust')} class="langbutton" id="rust">Rust</button>
      <button onClick={() => updateLang( active_languages, 'scala')} class="langbutton" id="scala">Scala</button>
      <button onClick={() => updateLang( active_languages, 'sql')} class="langbutton" id="sql">SQL</button>
      <button onClick={() => updateLang( active_languages, 'swift')} class="langbutton" id="swift">Swift</button>
      <button onClick={() => updateLang( active_languages, 'typescript')} class="langbutton" id="typescript">TypeScript</button>
      <button onClick={() => updateLang( active_languages, 'vimscript')} class="langbutton" id="vimscript">VimScript</button>
      <button onClick={() => updateLang( active_languages, 'xml')} class="langbutton" id="xml">XML</button>
      {/*//folde languagebuttons*/}
      
    </div>
    </div>);
    //folde mainhtml
}
//folde App
export default App;

