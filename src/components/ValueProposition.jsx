import './ValueProposition.css'

export default function ValueProposition() {
  const values = [
    {
      id: 1,
      title: 'On-Drone Processing',
      icon: '🚁',
      copy: 'AI runs directly on your ANAFI. Zero cloud, zero latency.'
    },
    {
      id: 2,
      title: 'Mission-Ready in 48 Hours',
      icon: '⏱️',
      copy: 'Modular plugins install directly. No hardware mods, no retraining.'
    },
    {
      id: 3,
      title: 'Enterprise-Grade Reliability',
      icon: '🛡️',
      copy: 'Edge-first architecture. No dependency on connectivity.'
    }
  ]

  return (
    <section className="value-proposition">
      <div className="container">
        <h2>Why SENSECO</h2>
        <div className="values-grid">
          {values.map((value) => (
            <div key={value.id} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
