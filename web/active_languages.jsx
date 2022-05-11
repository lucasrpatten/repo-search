import React from "react";

let active_languages = {
  // Popular Languages
  "assembly": [1, "Assembly"],
  "bash": [1, "Bash"],
  "c": [1, "C"],
  "c++": [1, "C++"],
  "c#": [1, "C#"],
  "css": [1, "CSS"],
  "coffeescript": [1, "CoffeeScript"],
  "elixir": [1, "Elixir"],
  "go": [1, "Go"],
  "html": [1, "HTML"],
  "java": [1, "Java"],
  "javascript": [1, "JavaScript"],
  "julia": [1, "Julia"],
  "kotlin": [1, "Kotlin"],
  "lua": [1, "Lua"],
  "objective c": [1, "Objective C"],
  "perl": [1, "PERL"],
  "php": [1, "PHP"],
  "powershell": [1, "PowerShell"],
  "python": [1, "Python"],
  "ruby": [1, "Ruby"],
  "rust": [1, "Rust"],
  "scala": [1, "Scala"],
  "shell": [1, "Shell"],
  "sql": [1, "SQL"],
  "swift": [1, "Swift"],
  "typescript": [1, "TypeScript"],
  // all languages

  "vimscript": [1, "VimScript"],
  "xml": [1, "XML"],
};

const SendLangs = (sent) => {
  active_languages = sent;
};

export { SendLangs, active_languages };
