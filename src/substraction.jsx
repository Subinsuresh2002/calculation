import React from 'react';
import { useCalculator } from './calculatorcontext';

const Subtraction = () => {
  const { handleSubtraction } = useCalculator();

  return (
    <button onClick={handleSubtraction}>Subtract</button>
  );
};

export default Subtraction;
