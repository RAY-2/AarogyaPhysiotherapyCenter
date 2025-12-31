import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { bodyParts } from '../data/boneData'
import '../styles/BoneStructure.css'

const BoneStructure = () => {
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (partId) => {
    setImageErrors(prev => ({ ...prev, [partId]: true }))
  }

  return (
    <div className="bone-structure-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="page-title">Interactive Anatomy Learning</h1>
        <p className="page-subtitle">Click on any bone or muscle to explore detailed 3D models and information. Perfect for medical students studying physiotherapy.</p>

        <div className="anatomy-content">
          <div className="body-parts-grid">
            {bodyParts.map((part) => (
              <Link
                key={part.id}
                to={`/bone-structure/${part.id}`}
                className="body-part-card"
              >
                <div className="part-icon">
                  {part.image && !imageErrors[part.id] ? (
                    <img 
                      src={part.image} 
                      alt={part.name}
                      className="part-image"
                      onError={() => handleImageError(part.id)}
                    />
                  ) : (
                    <span>{part.category === 'Bone' ? '🦴' : '💪'}</span>
                  )}
                </div>
                <h3>{part.name}</h3>
                <span className="part-category">{part.category}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="instruction-box">
          <h3>How to Use</h3>
          <p>Click on any bone or muscle card above to view detailed 3D models, descriptions, functions, and physiotherapy relevance. This interactive tool helps medical students learn anatomy in a more engaging way.</p>
        </div>
      </div>
    </div>
  )
}

export default BoneStructure
