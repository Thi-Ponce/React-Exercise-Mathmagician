import React from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandler(event) {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
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
            <button type="button" className="btn-grey" onClick={this.clickHandler}>AC</button>
            <button type="button" className="btn-grey" onClick={this.clickHandler}>+/-</button>
            <button type="button" className="btn-grey" onClick={this.clickHandler}>%</button>
            <button type="button" className="btn-orange" onClick={this.clickHandler}>/</button>
            <button type="button" className="btn-grey" onClick={this.clickHandler}>7</button>
            <button type="button" className="btn-grey" onClick={this.clickHandler}>8</button>
            <button type="button" className="btn-grey" onClick={this.clickHandler}>9</button>
            <button type="button" className="btn-orange" onClick={this.clickHandler}>X</button>
            <button type="button" className="btn-grey" onClick={this.clickHandler}>4</button>
            <button type="button" className="btn-grey" onClick={this.clickHandler}>5</button>
            <button type="button" className="btn-grey" onClick={this.clickHandler}>6</button>
            <button type="button" className="btn-orange" onClick={this.clickHandler}>-</button>
            <button type="button" className="btn-grey" onClick={this.clickHandler}>1</button>
            <button type="button" className="btn-grey" onClick={this.clickHandler}>2</button>
            <button type="button" className="btn-grey" onClick={this.clickHandler}>3</button>
            <button type="button" className="btn-orange" onClick={this.clickHandler}>+</button>
            <button type="button" className="btn-grey btn-large" onClick={this.clickHandler}>0</button>
            <button type="button" className="btn-grey" onClick={this.clickHandler}>.</button>
            <button type="button" className="btn-orange" onClick={this.clickHandler}>=</button>
          </div>
        </Container>
      </div>
    );
  }
}
