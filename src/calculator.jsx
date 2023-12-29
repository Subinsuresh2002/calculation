import React from 'react';
import { useCalculator } from './calculatorcontext';
import Addition from './addition';
import Subtraction from './substraction';
import Multiplication from './multiplication';

const Calculator = () => {
  const {
    number1,
    number2,
    result,
    handleNumber1Change,
    handleNumber2Change,
  } = useCalculator();

  return (
    <div>
      <div>
        <label>Enter 1st Number:</label>
        <input type="number" value={number1} onChange={(e) => handleNumber1Change(e.target.value)} />
      </div>
      <div>
        <label>Enter 2nd Number:</label>
        <input type="number" value={number2} onChange={(e) => handleNumber2Change(e.target.value)} />
      </div>
      <Addition />
      <Subtraction />
      <Multiplication />
      <div>
        <label>Result:</label>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Calculator;
