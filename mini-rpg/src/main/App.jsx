
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
      const url = `${import.meta.env.VITE_API_URL}/api/status/`
      console.log('Requesting backend:', url)

      const response = await fetch(url)
      const body = await response.text()

      console.log('HTTP status:', response.status)
      console.log('Response body:', body)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data = JSON.parse(body)
      console.log('Django backend connected:', data)
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
