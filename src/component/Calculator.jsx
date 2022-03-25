/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [toNeOp, setToNeOp] = useState({ total: null, next: null, operation: null });

  const clickHandler = (event) => {
    setToNeOp((prev) => (calculate(prev, event.target.textContent)));
  };

  const { total, next, operation } = toNeOp;

  return (
    <div className="wrapper">
      <div className="title">
        <h1>Let's do some Math</h1>
      </div>
      <div className="big-container">
        <Box m={15} />
        <Container maxWidth="xs">
          <div className="calculator-container">
            <div className="result-container">
              <h1 className="result">
                {total || ''}
                {operation || ''}
                {next || ''}
              </h1>
            </div>
            <button type="button" className="btn-grey" onClick={clickHandler}>AC</button>
            <button type="button" className="btn-grey" onClick={clickHandler}>+/-</button>
            <button type="button" className="btn-grey" onClick={clickHandler}>%</button>
            <button type="button" className="btn-orange" onClick={clickHandler}>÷</button>
            <button type="button" className="btn-grey" onClick={clickHandler}>7</button>
            <button type="button" className="btn-grey" onClick={clickHandler}>8</button>
            <button type="button" className="btn-grey" onClick={clickHandler}>9</button>
            <button type="button" className="btn-orange" onClick={clickHandler}>x</button>
            <button type="button" className="btn-grey" onClick={clickHandler}>4</button>
            <button type="button" className="btn-grey" onClick={clickHandler}>5</button>
            <button type="button" className="btn-grey" onClick={clickHandler}>6</button>
            <button type="button" className="btn-orange" onClick={clickHandler}>-</button>
            <button type="button" className="btn-grey" onClick={clickHandler}>1</button>
            <button type="button" className="btn-grey" onClick={clickHandler}>2</button>
            <button type="button" className="btn-grey" onClick={clickHandler}>3</button>
            <button type="button" className="btn-orange" onClick={clickHandler}>+</button>
            <button type="button" className="btn-grey btn-large" onClick={clickHandler}>0</button>
            <button type="button" className="btn-grey" onClick={clickHandler}>.</button>
            <button type="button" className="btn-orange" onClick={clickHandler}>=</button>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Calculator;
