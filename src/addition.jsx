import React from 'react';
import { useCalculator } from './calculatorcontext';

const Addition = () => {
  const { handleAddition } = useCalculator();

  return (
    <button onClick={handleAddition}>Add</button>
  );
};

export default Addition;
