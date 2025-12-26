import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/BoneStructure.css'

const DetailImage = ({ image, alt }) => {
  const [imageError, setImageError] = useState(false)
  
  if (imageError || !image) return null
  
  return (
    <div className="detail-image-section">
      <img 
        src={image} 
        alt={alt}
        className="detail-image"
        onError={() => setImageError(true)}
      />
    </div>
  )
}

const BoneStructure = () => {
  const [selectedPart, setSelectedPart] = useState(null)
  const baseUrl = import.meta.env.BASE_URL

  const bodyParts = [
    {
      id: 'skull',
      name: 'Skull',
      category: 'Bone',
      description: 'The skull is a bony structure that forms the head. It protects the brain and provides structure to the face.',
      function: 'Protects the brain, houses sensory organs, provides attachment points for muscles',
      image: `${baseUrl}images/bones/skull.png`
    },
    {
      id: 'spine',
      name: 'Spine (Vertebral Column)',
      category: 'Bone',
      description: 'The spine consists of 33 vertebrae that protect the spinal cord and provide structural support.',
      function: 'Supports the body, protects spinal cord, enables movement and flexibility',
      image: `${baseUrl}images/bones/spine.png`
    },
    {
      id: 'ribcage',
      name: 'Ribcage',
      category: 'Bone',
      description: 'The ribcage consists of 12 pairs of ribs connected to the thoracic vertebrae.',
      function: 'Protects heart and lungs, assists in breathing, provides structural support',
      image: `${baseUrl}images/bones/ribcage.png`
    },
    {
      id: 'humerus',
      name: 'Humerus',
      category: 'Bone',
      description: 'The humerus is the long bone in the upper arm, extending from shoulder to elbow.',
      function: 'Connects shoulder to elbow, enables arm movement, provides muscle attachment',
      image: `${baseUrl}images/bones/humerus.png`
    },
    {
      id: 'femur',
      name: 'Femur',
      category: 'Bone',
      description: 'The femur is the longest and strongest bone in the body, located in the thigh.',
      function: 'Supports body weight, enables walking and running, provides muscle attachment',
      image: `${baseUrl}images/bones/femur.png`
    },
    {
      id: 'tibia',
      name: 'Tibia',
      category: 'Bone',
      description: 'The tibia is the larger of the two bones in the lower leg, also known as the shinbone.',
      function: 'Bears body weight, connects knee to ankle, provides stability',
      image: `${baseUrl}images/bones/tibia.png`
    },
    {
      id: 'biceps',
      name: 'Biceps Brachii',
      category: 'Muscle',
      description: 'The biceps is a two-headed muscle located on the front of the upper arm.',
      function: 'Flexes elbow, supinates forearm, assists in shoulder flexion',
      image: `${baseUrl}images/bones/biceps.png`
    },
    {
      id: 'triceps',
      name: 'Triceps Brachii',
      category: 'Muscle',
      description: 'The triceps is a three-headed muscle on the back of the upper arm.',
      function: 'Extends elbow, assists in shoulder extension and adduction',
      image: `${baseUrl}images/bones/triceps.png`
    },
    {
      id: 'quadriceps',
      name: 'Quadriceps',
      category: 'Muscle',
      description: 'The quadriceps is a group of four muscles on the front of the thigh.',
      function: 'Extends knee, flexes hip, stabilizes knee joint',
      image: `${baseUrl}images/bones/quadriceps.png`
    },
    {
      id: 'hamstrings',
      name: 'Hamstrings',
      category: 'Muscle',
      description: 'The hamstrings are a group of three muscles on the back of the thigh.',
      function: 'Flexes knee, extends hip, stabilizes knee and hip joints',
      image: `${baseUrl}images/bones/hamstrings.png`
    },
    {
      id: 'deltoid',
      name: 'Deltoid',
      category: 'Muscle',
      description: 'The deltoid is a large triangular muscle covering the shoulder joint.',
      function: 'Abducts, flexes, extends, and rotates the arm at shoulder',
      image: `${baseUrl}images/bones/deltoid.png`
    },
    {
      id: 'latissimus',
      name: 'Latissimus Dorsi',
      category: 'Muscle',
      description: 'The latissimus dorsi is a large, flat muscle on the back.',
      function: 'Extends, adducts, and medially rotates the arm, assists in breathing',
      image: `${baseUrl}images/bones/latissimus.png`
    }
  ]

  const selectedData = bodyParts.find(part => part.id === selectedPart)

  return (
    <div className="bone-structure-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="page-title">Interactive Anatomy Learning</h1>
        <p className="page-subtitle">Select any bone or muscle to learn more about it. Perfect for medical students studying physiotherapy.</p>

        <div className="anatomy-content">
          <div className="body-parts-grid">
            {bodyParts.map((part) => (
              <button
                key={part.id}
                className={`body-part-card ${selectedPart === part.id ? 'active' : ''}`}
                onClick={() => setSelectedPart(part.id)}
              >
                <div className="part-icon">
                  {part.category === 'Bone' ? '🦴' : '💪'}
                </div>
                <h3>{part.name}</h3>
                <span className="part-category">{part.category}</span>
              </button>
            ))}
          </div>

          {selectedData && (
            <div className="detail-panel">
              <div className="detail-header">
                <div className="detail-icon">
                  {selectedData.category === 'Bone' ? '🦴' : '💪'}
                </div>
                <div>
                  <h2>{selectedData.name}</h2>
                  <span className="detail-category">{selectedData.category}</span>
                </div>
              </div>
              <div className="detail-body">
                <DetailImage image={selectedData.image} alt={selectedData.name} />
                <div className="detail-section">
                  <h3>Description</h3>
                  <p>{selectedData.description}</p>
                </div>
                <div className="detail-section">
                  <h3>Function</h3>
                  <p>{selectedData.function}</p>
                </div>
                <div className="detail-section">
                  <h3>Physiotherapy Relevance</h3>
                  <p>Understanding the {selectedData.name.toLowerCase()} is crucial for physiotherapy. Injuries, conditions, and treatment approaches are directly related to its structure and function. Proper assessment and rehabilitation techniques require in-depth knowledge of this anatomical structure.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {!selectedPart && (
          <div className="instruction-box">
            <h3>How to Use</h3>
            <p>Click on any bone or muscle card above to view detailed information including description, function, and physiotherapy relevance. This interactive tool helps medical students learn anatomy in a more engaging way.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BoneStructure
