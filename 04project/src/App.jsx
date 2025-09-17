import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='text-center text-3xl font-bold underline'>
        <div>
          <input type="text" placeholder='Password' className='border-2 border-black rounded-md p-2 m-2'/>
          <button className='border-2 border-black rounded-md p-2 m-2 bg-blue-500 text-white'>Copy</button>
        </div>
      </div>
    </>
  )
}

export default App
