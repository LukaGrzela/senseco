import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    phone: '',
    message: '',
    industry: 'Military/Defense'
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation
    if (!formData.company.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      return
    }

    // Success
    setStatus('success')
    setFormData({
      company: '',
      email: '',
      phone: '',
      message: '',
      industry: 'Military/Defense'
    })

    setTimeout(() => setStatus(null), 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Ready to Deploy?</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="company">Company Name *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="industry">Industry</label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            >
              <option>Military/Defense</option>
              <option>Public Safety</option>
              <option>Industrial</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows="4"
              required
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Send
          </button>

          {status === 'success' && (
            <div className="form-message success">
              ✓ Message sent successfully! We'll be in touch soon.
            </div>
          )}
          {status === 'error' && (
            <div className="form-message error">
              ✗ Please fill in all required fields correctly.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
