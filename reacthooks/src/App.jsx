// rendering component - component name should start with capital letter
import UseEffectComponent from './hooks/useEffect/useEffect-component';
import './App.css'
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);

  return (
   <>
   <div className='App'>
    <h1 className='text-center'>React Hooks</h1>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10' onClick={() => setToggle(!toggle)}>Toggle</button>
    <div>
      {toggle ? <UseEffectComponent /> : "Component Deleted"}
    </div>
   </div>
   </>
  )
}

export default App
