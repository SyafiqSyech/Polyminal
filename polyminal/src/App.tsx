// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import shapes from "./shapes.json"
import ShapeCard from "./components/ShapeCard.tsx"
import dataShape from "./shapes.json"
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  console.log("halo testing");

  return (
    <>
      <main className="container mx-auto py-38 px-8">
        <div className="grid lg:grid-cols-5 gap-6">
          {shapes.map((shape) => (
          //   <div className="shadow-lg rounded-lg justify-item-center p-5" key={shape.id}>
          //   <img className="border border-black p-5" src="./img/cone.jpeg" alt="" />
          //   <h5 className="p-3 text-xl font-bold flex justify-center">{shape.name}</h5>
          // </div>
          <ShapeCard />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
