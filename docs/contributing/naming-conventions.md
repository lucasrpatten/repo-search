# Naming Conventions
Read about the formatting conventions [here][0]<br>

## All names
- Avoid any names that are similar to methods and functions that are built in, or part of an installed package.
<br><br>
## JS
- **HTML Elements** - `PascalCase` with one or two words describing the element, its purpose, etc. Name both the Element and the File the same name - ex. `web/elements/StarSlider.jsx`. Follow the file name with .jsx to signify it is a react component.</br></br>
- **JS Constants** - `PascalCase` with one or two words describing the purpose of the constant.</br></br>
- **JS Functions** - `camelCase`, first letter lowercase, one or two words describing what the function does. Make sure to read the [formatting conventions][0] of functions</br></br>
- **JS Variables** - `camelCase`, one or two words describing variable purpose.</br></br>
- **Objects and Arrays** - `snake_case`, one or two words that describe the data contained by the object or array.<br><br>
- **React useState** - `camelCase`. 1 to 3 words. For variable name the scheme is `objectDescription`, reulting in `objectDescription`. - The following method's naming system is `set` followed by a `PascalCase` variable - resulting in `setObjectDescription` - `[objectDescription, setObjectDescription] = useState(value);`</br></br>  
- **HTML Classes** - `alllower` or `camelCase` (Use your judgement to decide which is best in this case) - one or two words describing the element. For an example of each, take a look at the language buttons in `web/pages/Search.jsx` - className *langbutton* - an example of `alllower`. In the same file, if you take a look at the containers - `containerSearch`, `containerMain`, and `containerLangauge`, you will see they use camelCase. </br></br>
- **HTML ID'S** - `alllower` - one string, no spaces, describing the element - like `thatoneid`. Ex. `alllangs`. Keep it a reasonable length (less than 10 characters is
generally a good guideline)</br></br>
- **Pages** - `Capital.jsx`, named after the main purpose of the page - end file in .jsx - one word, capitalized - use `PascalCase` if you're judgement feels that for whatever reason, more words are ***NECESSARY***</br></br>
- **Exceptions** - There may be exceptions to some of these rules. Read [here][1]
## Python
___
todo</br></br>
## SQL
___
todo</br></br>
## Exceptions
Sometimes while naming something, you may encounter an obstacle, or feel a different naming style would be better for this specific situation. Just use your best judgement if you feel that a, in a specific case, the naming schemes shouldn't apply - these conventions are for ease of reading, programming, and additions by others. However, as long as you feel a different name fits this, and would be better with a different convention -- Go for it.<br>
<br>

## Automations
Some automations have been created to check and fix your formatting or conventions. Read about these [here][2].

[0]: formatting-conventions.md
[1]: #exceptions
[2]: automations.md
