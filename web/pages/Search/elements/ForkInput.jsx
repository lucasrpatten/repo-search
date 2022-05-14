//folds imports
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import ToggleButton from "@mui/material/ToggleButton";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

//folde

const ForkInput = () => {
  const [position, setPosition] = useState([0, 10000]);
  const [circleState, setCircleState] = useState([
    "rgba(164,249,196,0.3)",
    "4vw",
    "25vw",
  ]);
  const [manualState, setManualState] = useState(false);
  //folds styles
  const ManualInput = styled(TextField)({
    "backgroundColor": "rgba(100, 130, 200, .98)",
    "outline": "none",
    "border": "none",
    "autocomplete": "off",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": { outline: "none", border: "none" },
    },
    "transitionDuration": ".2s",
    "defaultValue": "0-50000",
    "borderRadius": "15px",
    "width": "20vw",
    "color": "black",
    "position": "absolute",
    "top": "34vw",
    /* turn off autocomplete, idk how rn */
  });

  const lowerInputStyling = {
    background: "rgba(100, 100, 100, 0.5)",
    color: "#c2b87b",
    border: "none",
    outline: "none",
    position: "absolute",
    marginTop: "calc(50px + 5.2vw)",
    left: "0.87vw",
    width: "8vw",
    height: "4vw",
    fontSize: "2vw",
    textAlign: "center",
    userSelect: "none",
  };
  const upperInputStyling = {
    background: "rgba(100, 100, 100, 0.5)",
    color: "#c2b87b",
    border: "none",
    outline: "none",
    position: "absolute",
    marginTop: "calc(50px + 5.2vw)",
    left: "10.87vw",
    width: "8vw",
    height: "4vw",
    fontSize: "2vw",
    textAlign: "center",
    userSelect: "none",
  };

  const titleStyling = {
    color: "#75eb67",
    fontSize: "3.5vw",
    marginTop: "50px",
    position: "absolute",
    left: "6.5vw",
    userSelect: "none",
  };

  const containerStyling = {
    width: "17vw",
    height: "17vw",
    border: "double #3b3e40",
    position: "absolute",
    marginTop: "calc(50px + 10vw)",
    left: "1.3vw",
    backgroundImage:
      "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAHlBMVEUAAABkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGSH0mEbAAAACnRSTlMAzDPDPPPYnGMw2CgMzQAAAChJREFUKM9jgAPOAgZMwGIwKkhXQSUY0BCCMxkEYUAsEM4cjI4fwYIAf2QMNbUsZjcAAAAASUVORK5CYII=')" /* i need to set min width sometime, but first calculate it*/,
  };

  const circleStyling = {
    color: circleState[0],
    background: circleState[0],
    position: "absolute",
    top: circleState[2],
    left: circleState[1],
    height: "25px",
    width: "25px",
    transitionDuration: ".3s",
  };

  const StyledSwitch = styled(ToggleButton)({
    "backgroundColor": "rgba(80, 200, 130, .7)",
    "border": "rgba(150, 40, 50, .8) double 1px",
    "left": "0.25vw",
    "&:hover": {
      border: "rgba(80, 200, 130, .8) double 1px",
      backgroundColor: "rgba(150, 40, 50, .7)",
    },
    "transitionDuration": "0.8s",
  });
  const ControlLabel = styled(FormControlLabel)({
    position: "absolute",
    float: "left",
    color: "rgba(230, 210, 70, .9)",
    marginTop: "calc(60px + 27vw)",
    userSelect: "none",
  });
  //folde style
  //folds determinePosition
  const determinePosition = (evt) => {
    let x = evt.pageX - $("#containment").offset().left;
    let y = evt.pageY - $("#containment").offset().top;
    let realx = evt.pageX;
    let realy = evt.pageY;
    let hwRatio = window.innerHeight / window.innerWidth;
    let positionViewport = [
      String(((realx - 25) * 100) / window.innerWidth) + "vw",
      String((((realy - 25) * 100) / window.innerHeight) * hwRatio) + "vw",
    ];
    let edgeLength = Number(
      document.getElementById("containment").style.width.replace("vw", "")
    );
    let inPx = (edgeLength * document.documentElement.clientWidth) / 100;
    setPosition([
      Math.abs(Math.round((x / ((window.innerWidth * edgeLength) / 100)) * 10)),
      Math.abs(
        Math.round(
          (Math.abs(inPx - y) / ((window.innerWidth * edgeLength) / 100)) *
            10000
        )
      ),
    ]);
    setCircleState([
      "rgba(164,249,196,0.5)",
      positionViewport[0],
      positionViewport[1],
    ]);
  };
  //folde determinePosition

  const handleManual = (event) => {
    if (event.keyCode === 13) {
      setPosition(event.target.value.split("-"));
    } else if (event.keyCode === 27) {
      toggleManual();
    }
  };
  const toggleManual = () => {
    if (manualState === false) {
      setManualState(true);
    } else {
      setManualState(false);
    }
  };
  return (
    <>
      <div style={titleStyling}>
        <span style={{ fontSize: "4.5vw" }}>∫</span>&#8198;orks
      </div>

      <div
        id="containment"
        style={containerStyling}
        onMouseDown={determinePosition}
        draggable="false"
      />
      <div id="circle" style={circleStyling} />
      <div>
        <div id="lowerforkvalue" value={position[0]} style={lowerInputStyling}>
          {" "}
          {position[0]}
        </div>
        <div id="upperforkvalue" value={position[1]} style={upperInputStyling}>
          {" "}
          {position[1]}{" "}
        </div>
        {manualState ? (
          <ManualInput
            onKeyDown={(e) => handleManual(e)}
            onChange={handleManual}
            disableunderline="true"
            placeholder="ex: 0-50000 <enter>"
          />
        ) : null}

        <ControlLabel
          control={<StyledSwitch onChange={toggleManual} value="button" />}
          labelPlacement="start"
          label="Manual: "
        />
      </div>
    </>
  );
};
export default ForkInput;
