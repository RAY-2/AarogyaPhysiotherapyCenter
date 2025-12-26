import React, { useState, useEffect } from 'react'
import '../styles/Gallery.css'

const ImageSlider = ({ images, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="image-slider">
      <div className="slider-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const Gallery = () => {
  // Placeholder images - replace with actual image paths
  const clinicImages = [
    '/images/general/clinic-1.jpg',
    '/images/general/clinic-2.jpg',
    '/images/general/clinic-3.jpg',
    '/images/general/clinic-4.jpg',
    '/images/general/clinic-5.jpg'
  ]

  const patientImages = [
    '/images/general/patient-1.jpg',
    '/images/general/patient-2.jpg',
    '/images/general/patient-3.jpg',
    '/images/general/patient-4.jpg',
    '/images/general/patient-5.jpg'
  ]

  const achievements = [
    {
      image: '/images/general/achievement-1.jpg',
      title: 'Best Physiotherapy Center 2023',
      description: 'Awarded for excellence in patient care and innovative treatment methods'
    },
    {
      image: '/images/general/achievement-2.jpg',
      title: 'Certified Healthcare Provider',
      description: 'Recognized by the National Healthcare Association for quality services'
    },
    {
      image: '/images/general/achievement-3.jpg',
      title: 'Patient Satisfaction Award',
      description: 'Achieved 98% patient satisfaction rate for three consecutive years'
    },
    {
      image: '/images/general/achievement-4.jpg',
      title: 'Innovation in Rehabilitation',
      description: 'Awarded for implementing cutting-edge technology in physiotherapy'
    }
  ]

  return (
    <div className="gallery">
      {/* Section 1: Our Clinic */}
      <section className="section gallery-section">
        <div className="container">
          <h2 className="section-title">Our Clinic</h2>
          <div className="slider-wrapper">
            <ImageSlider images={clinicImages} interval={2000} />
          </div>
        </div>
      </section>

      {/* Section 2: Our Doctors */}
      <section className="section doctors-section">
        <div className="container">
          <h2 className="section-title">Our Doctors</h2>
          <div className="doctors-grid">
            <div className="doctor-card">
              <div className="doctor-image-container">
                <img 
                  src="/images/general/doctor.jpg" 
                  alt="Doctor" 
                  className="doctor-image"
                />
              </div>
              <div className="doctor-info">
                <h3>Dr. [Doctor Name]</h3>
                <p className="doctor-role">Physiotherapist</p>
                <div className="doctor-qualifications">
                  <p><strong>Qualifications:</strong></p>
                  <ul>
                    <li>BPT (Bachelor of Physiotherapy)</li>
                    <li>MPT (Master of Physiotherapy)</li>
                    <li>10+ years of experience</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="doctor-card">
              <div className="doctor-image-container">
                <img 
                  src="/images/general/assistant.jpg" 
                  alt="Assistant" 
                  className="doctor-image"
                />
              </div>
              <div className="doctor-info">
                <h3>[Assistant Name]</h3>
                <p className="doctor-role">Physiotherapy Assistant</p>
                <div className="doctor-qualifications">
                  <p><strong>Qualifications:</strong></p>
                  <ul>
                    <li>Diploma in Physiotherapy</li>
                    <li>Certified Rehabilitation Assistant</li>
                    <li>5+ years of experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Patients */}
      <section className="section patients-section">
        <div className="container">
          <h2 className="section-title">Our Patients</h2>
          <div className="slider-wrapper">
            <ImageSlider images={patientImages} interval={2000} />
          </div>
        </div>
      </section>

      {/* Section 4: Hall of Fame */}
      <section className="section hall-of-fame-section">
        <div className="container">
          <h2 className="section-title">Hall of Fame</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-image-container">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="achievement-image"
                  />
                </div>
                <div className="achievement-info">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

