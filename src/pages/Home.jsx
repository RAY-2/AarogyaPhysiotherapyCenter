import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import AppointmentForm from '../components/AppointmentForm'

const PainAreaCard = ({ area }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <Link 
      to={`/exercises/${area.id}`}
      className="pain-card"
    >
      <div className="pain-image-container">
        {!imageError ? (
          <img 
            src={area.image} 
            alt={area.name}
            className="pain-image"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="pain-icon-placeholder">
            <div className="pain-icon">🦴</div>
          </div>
        )}
      </div>
      <h3>{area.name}</h3>
    </Link>
  )
}

const Home = () => {
  const painAreas = [
    { id: 'neck', name: 'Neck Pain', image: '/images/pain-areas/neck.png' },
    { id: 'back', name: 'Back Pain', image: '/images/pain-areas/back.png' },
    { id: 'shoulder', name: 'Shoulder Pain', image: '/images/pain-areas/shoulder.png' },
    { id: 'knee', name: 'Knee Pain', image: '/images/pain-areas/knee.png' },
    { id: 'wrist', name: 'Wrist Pain', image: '/images/pain-areas/wrist.png' },
    { id: 'ankle', name: 'Ankle Pain', image: '/images/pain-areas/ankle.png' },
    { id: 'hip', name: 'Hip Pain', image: '/images/pain-areas/hip.png' },
    { id: 'elbow', name: 'Elbow Pain', image: '/images/pain-areas/elbow.png' }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Aarogya Physiotherapy Center</h1>
            <p className="hero-subtitle">Your path to recovery, wellness, and a pain-free life</p>
            <Link to="/contact" className="btn btn-green">Consult Today - Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* Pain Areas Section */}
      <section className="section pain-areas">
        <div className="container">
          <h2 className="section-title">Select Your Area of Pain</h2>
          <p className="section-subtitle">Click on any area to view exercises with 3D models</p>
          <div className="pain-grid">
            {painAreas.map((area) => (
              <PainAreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏃</div>
              <h3>Exercise Programs</h3>
              <p>Interactive 3D exercise models for pain relief and rehabilitation</p>
              <Link to="/" className="feature-link">Explore Exercises →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Medical Learning</h3>
              <p>Interactive bone and muscle structure visualization for medical students</p>
              <Link to="/bone-structure" className="feature-link">Learn Anatomy →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>Advanced Machines</h3>
              <p>State-of-the-art physiotherapy equipment for comprehensive treatment</p>
              <Link to="/machines" className="feature-link">View Machines →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* Appointment Booking */}
      <section className="section appointment-section">
        <div className="container">
          <h2 className="section-title">Book Your Appointment</h2>
          <AppointmentForm />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  )
}

export default Home
