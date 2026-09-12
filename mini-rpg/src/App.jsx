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

function Home() {
  return (
    <section id="home" className="section home">
      <h1>⚔️ 6SSB Mini RPG</h1>
      <p>Build your team. Enter the battle.</p>
      <button>PLAY</button>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <h1>About Me</h1>
      <p>Welcome to my Mini RPG project.</p>

      <div className="profile-links">
        <a href="#" target="_blank">GitHub</a>
        <a href="#" target="_blank">Monkeytype</a>
        <a href="#" target="_blank">Other Profile</a>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h1>Contact Me</h1>

      <div className="contact-links">
        <a href="#">Instagram</a>
        <a href="#">Discord</a>
        <a href="mailto:example@gmail.com">Gmail</a>
        <a href="mailto:example@outlook.com">Outlook</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>Made by 6SSB</p>
    </footer>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App