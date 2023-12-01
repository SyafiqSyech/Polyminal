import React from 'react'
import shapes from "../shapes.json"
import ShapeCard from "../components/ShapeCard.tsx"

const Home = () => {
  return (
    <>
      <main className="container mx-auto py-8 px-8 mt-6">
        <div className="grid gridcont justify-center gap-6">
          {shapes.map((shape) => (
          <ShapeCard data={shape}/>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home