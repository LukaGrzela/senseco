import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-main">
          <p>&copy; {currentYear} SENSECO. All rights reserved.</p>
        </div>
        <nav className="footer-links">
          <a href="#contact">Contact</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </nav>
      </div>
    </footer>
  )
}
