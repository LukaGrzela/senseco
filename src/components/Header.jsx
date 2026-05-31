import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <h1 className="logo-text">SENSECO</h1>
        </div>
        <nav className="nav">
          <a href="#products">Products</a>
          <a href="#demo">Demo</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
