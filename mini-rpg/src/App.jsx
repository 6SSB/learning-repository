import './App.css'

function App() {
  return (
    <div className="game">
      <h1>⚔️ 6SSB RPG</h1>

      <div className="battle">
        <div className="character player">
          <div className="avatar">🧙</div>
          <h2>6SSB</h2>
          <div className="health">
            <div className="health-bar player-health"></div>
          </div>
          <p>HP: 100 / 100</p>
        </div>

        <div className="vs">VS</div>

        <div className="character enemy">
          <div className="avatar">👹</div>
          <h2>Goblin</h2>
          <div className="health">
            <div className="health-bar enemy-health"></div>
          </div>
          <p>HP: 80 / 80</p>
        </div>
      </div>

      <div className="actions">
        <button>⚔️ Attack</button>
        <button>❤️ Heal</button>
      </div>

      <div className="battle-log">
        <h3>Battle Log</h3>
        <p>The battle begins...</p>
      </div>
    </div>
  )
}

export default App