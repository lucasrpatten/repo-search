# Formatting Conventions
Guidlines to keep the code *pretty* and **consistent**
___
Read about the **Naming Conventions** [here](naming-conventions.md)<br><br>

## Javascript
- **Indentation** - Use an indentation of **2 spaces** for Javascript<br><br>
- **Functions** - Use anonymous functions defined with `const functionName = (param1, param2) => { //insert your code here }`. Why? Though either method works, this is just to keep consistency.<br><br>
- **Trailing Commas** - Trailing commas are considered a good practice in this repo - for those who don't know what a trailing comma is, when you define certain aspects of html, css, and javascript, commas may be the seperator of elements. For example, in a js array, `let this_array = [5, 'hi', true, 24.244, 'Hello World',]`, the comma seperates the items. The trailing comma is a comma following the last element. This is to be included in this project, as it signifies that the project will never be complete, and individuals are always free to continue to add. So, include the trailing comma.<br><br>
- **Newline at file end** - For the same reason as trailing commas, every file is to end with a newline. Due to the nature of react, this will not affect the bundling at all - however, it, again, promotes additions to the project, and signifies the project can still be improved.<br><br>
- **Spaces/Newlines** - Use spaces around operators, resulting in a look like this: `let thisVar = 5 + 3;` - rather then like this: `let thisVar=5+3;`. Additionally, always add a space or a newline following a comma *unless* it is the trailing comma. **Always** end simple statements and definitions with a semicolon - though not always required this ensures consistency and code quality.<br><br>
- **Compound Statements** - Include a space before the opening bracket, and a space before a parantheses `(` containing parameters. Put the closing bracket on a newline, and do not follow it with a semicolon. <br>
```
const thisFunction = (param1, param2) => {
  return 12 + 6;
}
```
Rather than```const thisFunction=(param1,param2)=>{ return 12+6};```<br><br>
- **Objects and Arrays** - Opening bracket on the same line as the name, space following colons, quotes only around string values, include a trailing comma following the last value, end the definition with a semicolon.<br><br>
- **Exceptions** - The only exception to any of these rules is the use of nameless, anonymous functions, to be ran immedeately. In the cases of these functions, you may determine, while including variables such as function length, readability, and importance in your reasoning, if it would be suitable to ignore certain conventions. For example, it may be a very short nameless function that is a simple `if true then print Hello World` - due to the simplicity of the statement, it would be appropriate to ignore certain conventions to fit this statement on a single line.
