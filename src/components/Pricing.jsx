import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Pricing.css'

const Pricing = () => {
  const phoneNumber = '9650908779'
  
  const handleCallClick = (e) => {
    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    if (isMobile) {
      // On mobile, use tel: link
      window.location.href = `tel:${phoneNumber}`
    } else {
      // On desktop/website, open WhatsApp
      e.preventDefault()
      window.open(`https://wa.me/91${phoneNumber}`, '_blank')
    }
  }

  return (
    <section className="section pricing-section">
      <div className="container">
        <h2 className="section-title">Our Pricing</h2>
        <div className="pricing-card">
          <div className="pricing-header">
            <h3>Physiotherapy charges</h3>
          </div>
          <div className="pricing-body">
            <div className="price-display">
              <span className="original-price">₹500</span>
              <span className="discount-text">-40% OFF</span>
            </div>
            <div className="current-price">₹300 per visit</div>
            <div className="free-consultation">
              <p>We provide free consultation</p>
            </div>
            <Link to="/contact" className="btn btn-green pricing-cta">
              Consult today
            </Link>
            <button 
              onClick={handleCallClick}
              className="btn btn-call pricing-call-btn"
            >
              Call - {phoneNumber}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
