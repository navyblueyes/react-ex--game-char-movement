import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import useMovement from './useMovement';

export default function App() {
  const canvasRef = useRef(null);
  const elfDownRef = useRef(null);
  const elfUpRef = useRef(null);
  const elfLeftRef = useRef(null);
  const elfRightRef = useRef(null);
  const { x, y, direction, move } = useMovement();

  useEffect(() => {
    // First Step in handling Canvas -- get Context of Canvas
    const context = canvasRef.current.getContext('2d');
    
    // Second Step in handling Canvas -- adjusting size of Canvas
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, []);
  
  
  // Third Step -- draw on Canvas; use state x, y to move rect
  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    // Need to clear before drawing character again
    context.clearRect(0, 0, window.innerHeight, window.innerWidth);

    let theElfRef;
    if (direction === 'down') theElfRef = elfDownRef;
    if (direction === 'up') theElfRef = elfUpRef;
    if (direction === 'left') theElfRef = elfLeftRef;
    if (direction === 'right') theElfRef = elfRightRef;

    context.drawImage(theElfRef.current, x, y);
  }, [x, y]);


  return (
    <div className="app">
      <canvas ref={canvasRef} />

      <div className="arrows">
        <button onClick={() => move('up')}>Up</button>
        <button onClick={() => move('left')}>Left</button>
        <button onClick={() => move('down')}>Down</button>
        <button onClick={() => move('right')}>Right</button>
      </div>

      <div className="images">
        <img 
          ref={elfDownRef}
          src="https://i.imgur.com/JYUB0m3.png"
          alt="Down" 
        />
        <img 
          ref={elfUpRef}
          src="https://i.imgur.com/XSA2Oom.gif"
          alt="Up" 
        />
        <img 
          ref={elfRightRef}
          src="https://i.imgur.com/GEXD7bk.gif"
          alt="Right" 
        />
        <img 
          ref={elfLeftRef}
          src="https://i.imgur.com/4LGAZ8t.gif"
          alt="Left" 
        />
        
      </div>
    </div>
  );
}
