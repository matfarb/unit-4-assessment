import React from 'react';
import "./CircleSelector.css";

const CircleSelector = (props) => {
    
    const handleButtonChange = event => {
        props.handleCircleSelect(event.target.value)
    }

    if(props.selected);

    return (
        <div className="CircleSelector">
        <button
            className={props.selected === "one" ? "selected" : ""}
            value="one"
            onClick={handleButtonChange}
        >
            {props.selected === "one" ? "Circle 1 Selected" : "Select Circle 1"}
        </button>
        <button
            className={props.selected === "two" ? "selected" : ""}
            value="two"
            onClick={handleButtonChange}
        >
            {props.selected === "two" ? "Circle 2 Selected" : "Select Circle 2"}
        </button>
        <button
            className={props.selected === "three" ? "selected" : ""}
            value="three"
            onClick={handleButtonChange}
        >
                {props.selected === "three" ? "Circle 3 Selected" : "Select Circle 3"}
        </button>
        <button
            className={props.selected === "four" ? "selected" : ""}
            value="four"
            onClick={handleButtonChange}
        >
            {props.selected === "four" ? "Circle 4 Selected" : "Select Circle 4"}
        </button>
        </div>
    )
};
  
  export default CircleSelector;