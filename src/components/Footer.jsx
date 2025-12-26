import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  const whatsappNumber = 'YOUR_WHATSAPP_NUMBER' // Replace with actual number
  const youtubeChannel = 'YOUR_YOUTUBE_CHANNEL' // Replace with actual channel

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Aarogya Physiotherapy Center</h3>
            <p>Your path to recovery and wellness</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/bone-structure">Learn Anatomy</Link></li>
              <li><Link to="/machines">Our Machines</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link whatsapp"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
              <a 
                href={`https://youtube.com/${youtubeChannel}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link youtube"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Aarogya Physiotherapy Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
