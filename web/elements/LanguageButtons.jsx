import React, { useState } from "react";
import { active_languages, SendLangs } from "./../active_languages.jsx";



const updateLang = (dictionary, language) => {

    if (language == "all_langs") {
      if (Object.values(dictionary).includes(1)) {
        let keys = Object.keys(dictionary);
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          dictionary[key][0] = 0;
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


 const LanguageButtons = (props) => {
  let Buttons = [] 
const languages = Object.keys(active_languages);
        //let active_languages = this.props.activeLangs;
  //folds updateLang
     (function() {
         for (let i = 0; i < languages.length; i++)
         {
          let langID = (languages[i]);
          Buttons.push(
              <button
      id={langID} 
      onClick={() => updateLang(active_languages, langID)} 
      className="langbutton"
      key={langID}
        >
              {Object.values(active_languages)[languages.indexOf(langID)][1]}
      </button>)
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
        {Buttons} 
        </>);
}
export default LanguageButtons;