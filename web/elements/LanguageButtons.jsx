import React from "react";
import { active_languages, SendLangs } from "./../active_languages.jsx";
 const LanguageButtons = (props) => {
        //let active_languages = this.props.activeLangs;
  //folds updateLang
  const updateLang = (dictionary, language) => {
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
    SendLangs(dictionary);
  }; //folde updateLang
        return (
           <>
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
          onClick={() => updateLang(active_languages, "css")}
          className="langbutton"
          id="css"
        >
          CSS
        </button>
        <button
          onClick={() => updateLang(active_languages, "coffeescript")}
          className="langbutton"
          id="coffeescript"
        >
          CoffeeScript
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
          onClick={() => updateLang(active_languages, "html")}
          className="langbutton"
          id="html"
        >
          HTML
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
          onClick={() => updateLang(active_languages, "kotlin")}
          className="langbutton"
          id="kotlin"
        >
          Kotlin
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
          onClick={() => updateLang(active_languages, "perl")}
          className="langbutton"
          id="perl"
        >
          PERL
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
          onClick={() => updateLang(active_languages, "shell")}
          className="langbutton"
          id="shell"
        >
          Shell
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
        </>);
}
export default LanguageButtons;
