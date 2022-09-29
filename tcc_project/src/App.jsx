import React from 'react'
import Menu from './Pages/Menu/Menu'
import Game from './Pages/Game/Game'
import Credits from './Pages/Credits/Credits'
import Tutorial from './Pages/Tutorial/Tutorial'
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Plot from './Pages/Plot/Plot'

function App() {

  return (
    <div className="App">
      <Router>
            <Routes>
              <Route exact path="/" element={<Menu/>} />
              <Route path="/jogo" element={<Game/>} />
              <Route path="/tutorial" element={<Tutorial/>} />
              {/* <Route path="/jogo" element={<Game/>} /> */}
              <Route path="/creditos" element={<Credits/>} />
             <Route path="/historia" element={<Plot/>}/>
              <Route path="*" element= {<Menu/>}/>
            </Routes> 
          </Router>
    </div>
  )
}

export default App
