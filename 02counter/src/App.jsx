// UI updation controlled by React State
import { useState } from 'react'


import './App.css'
import Home from './pages/home';

function App() {
  let [count, setCountValue] = useState(5);

  const addValue = () => {
    if(count < 20) setCountValue(count + 1);
  };
  const removeValue = () => {
    if(count > 0) setCountValue(count - 1);
  };

  return (
    < div className="App" >
      <Home />
      <h1>Welcome to the React + Vite</h1>    

      <h2>Counter value : {count}</h2>

      <button onClick={addValue}>Increment: {count}</button> 
      <button onClick={removeValue}>Decrement: {count}</button>

      <footer>Copyright @ {count}</footer>
    </div >
  )
}

export default App
