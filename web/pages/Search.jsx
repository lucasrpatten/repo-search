/*
For documentation purposes, the comments //folds and //folde are my custom vim folding markers - feel free to ignore them.

On another note, I eventually want all large functions (about 15+ lines) to another file, and then imported
*/
//folds imports
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/App.css";
import { PageHeader } from "react-bootstrap";
import StarSlider from "./../elements/StarSlider.jsx";
import ForkInput from "./../elements/ForkInput.jsx";
const $ = require("jquery");

//folde
//folds Main
const Search = () => {
  // todo - add a function to warn the user if the window is to small (less than 720px)

  //folds javascripti
  const [starRange, updateStarRange] = useState(0, 110000);
  const [forks, updateForks] = useState(0, 10000);
  //folds updateLang
  function updateLang(dictionary, language) {
    if (language == "all_langs") {
      if (Object.values(dictionary).includes(1)) {
        let keys = Object.keys(dictionary);
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          dictionary[key] = 0;
          document.getElementById(key).style.background = "transparent";
        }
      } else {
        let keys = Object.keys(dictionary);
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          dictionary[key] = 1;
          document.getElementById(key).style.background =
            "rgba(120, 120, 120, .2)";
        }
      }
    } else {
      if (dictionary[language] == 0) {
        dictionary[language] = 1;
        document.getElementById(language).style.background =
          "rgba(120, 120, 120, .2)";
      } else {
        dictionary[language] = 0;
        document.getElementById(language).style.background = "transparent";
      }
    }
    active_languages = dictionary;
  } //folde updateLang
  //folds handleSearch
  const handleSearch = () => {
    let selectedLangs = [];
    (function () {
      let values = Object.values(active_languages);
      let keys = Object.keys(active_languages);
      for (let i = 0; i < values.length; i++) {
        let value = values[i];
        if (value == 1) {
          selectedLangs.push(keys[i]);
        }
      }
    })();

    let lowerStars = document.getElementById("lowerstarinput").value;
    let upperStars = document.getElementById("upperstarinput").value;
    let lowerForks = document.getElementById("lowerforkvalue").value;
    let upperForks = document.getElementById("upperforkvalue").value;
    let db = require("./../database/repoDB.json.txt");
    console.log(db);
  };
  //folde
  //folds active_languages
  let active_languages = {
    "assembly": 1,
    "bash": 1,
    "c": 1,
    "c++": 1,
    "c#": 1,
    "elixir": 1,
    "go": 1,
    "java": 1,
    "javascript": 1,
    "julia": 1,
    "lua": 1,
    "objective-c": 1,
    "pearl": 1,
    "php": 1,
    "powershell": 1,
    "python": 1,
    "ruby": 1,
    "rust": 1,
    "scala": 1,
    "sql": 1,
    "swift": 1,
    "typescript": 1,
    "vimscript": 1,
    "xml": 1,
  };
  //folde active_languages
  //folde javascript
  //folds mainhtml
  return (
    <>
      <div className="container-search">
        <div id="stars">
          <StarSlider />
        </div>
        <div id="forks">
          <ForkInput />
        </div>
      </div>
      <div className="container-main">
        <button id="submitsearch" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="container-language">
        {/*//folds languagebuttons*/}
        <button
          id="langall"
          className="langbutton"
          onClick={() => updateLang(active_languages, "all_langs")}
        >
          Toggle All
        </button>
        <button
          className="langbutton"
          id="assembly"
          onClick={() => updateLang(active_languages, "assembly")}
        >
          Assembly
        </button>
        <button
          onClick={() => updateLang(active_languages, "bash")}
          className="langbutton"
          id="bash"
        >
          Bash
        </button>
        <button
          onClick={() => updateLang(active_languages, "c")}
          className="langbutton"
          id="c"
        >
          C
        </button>
        <button
          onClick={() => updateLang(active_languages, "c++")}
          className="langbutton"
          id="c++"
        >
          C++
        </button>
        <button
          onClick={() => updateLang(active_languages, "c#")}
          className="langbutton"
          id="c#"
        >
          C#
        </button>
        <button
          onClick={() => updateLang(active_languages, "elixir")}
          className="langbutton"
          id="elixir"
        >
          Elixir
        </button>
        <button
          onClick={() => updateLang(active_languages, "go")}
          className="langbutton"
          id="go"
        >
          Go
        </button>
        <button
          onClick={() => updateLang(active_languages, "java")}
          className="langbutton"
          id="java"
        >
          Java
        </button>
        <button
          onClick={() => updateLang(active_languages, "javascript")}
          className="langbutton"
          id="javascript"
        >
          Javascript
        </button>
        <button
          onClick={() => updateLang(active_languages, "julia")}
          className="langbutton"
          id="julia"
        >
          Julia
        </button>
        <button
          onClick={() => updateLang(active_languages, "lua")}
          className="langbutton"
          id="lua"
        >
          Lua
        </button>
        <button
          onClick={() => updateLang(active_languages, "objective-c")}
          className="langbutton"
          id="objective-c"
        >
          Objective C
        </button>
        <button
          onClick={() => updateLang(active_languages, "pearl")}
          className="langbutton"
          id="pearl"
        >
          PEARL
        </button>
        <button
          onClick={() => updateLang(active_languages, "php")}
          className="langbutton"
          id="php"
        >
          PHP
        </button>
        <button
          onClick={() => updateLang(active_languages, "powershell")}
          className="langbutton"
          id="powershell"
        >
          PowerShell
        </button>
        <button
          onClick={() => updateLang(active_languages, "python")}
          className="langbutton"
          id="python"
        >
          Python
        </button>
        <button
          onClick={() => updateLang(active_languages, "ruby")}
          className="langbutton"
          id="ruby"
        >
          Ruby
        </button>
        <button
          onClick={() => updateLang(active_languages, "rust")}
          className="langbutton"
          id="rust"
        >
          Rust
        </button>
        <button
          onClick={() => updateLang(active_languages, "scala")}
          className="langbutton"
          id="scala"
        >
          Scala
        </button>
        <button
          onClick={() => updateLang(active_languages, "sql")}
          className="langbutton"
          id="sql"
        >
          SQL
        </button>
        <button
          onClick={() => updateLang(active_languages, "swift")}
          className="langbutton"
          id="swift"
        >
          Swift
        </button>
        <button
          onClick={() => updateLang(active_languages, "typescript")}
          className="langbutton"
          id="typescript"
        >
          TypeScript
        </button>
        <button
          onClick={() => updateLang(active_languages, "vimscript")}
          className="langbutton"
          id="vimscript"
        >
          VimScript
        </button>
        <button
          onClick={() => updateLang(active_languages, "xml")}
          className="langbutton"
          id="xml"
        >
          XML
        </button>
        {/*//folde languagebuttons*/}
      </div>
      <Outlet />
    </>
  );
};
//folde mainhtml
//folde Main
export default Search;
