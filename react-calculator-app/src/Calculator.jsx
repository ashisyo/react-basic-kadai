import React, { useState } from "react";

const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', 'C', '=', '+',
];

export function Calculator() {
  const [display, setDisplay] = useState('');

  const validExpression = /^(\d+)([+\-*/])(\d+)$/;

  const calculate = (expression) => {
    const match = expression.match(validExpression);
    if (match) {
      const num1 = Number(match[1]);
      const operator = match[2];
      const num2 = Number(match[3]);
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          if (num2 === 0) {
            return '0で割ることはできません';
          } else {
            return num1 / num2;
          }
      }
    } else {
      return 'エラー';
    }
  };

  const handleClick = (btn) => {
    switch (btn) {
      case "C":
        setDisplay('');
        break;
      case "=":
        setDisplay(calculate(display));
        break;
      default:
        setDisplay(prevDisplay => prevDisplay + btn);
    }
  };

  return (
    <div className="calculator-container">
      <h2>電卓アプリ</h2>
      <div className="display">{display ? display : '0'}</div>
      <div className="button-grid">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}