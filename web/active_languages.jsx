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
  "dart": [1, "Dart"],
  "elixir": [1, "Elixir"],
  "go": [1, "Go"],
  "groovy": [1, "Groovy"],
  "html": [1, "HTML"],
  "java": [1, "Java"],
  "javascript": [1, "JavaScript"],
  "julia": [1, "Julia"],
  "kotlin": [1, "Kotlin"],
  "lua": [1, "Lua"],
  "objective-c": [1, "Objective C"],
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

  // first here
  "asp.net": [1, "ASP.NET"],
  "basic": [1, "Basic"],
  "batchfile": [1, "Batchfile"],
  "brainfuck": [1, "Brainf#@$"],
  "cython": [1, "Cython"],
  "graphql": [1, "GraphQL"],
  "json": [1, "JSON"],
  "jsonwithcomments": [1, "JSON with Comments"],
  "r": [1, "R"],
  "sass": [1, "Sass"],
  "vbscript": [1, "VBScript"],
  "vimscript": [1, "Vim Script"],
  "xml": [1, "XML"],
  // when adding langs, make sure either the key or value coorelates with the github lang id = https://github.com/search/advanced?q=a&type=Repositories (written in this language) (case insensitive). Also keep in alphabetical order.
};

const SendLangs = (sent) => {
  active_languages = sent;
};

export { SendLangs, active_languages };
