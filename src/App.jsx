import { useState } from 'react'
import EdPackMain from './pages/EdPackMain'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar /> 
     <EdPackMain />
     
    </>
  )
}

export default App
