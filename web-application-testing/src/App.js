import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard.js'
import Display from './components/Display.js'

function App() {
  
  const [ strikes, setStrikes ] = useState(0);
  const [ balls, setBalls ] = useState(0);
  
  return (
    <div>
    <Dashboard strikes={strikes} setStrikes={setStrikes} balls={balls} setBalls = {setBalls} />
    <Display strikes = {strikes} balls = {balls} />
    </div>
    )
}

export default App;
