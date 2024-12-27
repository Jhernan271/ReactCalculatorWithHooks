import React, { useState, useRef, useEffect } from 'react';
import * as math from 'mathjs';

export default function Calculator() {
  const inputRef = useRef(null);
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (inputRef.current) {
        inputRef.current.focus()
    }
   }, []);


  const handleInputChange = (e) => {
    setExpression(e.target.value);
  };

  const handleKeyPress = (e) => { 
    if (e.key === 'Enter') { 
      calculateResult(); } 
    };

  const calculateResult = () => {
    try {
      setResult(math.evaluate(expression));
    } catch (error) {
      setResult('Error');
    }
  };

  const resetInput = () => {
     setExpression('');
     if (inputRef.current) {
      inputRef.current.focus();
     }
    };


  const resetResult = () => {
    setResult('');
   };

  return (
    <div className = "Calculator">
      <input type="text" 
        value={expression}
        ref={inputRef} 
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={calculateResult}>Calculate</button>
      <button onClick={resetInput}>Reset Input</button>
      <button onClick={resetResult}>Reset Result</button>
      <p>= {result}</p>
    </div>
    );
}
