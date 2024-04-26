import './App.css';
import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }} >
      <div className='fixed bottom-0 left-0 right-0 flex justify-center items-end'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-full text-white'>
          <button onClick={() => setColor("red")} className='outline-none px-4 rounded-full text-white py-1 shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-full text-white py-1 shadow-lg' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 rounded-full text-white py-1 shadow-lg' style={{ backgroundColor: "orange" }}>Orange</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 rounded-full text-white py-1 shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 rounded-full text-white py-1 shadow-lg' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("violet")} className='outline-none px-4 rounded-full text-white py-1 shadow-lg' style={{ backgroundColor: "violet" }}>violet</button>
        </div>
      </div>
    </div>
  );
}

export default App;
