import { useState } from 'react'
import './App.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  function generatefacts(){
    let facts = await fetch("https://meowfacts.herokuapp.com/");
    let result = await facts.json()
    let final
    console.log(result)
  }

  return (
    <>
      <h2> RandomCatFacts </h2>
      <button>generate</button>
    </>
  )
}

export default App;