import React from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculator() {
  return (
    <div>
      <Box m={15} />
      <Container maxWidth="xs">
        <div className="calculator-container">
          <div className="result-container">
            <h1 className="result">0</h1>
          </div>
          <button type="button" className="btn-grey">AC</button>
          <button type="button" className="btn-grey">+/-</button>
          <button type="button" className="btn-grey">%</button>
          <button type="button" className="btn-orange">/</button>
          <button type="button" className="btn-grey">7</button>
          <button type="button" className="btn-grey">8</button>
          <button type="button" className="btn-grey">9</button>
          <button type="button" className="btn-orange">X</button>
          <button type="button" className="btn-grey">4</button>
          <button type="button" className="btn-grey">5</button>
          <button type="button" className="btn-grey">6</button>
          <button type="button" className="btn-orange">-</button>
          <button type="button" className="btn-grey">1</button>
          <button type="button" className="btn-grey">2</button>
          <button type="button" className="btn-grey">3</button>
          <button type="button" className="btn-orange">+</button>
          <button type="button" className="btn-grey btn-large">0</button>
          <button type="button" className="btn-grey">.</button>
          <button type="button" className="btn-orange">=</button>
        </div>
      </Container>
    </div>
  );
}
