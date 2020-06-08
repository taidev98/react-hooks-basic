import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

const getRandomColor = () => {
  const COLOR_LIST = ["deeppink", "blue", "yellow", "red", "orange"];
  const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);
  return COLOR_LIST[randomIndex];
};

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initialColor = localStorage.getItem("color") || "deeppink";
    return initialColor;
  });
  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("color", newColor);
  };
  return (
    <div>
      <h2
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={handleBoxClick}
      >
        ColorBox
      </h2>
    </div>
  );
}

export default ColorBox;
