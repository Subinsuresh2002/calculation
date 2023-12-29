import React from 'react';
import { useCalculator } from './calculatorcontext';

const Multiplication = () => {
  const { handleMultiplication } = useCalculator();

  return (
    <button onClick={handleMultiplication}>Multiply</button>
  );
};

export default Multiplication;
