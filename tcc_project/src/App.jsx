import React from 'react'
import Menu from './Pages/Menu/Menu'
import Credits from './Pages/Credits/Credits'
import './App.css'
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
            <Routes>
              <Route exact path="/" element={<Menu/>} />
              <Route path="/creditos" element={<Credits/>} />
             
              <Route path="*" element= {<Menu/>}/>
            </Routes> 
          </Router>
    </div>
  )
}

export default App
