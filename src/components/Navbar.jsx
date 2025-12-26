import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <h1>Aarogya Physiotherapy</h1>
          </Link>
          
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/bone-structure" className={isActive('/bone-structure')} onClick={() => setIsMenuOpen(false)}>Learn</Link></li>
            <li><Link to="/machines" className={isActive('/machines')} onClick={() => setIsMenuOpen(false)}>Machines</Link></li>
            <li><Link to="/gallery" className={isActive('/gallery')} onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/careers" className={isActive('/careers')} onClick={() => setIsMenuOpen(false)}>Careers</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
