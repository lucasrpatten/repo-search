import React, { useState } from "react";
import { active_languages, SendLangs } from "./../active_languages.jsx";

const updateLang = (dictionary, language) => {
  let keys = Object.keys(dictionary);
  let _active = 1;
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let activeEl = document.getElementById(key);
    if (activeEl.style.background == "transparent") {
      _active = 0;
    }
  }
  if (language == "all_langs") {
    if (_active != 0) {
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        document.getElementById(key).style.background = "transparent";
      }
    } else {
      let keys = Object.keys(dictionary);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        document.getElementById(key).style.background =
          "rgba(120, 120, 120, .2)";
      }
    }
  } else {
    if (document.getElementById(language).style.background == "transparent") {
      document.getElementById(language).style.background =
        "rgba(120, 120, 120, .2)";
    } else {
      document.getElementById(language).style.background = "transparent";
    }
  }
}; //folde updateLang

const LanguageButtons = (props) => {
  const [invisible, setInvisible] = useState("none");
  let Buttons = [];
  const languages = Object.keys(active_languages);
  const last_popular = languages.indexOf("typescript"); // Manually Update if you add more popular languages after typescript
  let Class;
  //let active_languages = this.props.activeLangs;
  //folds updateLang
  const hideAll = () => {
    for (
      let i = languages.indexOf("typescript") + 1;
      i < languages.length;
      i++
    ) {
      let langID = languages[i];
      document.getElementById(langID).style.display = "none";
    }
  };
  const showAll = () => {
    for (
      let i = languages.indexOf("typescript") + 1;
      i < languages.length;
      i++
    ) {
      let langID = languages[i];
      document.getElementById(langID).style.display = "initial";
    }
  };
  const toggleNotPop = () => {
    if (document.getElementById("basic").style.display != "none") {
      //I'm sure basic will be around
      hideAll();
    } else {
      showAll();
    }
  };
  const hidePop = () => {
    for (let i = 0; i < languages.indexOf("typescript") + 1; i++) {
      let langID = languages[i];
      document.getElementById(langID).style.display = "none";
    }
  };
  const showPop = () => {
    for (let i = 0; i < languages.indexOf("typescript") + 1; i++) {
      let langID = languages[i];
      document.getElementById(langID).style.display = "initial";
    }
  };
  const togglePop = () => {
    if (document.getElementById("c++").style.display == "none") {
      //I'm sure basic will be around
      showPop();
    } else {
      hidePop();
    }
  };
  (function () {
    for (let i = 0; i < languages.length; i++) {
      let langID = languages[i];

      if (i - 1 == last_popular) {
        Buttons.push(
          <div className="all" key={"all"} id="all" onClick={toggleNotPop}>
            <u>*All Languages*</u>
          </div>
        );
        Class = "langbutton alllangbutton";
      } else if (i > last_popular) {
        Class = "langbutton alllangbutton";
      } else {
        Class = "langbutton poplangbutton";
      }
      Buttons.push(
        <button
          id={langID}
          onClick={() => updateLang(active_languages, langID)}
          className={Class}
          key={langID}
        >
          {Object.values(active_languages)[i]}
        </button>
      );
    }
  })();

  return (
    <>
      <button
        id="langall"
        className="langbutton"
        onClick={() => updateLang(active_languages, "all_langs")}
      >
        Toggle All
      </button>
      <div className="pop" id="pop" onClick={togglePop}>
        <u>Popular Languages</u>
      </div>
      {Buttons}
    </>
  );
};
export default LanguageButtons;
