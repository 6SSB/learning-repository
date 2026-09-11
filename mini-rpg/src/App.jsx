import './App.css'

function CharacterCard() {
  return (
    <div className="character">
      <h2>6SSB</h2>
      <p>HP: 100 / 100</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>⚔️ 6SSB Mini RPG</h1>

      <CharacterCard />
    </div>
  )
}

export default App