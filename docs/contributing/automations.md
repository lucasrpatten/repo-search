# Automations

Tools to make **you** have to do less<br>
<br>
Automations are stored in the _`automations`_ directory - located in the projects `root` directory.

---

## Automations LIst

- **[pretty-js][prettyjs]** - Uses [prettier] to make your code _pretty_ (er)
- **[pre-pull][prepull]** - Runs automations pre-pull request

## Pretty-js

**`pretty-js.sh`** - Shell program that uses [prettier] to make your code, well, prettier. Scans the program files, and makes things such as indents or quotations consistent.
Run in terminal with the command `bash pretty-js.sh`, then follow the on screen prompts as they appear.</br>

## Pre-pull

**`pre-pull.sh`** - Shell program that runs all recommended automations prior to a pull request. Run prior to a pull request via `bash pre-pull.sh`,
then follow the on screen
prompts.</br>

<links />

[prettyjs]: #pretty-js
[prettier]: https://prettier.io/
[prepull]: #pre-pull
