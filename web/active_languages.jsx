import React from 'react';

let active_languages = {
    "assembly": 1,
    "bash": 1,
    "c": 1,
    "c++": 1,
    "c#": 1,
    "css": 1,
    "coffeescript": 1,
    "elixir": 1,
    "go": 1,
    "html": 1,
    "java": 1,
    "javascript": 1,
    "julia": 1,
    "kotlin": 1,
    "lua": 1,
    "objective-c": 1,
    "perl": 1,
    "php": 1,
    "powershell": 1,
    "python": 1,
    "ruby": 1,
    "rust": 1,
    "scala": 1,
    "shell": 1,
    "sql": 1,
    "swift": 1,
    "typescript": 1,
    "vimscript": 1,
    "xml": 1, }


const SendLangs = (sent) => {
  active_languages = sent;
}

export { SendLangs, active_languages }
