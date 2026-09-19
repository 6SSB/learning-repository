import { useState } from 'react'
import './setup.css'

function Setup({ onStartBattle }) {

  const [players, setPlayers] = useState([
    {
      id: crypto.randomUUID(),
      name: 'Player 1',
      type: 'player',
      hp: 100,
      maxHp: 100
    }
  ])

  const [bots, setBots] = useState([
    {
      id: crypto.randomUUID(),
      name: 'Bot 1',
      type: 'bot',
      hp: 100,
      maxHp: 100
    }
  ])


  function addPlayer() {

    if (players.length >= 6) return

    const newPlayer = {
      id: crypto.randomUUID(),
      name: `Player ${players.length + 1}`,
      type: 'player',
      hp: 100,
      maxHp: 100
    }

    setPlayers([...players, newPlayer])
  }


  function removePlayer() {

    if (players.length <= 1) return

    setPlayers(players.slice(0, -1))
  }


  function addBot() {

    if (bots.length >= 6) return

    const newBot = {
      id: crypto.randomUUID(),
      name: `Bot ${bots.length + 1}`,
      type: 'bot',
      hp: 100,
      maxHp: 100
    }

    setBots([...bots, newBot])
  }


  function removeBot() {

    if (bots.length <= 1) return

    setBots(bots.slice(0, -1))
  }


  return (
    <section className="game-setup">

      <div className="setup-container">

        <div className="setup-header">
          <h1>GAME SETUP</h1>
          <p>CUSTOMIZE YOUR TEAM AND PREPARE FOR BATTLE</p>
        </div>


        <div className="teams">


          {/* PLAYERS */}

          <div className="team-panel players-panel">

            <div className="team-header">

              <h2>PLAYERS</h2>

              <div className="team-counter">

                <button onClick={removePlayer}>
                  −
                </button>

                <span>
                  {players.length}
                </span>

                <button onClick={addPlayer}>
                  +
                </button>

              </div>

            </div>


            <div className="character-list">

              {players.map((player) => (

                <div
                  className="character"
                  key={player.id}
                >

                  <span className="number">
                    {players.indexOf(player) + 1}
                  </span>

                  <span className="character-name">
                    {player.name}
                  </span>

                  <button className="edit-name">
                    ✎
                  </button>

                </div>

              ))}

            </div>

          </div>


          {/* BOTS */}

          <div className="team-panel bots-panel">

            <div className="team-header">

              <h2>BOTS</h2>

              <div className="team-counter">

                <button onClick={removeBot}>
                  −
                </button>

                <span>
                  {bots.length}
                </span>

                <button onClick={addBot}>
                  +
                </button>

              </div>

            </div>


            <div className="character-list">

              {bots.map((bot) => (

                <div
                  className="character"
                  key={bot.id}
                >

                  <span className="number">
                    {bots.indexOf(bot) + 1}
                  </span>

                  <span className="character-name">
                    {bot.name}
                  </span>

                  <button className="edit-name">
                    ✎
                  </button>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* START BATTLE */}

        <button
          className="start-battle"
          onClick={onStartBattle}
        >
          ⚔ START BATTLE
        </button>

      </div>

    </section>
  )
}

export default Setup