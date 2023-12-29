import React from 'react';
import Calculator from './calculator';
import { CalculatorProvider } from './calculatorcontext';

const App = () => {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
};

export default App;

