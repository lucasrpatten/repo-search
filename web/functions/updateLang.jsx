export default function updateLang(dictionary, language) {
  if (language == "all_langs") {
    if (Object.values(dictionary).includes(1)) {
      let keys = Object.keys(dictionary);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        dictionary[key] = 0;
        document.getElementById(key).style.background = "red";
      }
    } else {
      let keys = Object.keys(dictionary);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        dictionary[key] = 1;
        document.getElementById(key).style.background = "green";
      }
    }
  } else {
    if (dictionary[language] == 0) {
      dictionary[language] = 1;
      document.getElementById(language).style.background = "green";
    } else {
      dictionary[language] = 0;
      document.getElementById(language).style.background = "red";
    }
  }
  active_languages = dictionary;
}
