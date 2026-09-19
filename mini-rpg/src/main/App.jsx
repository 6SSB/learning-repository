import { useState } from 'react'
import Home from '../home/home.jsx'
import Setup from '../setup/setup.jsx'
import Battle from '../battle/battle.jsx'
import './App.css'

function App() {
  const [screen, setScreen] = useState('home')

  return (
    <div>
      {screen === 'home' && (
        <Home onPlay={() => setScreen('setup')} />
      )}

      {screen === 'setup' && (
        <Setup onStartBattle={() => setScreen('battle')} />
      )}

      {screen === 'battle' && (
        <Battle />
      )}
    </div>
  )
}

export default App