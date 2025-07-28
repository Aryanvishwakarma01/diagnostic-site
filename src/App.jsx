import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0 gap-5'>
      <button onClick={function(){setColor("red")}} className='bg-red-500 rounded px-5 text-white'>Red</button>
      <button onClick={function(){setColor("green")}} className='bg-green-500 rounded px-5 text-white'>Green</button>
      <button onClick={function(){setColor("blue")}} className='bg-blue-500 rounded px-5 text-white'>Blue</button>
      <button onClick={function(){setColor("cyan")}} className='bg-cyan-500 rounded px-5 text-white'>Cyan</button>
      <button onClick={function(){setColor("white")}} className='bg-white-1000 bg-white rounded px-5 text-black'>White</button>
      <button onClick={function(){setColor("pink")}} className='bg-pink-500 rounded px-5 text-white'>Pink</button>
      </div>
    </div>
  )
}

export default App
