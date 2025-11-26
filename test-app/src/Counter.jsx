import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2 className='count'>Счетчик: {count}</h2>
      <div className="counter-buttons">
        <button onClick={decrement} className='plusmin'>-1</button>
        <button onClick={reset} className="throw-off">Сбросить</button>
        <button onClick={increment} className='plusmin'>+1</button>
      </div>
      <p className='num-now'>Текущее значение: <strong>{count}</strong></p>
    </div>
  );
}

export default Counter;