import React from 'react'
import { useState } from 'react';
import './sizeSelector.css'


const Circle = ({ text, selectable, selectedCircle, onSelect }) => {
  const isSelected = selectedCircle === text;

  const handleClick = () => {
    if (selectable) {
      onSelect(text);
    }
  };

  const circleStyle = {
    cursor: selectable ? 'pointer' : 'default',
    backgroundColor: isSelected ? 'lightgray' : '#f1f1f1',
  };

  const textStyle = {
    fontWeight: isSelected ? 'bold' : 'normal',
  };

  return (
    <div className="circle-size" style={circleStyle} onClick={handleClick}>
      <span style={textStyle}>{text}</span>
    </div>
  );
};

const SizeSelector = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleCircleSelect = (text) => {
    setSelectedCircle(text);
    console.log(`Selected text: ${text}`);
    // Perform additional actions based on the selected text
  };

  return (
    <div className="size-selector">
      <Circle text="XS" selectable selectedCircle={selectedCircle} onSelect={handleCircleSelect} />
      <Circle text="S" selectable selectedCircle={selectedCircle} onSelect={handleCircleSelect} />
      <Circle text="M" selectable selectedCircle={selectedCircle} onSelect={handleCircleSelect} />
      <Circle text="L" selectable selectedCircle={selectedCircle} onSelect={handleCircleSelect} />
      <Circle text="XL" selectable selectedCircle={selectedCircle} onSelect={handleCircleSelect} />
      <Circle text="XXL" selectable selectedCircle={selectedCircle} onSelect={handleCircleSelect} />
    </div>
  );
};


export default SizeSelector;