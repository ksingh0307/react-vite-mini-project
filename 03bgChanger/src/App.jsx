import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#000')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <footer className="p-4 bg-white rounded-lg shadow fixed w-full bottom-0 flex justify-center alighn-center">
        <button onClick={() => setColor('red')}
          className="btn btn-red btn-gap">Red</button>
        <button onClick={() => setColor('yellow')}
          className="btn btn-yellow btn-gap">Yellow</button>
        <button onClick={() => setColor('green')} className="btn btn-green btn-gap">Green</button>
        <button onClick={() => setColor('purple')} className="btn btn-purple">Purple</button>
      </footer>
      </div>
    </>
  )
}

export default App
