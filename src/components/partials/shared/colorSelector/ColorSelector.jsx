import React from 'react'
import './colorSelector.css'
import { useState } from 'react';

const Circle = ({ color, selectable, selectedCircle, onSelect }) => {
  const [isSelected, setSelected] = useState(false);
  const [chosenColor, setChosenColor] = useState("null");

  const handleClick = () => {
    if (selectable) {
      setSelected(!isSelected);
      onSelect(color);
    }
  };

  const circleStyle = {
    backgroundColor: color,
    cursor: selectable ? 'pointer' : 'default',
    opacity: isSelected ? 0.8 : 1,
  };

  return <div className="circle-color" style={circleStyle} onClick={handleClick}></div>;
};

const ColorSelector = ({setColor}) => {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleCircleSelect = (color) => {
    setSelectedCircle(color)
    setColor(color)
  };

  return (
    <div className="color-selector">
      <p>Color</p>
      <Circle color="red" selectable  onSelect={handleCircleSelect} />
      <Circle color="blue" selectable onSelect={handleCircleSelect} />
      <Circle color="yellow" selectable onSelect={handleCircleSelect} />
      <Circle color="green" selectable onSelect={handleCircleSelect} />
      <Circle color="black" selectable onSelect={handleCircleSelect} />
    </div>
  );
};




export default ColorSelector