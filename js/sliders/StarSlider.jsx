import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';


function valuetext(value) {
  return `${value}°C`;
};

const UpperInput = styled(MuiInput)`
  width: 42px;
`;

const LowerInput = styled(MuiInput)`
  width: 42px;
`;


export default function StarSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const lowerInputChange = (event) => {
    setValue([Number(event.target.value), value[1]]);
  };

  const upperInputChange = (event) => {
    setValue([value[0], Number(event.target.value)]);
  };

  return (
    <Box sx={{ width: 100 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <UpperInput
            value={value[1]}
            size="small"
            onChange={upperInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />

      <LowerInput
            value={value[0]}
            size="small"
            onChange={lowerInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />

    </Box>
  );

}
