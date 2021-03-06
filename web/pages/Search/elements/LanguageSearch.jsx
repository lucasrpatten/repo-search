import React from "react";
import { styled } from "@mui/material/styles";
import { active_languages } from "./../active_languages.jsx";

let _enabled;
const LanguageSearch = () => {
  const SearchBar = styled("input")({
    "position": "absolute",
    "width": "12vw",
    "z-index": "1",
    "right": "calc(0.3% + 1.24vw)",
    "height": "28px",
    "borderRadius": "12px",
    "outline": "none",
    "backgroundColor": "#ffffe4",
    "color": "#797979",
    "textAlign": "center",
    "border": "none",
  });

  const updateResults = (event) => {
    let search = event.target.value.toLowerCase();

    let keys = Object.keys(active_languages);
    if (search == "") {
      document.getElementById("langall").style.display = "initial";
      document.getElementById("containerMain").style.display = "initial";
      document.getElementById("containerLanguage").style.width = "";
      document.getElementById("submitsearch").style.right = "";

      setTimeout(function () {
        document.getElementById("all").style.display = "initial";
        document.getElementById("pop").style.display = "initial";
      }, 300);
      setTimeout(function () {
        document.getElementById("containerLanguage").style.transitionDuration =
          "0s";
      }, 400);
    } else {
      document.getElementById("langall").style.transitionDuration = "3s";

      document.getElementById("langall").style.display = "none";

      document.getElementById("containerLanguage").style.transitionDuration =
        ".4s";

      document.getElementById("containerLanguage").style.width = "79vw";
      document.getElementById("submitsearch").style.right = "2vw";
      document.getElementById("all").style.display = "none";
      document.getElementById("pop").style.display = "none";
    }
    let currentValue;
    let values = Object.values(active_languages);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];

      currentValue = values[i].toLowerCase();
      let element = document.getElementById(key);
      if (key.includes(search) || currentValue.includes(search)) {
        element.attributeStyleMap.clear();
      } else {
        element.style.display = "none";
      }
    }
  };

  return (
    <>
      <SearchBar placeholder="Search" onChange={updateResults} />
    </>
  );
};
export default LanguageSearch;
