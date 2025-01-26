import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import Addblog from './Components/Addblog'
import {Route,Routes} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
    <Route path={'/'} element={<Dashboard />} />
    <Route path={'/addblog'} element={<Addblog />} />
    </Routes>
    </>
  )
}

export default App
