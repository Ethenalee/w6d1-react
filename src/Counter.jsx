import React from 'react';

const Counter = ({ name, value, setValue, step }) => (
  <div>
    <h2>{name}</h2>
    <button onClick={() => setValue(value - step)}>-</button>
    <span>This is a counter! Its value is {value}</span>
    <button onClick={() => setValue(value + step)}>+</button>
  </div>
);

export default Counter;
