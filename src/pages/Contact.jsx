import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Contact.css'

const Contact = () => {
  const whatsappNumber = '919650908779' // 9650908779 with country code
  const phoneNumber1 = '9650908779'
  const phoneNumber2 = '9310473013'
  const email = 'aarogyaphysiotherapycenter@gmail.com'
  const address = 'Aarogya Physiotherapy Center, J32, Vatika road, near Baba Kabab, behind Elite gym, sector 82, Gurugram, Haryana - 122004'

  return (
    <div className="contact-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">Get in touch with us for appointments, consultations, or any queries</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Address</h3>
              <p>{address}</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <a href={`mailto:${email}`}>{email}</a>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <div className="phone-numbers">
                <div className="phone-item">
                  <a href={`tel:${phoneNumber1}`} className="phone-link">{phoneNumber1}</a>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="whatsapp-link-small">
                    WhatsApp
                  </a>
                </div>
                <div className="phone-item">
                  <a href={`tel:${phoneNumber2}`} className="phone-link">{phoneNumber2}</a>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3>Working Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Every day</span>
                  <span>7:00 AM - 11:00 AM & 5:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h2>Find Us</h2>
            <div className="map-container">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps?q=28.39060,76.96979&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
