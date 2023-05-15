import React from 'react'
import './colorSelector.css'
import { useState } from 'react';

const Circle = ({ color, selectable, onSelect }) => {
  const [isSelected, setSelected] = useState(false);

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

const ColorSelector = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleCircleSelect = (color) => {
    setSelectedCircle(color)
    // Perform additional actions based on the selected color
  };

  return (
    <div className="color-selector">
      <p>Color</p>
      <Circle color="red" selectable  onSelect={handleCircleSelect} />
      <Circle color="lightblue" selectable onSelect={handleCircleSelect} />
      <Circle color="yellow" selectable onSelect={handleCircleSelect} />
      <Circle color="darkblue" selectable onSelect={handleCircleSelect} />
      <Circle color="black" selectable onSelect={handleCircleSelect} />
    </div>
  );
};




export default ColorSelector