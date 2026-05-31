import './Hero.css'

export default function Hero() {
  const handleRequestDemo = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">On-Drone AI Plugins for the ANAFI UKR</h1>
          <p className="hero-subtitle">No cloud. No latency. No dependency.</p>
          <p className="hero-copy">One platform, mission-ready from day one</p>
          <button className="btn-primary" onClick={handleRequestDemo}>
            Request Demo
          </button>
        </div>
      </div>
    </section>
  )
}
