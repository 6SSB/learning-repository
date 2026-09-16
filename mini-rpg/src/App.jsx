import { useState } from 'react'
import './App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">6SSB</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact Me</a>
      </div>
    </nav>
  )
}

function Home({ onPlay }) {
  return (
    <section id="home" className="section home">
      <h1>⚔️ 6SSB Mini RPG</h1>
      <p>Build your team. Enter the battle.</p>
      <button onClick={onPlay}>PLAY</button>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <h1>About Me</h1>

      <div className="about-content">
        <div className="about-text">
          <p>Hi, I'm Mohammed Sabith, a young developer who goes by the nickname 6SSB.</p>
          <p>I’m passionate about programming, web development, AI, and technology, and I enjoy turning my ideas into real projects.</p>
          <p>Right now, I’m learning React, JavaScript, Python, Django, and AI engineering while building projects like this Mini RPG.</p>
          <p>My goal is to keep improving my skills, build useful and creative software, and become a professional developer.</p>
        </div>

        <div className="profile-links">
          <a href="https://github.com/6SSB" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://monkeytype.com/profile/-6SSB" target="_blank" rel="noopener noreferrer"> 
            Monkeytype
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h1>Contact Me</h1>

      <div className="contact-links">
        <a href="https://www.instagram.com/__.sa.bii.th_7/"  target="_blank"  rel="noopener noreferrer" >
          Instagram
        </a> 
        <a href="https://discord.gg/AbCd1234" target="_blank"  rel="noopener noreferrer" >
          Discord
        </a>
        <a href="mailto:iam6ssb@gmail.com">Gmail</a>
        <a href="mailto:iam6ssb123@outlook.com">Outlook</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>⚔️ 6SSB Mini RPG</h2>
          <p>A turn-based RPG built with React.</p>
        </div>

        <div className="footer-column">
          <h3>GAME</h3>
          <a href="#home">Play</a>
          <a href="#home">About the Game</a>
          <a href="#home">Updates</a>
        </div>

        <div className="footer-column">
          <h3>DEVELOPER</h3>
          <a href="https://github.com/6SSB" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://monkeytype.com/profile/-6SSB" target="_blank" rel="noopener noreferrer">
            Monkeytype
          </a>
          <a href="#about">About 6SSB</a>
        </div>

        <div className="footer-column">
          <h3>COMMUNITY</h3>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          <a
            href="https://www.instagram.com/__.sa.bii.th_7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>

        <div className="footer-column">
          <h3>LEGAL</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Licenses & Credits</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Made with ⚔️ by 6SSB</p>
        <p>© 2026 6SSB. All rights reserved.</p>
        <p>This website is still under construction.</p>
      </div>

    </footer>
  )
}

function GameSetup() {
  return (
    <section className="game-setup">
      <div className="setup-container">
        <h1>GAME SETUP</h1>
        <p>Build your team and prepare for battle.</p>

        <div className="setup-content">
          <div className="setup-box">
            <h2>PLAYERS</h2>
            <p>Choose how many players will join the battle.</p>
          </div>

          <div className="setup-box">
            <h2>BOTS</h2>
            <p>Choose how many bots will join the battle.</p>
          </div>
        </div>

        <button className="start-battle">START BATTLE</button>
      </div>
    </section>
  )
}

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [players, setPlayers] = useState(1)
  const [bots, setBots] = useState(1)

  if (gameStarted === false) {
    return (
      <div>
        <Navbar />
        <Home onPlay={() => setGameStarted(true)} />
        <About />
        <Contact />
        <Footer />
      </div>
    )
  } else {
    return (
      <div>
        <Navbar />
        <GameSetup />
      </div>
    )
  }
}

export default App