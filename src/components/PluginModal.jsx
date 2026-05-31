import { useEffect } from 'react'
import './PluginModal.css'

export default function PluginModal({ plugin, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <h2>{plugin.name}</h2>

        <p className="modal-description">{plugin.longDescription}</p>

        <h3>Use Cases</h3>
        <ul className="use-cases">
          {plugin.useCases.map((useCase, idx) => (
            <li key={idx}>{useCase}</li>
          ))}
        </ul>

        <div className="modal-industries">
          {plugin.industries.map((industry) => (
            <span key={industry} className="industry-badge">{industry}</span>
          ))}
        </div>

        <button className="btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
          Request More Info
        </button>
      </div>
    </div>
  )
}
