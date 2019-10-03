import React, { useState } from 'react';

const useCount = (initialValue = 0, interval = 1, limit = 100) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    if (count < limit) setCount(count + interval);
  };
  const decrement = () => {
    if (count > -limit) setCount(count - interval)
  };
  const reset = () => {
    setCount(0);
  }
  return [count, increment, decrement, reset];
};

export default function Counter({ user, countLimit }) {
  const [count, increment, decrement, reset] = useCount(0, 1, countLimit);

  return (
    <div style={{ borderColor: 'red' }} className='component'>
      <h5>{user}&apos;s count:</h5>
      <div>The count is {count}</div>
      <button data-testid='incButton' onClick={increment}>increment</button>
      <button data-testid='decButton' onClick={decrement}>decrement</button>
      <button data-testid='resetButton' onClick={reset}>reset</button>
      {
        count === countLimit &&
        <h5 data-testid='maxWarning' style={{ color: 'red' }}>That's as high as {user}'s count will go</h5>
      }
      {
        count === -countLimit &&
        <h5 data-testid='minWarning' style={{ color: 'red' }}>That's as low as {user}'s count will go</h5>
      }
    </div>
  );
}
