import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';


function valuetext(value) {
  return `${value}`;
};

const UpperInput = styled(MuiInput)`
  width: 42px;
`;

const LowerInput = styled(MuiInput)`
  width: 42px;
`;

function calcValue(value) {
  return  Math.round(1.000105535** value); 
}

export default function StarSlider() {
  const [value, setValue] = React.useState([0, 110000]);



  const handleChange = (event, newValue) => {

    console.log(newValue);
    if (newValue[0] != value[0]) {
      newValue[0] = Math.round(1.000105535**newValue[0]);

      setValue(newValue);
    }
    else if (newValue[1] != value[1]) {
      newValue[1] = Math.round(1.000105535** newValue[1]);
      setValue(newValue);

    }
    setValue(newValue)
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 110000) {
      setValue(110000);
    }
  };

  const lowerInputChange = (event) => {
    setValue([Number(event.target.value), value[1]]);
  };

  const upperInputChange = (event) => {
    setValue([value[0], Number(event.target.value)]);
  };

  return (
    
    <Box>
      <div 
      style = {{color: '#ccac00', 'font-size': '3.5vw',  'margin-left': 'auto', 'margin-right': 'auto', position: 'relative', left: '2.1vw'}}
      >Star Range</div>
      <Box sx = {{ 'width':'15vw' }}>
      <Slider

        id = "slider"
        min={0}
        max={110000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        style={{'margin-left': '2.4vw', 'margin-top': '10px', color: 'rgba(200, 200, 220, .4)', background: 'darkgrey', 'border-radius': '50px', width : '15vw'  }} 
      />
      </Box>
      <Box>
      <LowerInput
            id={"lowerstarinput"}
            value={value[0]}
            style={{width:'70px', position: 'absolute', right: '10vw', background: 'transparent', 'border-radius': '12px', border: 'solid 1px #706e31', 'margin-top': '5px', 'margin-left': '10px', 'margin-right': '0px', color: 'rgba(104, 235, 104, .9)', 'margin-right': '4px' /*remove up and down arrows later, idk how */}}
            onChange={lowerInputChange}
            disableUnderline
            onBlur={handleBlur}
            inputProps={{
              step: 5,
              min: 0,
              max: 110000,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }} />
      {/* https://mui.com/system/the-sx-prop up and down arrows?*/}
    </Box>
    <Box>
      <UpperInput
            
            id={"upperstarinput"}
            value={value[1]}
            disableUnderline
            style={{width:'70px', position: 'absolute', float: 'right', left: '10vw', background: 'transparent', 'border-radius': '12px', border: 'solid 1px #706e31', 'margin-top': '5px', 'margin-left': '0px', 'margin-right': '10px', color: 'rgba(104, 235, 104, .9)', 'margin-left': '4px' /*remove up and down arrows later, idk how */}}
            onChange={upperInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1000,
              min: 0,
              max: 110000,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
</Box>


    </Box>
  );

}
