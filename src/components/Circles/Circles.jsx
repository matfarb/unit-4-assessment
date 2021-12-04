import React from 'react';
import "./Circles.css";

const Circles = (props) => (
    <div className="Circles">
      <div className={props.selected === 'one' ? 'selected' : null}>1</div>
      <div className={props.selected === 'two' ? 'selected' : null}>2</div>
      <div className={props.selected === 'three' ? 'selected' : null}>3</div>
      <div className={props.selected === 'four' ? 'selected' : null}>4</div>
    </div>
  );
  
  export default Circles;