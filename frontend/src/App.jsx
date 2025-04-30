import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename=''>
        <Routes>
          <Route  path='/' element={<Body/>}>
          

          </Route>

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
