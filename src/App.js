import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { useState } from 'react/cjs/react.development';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        Number: {count}
        <button onClick={ () => setCount(count + 1) } className='ml-2 text-white bg-pink-600 px-2 py-1 rounded'>Click here</button>
      </div>
    </div>
  );
}

export default App;
