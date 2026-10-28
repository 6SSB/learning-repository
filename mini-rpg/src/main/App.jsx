
import { useState, useEffect } from 'react'
import Home from '../home/home.jsx'
import Setup from '../setup/setup.jsx'
import Battle from '../battle/battle.jsx'
import './App.css'

function App() {
  const [screen, setScreen] = useState('home')

  useEffect(() => {
    async function checkBackend() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/status/`
        )

        const data = await response.json()
        console.log('Django backend:', data)
      } catch (error) {
        console.error('Backend connection failed:', error)
      }
    }

    checkBackend()
  }, [])

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
