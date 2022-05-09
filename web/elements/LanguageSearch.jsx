import React from 'react';
import { styled } from "@mui/material/styles"; 
import { active_languages } from "./../active_languages.jsx" ;
const LanguageSearch = () => {
const SearchBar = styled('input')({
    'position': 'absolute',
    'width': '12vw',
    'z-index': '1',
    'right': 'calc(0.3% + 1.24vw)',
    'height': '28px',
    'borderRadius': '12px',
    'outline': 'none',
    'backgroundColor': '#ffffe4',
    'color': '#797979',
    'textAlign': 'center',
    'border': 'none',})
    
const updateResults = (event) => {
  let search = event.target.value;
  let keys = Object.keys(active_languages);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
let element = document.getElementById(key);

    if (key.includes(search)) {
      element.attributeStyleMap.clear();
    }
    else {
            element.style.display='none';

    }
  }
}



return (
    <>
    <SearchBar 
    placeholder='Search'
    onChange = {updateResults}
    />
    </>
  );


}

export default LanguageSearch;
