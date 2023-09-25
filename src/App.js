import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const decrementValue = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  const incrementValue = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h2>Counter: {count}</h2>
      <button onClick={decrementValue}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={incrementValue}>+</button>
    </div>
  );
}

export default App;
