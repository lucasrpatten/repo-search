import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { withStyles } from '@mui/material/styles';
import { createMuiTheme, ThemeProvider} from '@mui/material/styles'



export default function ForkInput () {


const noneState = useState('none')

const textInput = {
    background: 'rgba(100, 100, 100, 0.5)' , color: '#c2b87b', border: 'none', i
}
return (

  <>
    <div style={{color: '#75eb67', 'font-size': '3.5vw', 'margin-top':'50px', position: 'absolute', right: '6.5vw'}}><span style={{'font-size': '4.5vw'}}>∫</span>&#8198;orks</div>

      <div id = "containment" style={{width:"17vw", height:"17vw", border:"solid 3px white", position : 'absolute', 'margin-top':'130px', left:'1.2vw', 'background-image': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAHlBMVEUAAABkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGSH0mEbAAAACnRSTlMAzDPDPPPYnGMw2CgMzQAAAChJREFUKM9jgAPOAgZMwGIwKkhXQSUY0BCCMxkEYUAsEM4cjI4fwYIAf2QMNbUsZjcAAAAASUVORK5CYII=')"/* i need to set min width sometime, but first calculate it*/}} />
      <div>
    
        <input id="test" type="text" style={textInput} onFocus = />

    
      </div>
    
  </>

); }
