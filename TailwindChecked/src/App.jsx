import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500'>Tailwind</h1>
      <Card name='HITESH' btnText='Click me!'/>
      <Card name='AKSHAY'btnText='Slide it!'/>
      <Card name="TONY" btnText="Don't hit!"/>
    </>
  )
}

export default App
