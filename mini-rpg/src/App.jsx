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
      <p>Made by 6SSB</p>
      <p>This website is still under construction.</p>
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