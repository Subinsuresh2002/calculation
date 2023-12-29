import React, { createContext, useContext, useState } from 'react';

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [result, setResult] = useState();

  const handleNumber1Change = (value) => {
    setNumber1(parseFloat(value) || 0);
  };

  const handleNumber2Change = (value) => {
    setNumber2(parseFloat(value) || 0);
  };

  const handleAddition = () => {
    setResult(number1 + number2);
  };

  const handleSubtraction = () => {
    setResult(number1 - number2);
  };

  const handleMultiplication = () => {
    setResult(number1 * number2);
  };

  const contextValue = {
    number1,
    number2,
    result,
    handleNumber1Change,
    handleNumber2Change,
    handleAddition,
    handleSubtraction,
    handleMultiplication,
  };

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  return useContext(CalculatorContext);
};

