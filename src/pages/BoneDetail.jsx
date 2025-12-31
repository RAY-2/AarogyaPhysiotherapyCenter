import React, { Suspense, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import BoneModel from '../components/BoneModel'
import ErrorBoundary from '../components/ErrorBoundary'
import { getBoneById } from '../data/boneData'
import '../styles/BoneDetail.css'

const BoneDetail = () => {
  const { boneId } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [showCanvas, setShowCanvas] = useState(false)
  const boneData = getBoneById(boneId)

  useEffect(() => {
    console.log('BoneDetail rendered with boneId:', boneId)
    console.log('Bone data found:', boneData)
    setIsLoading(false)
    setShowCanvas(false)
    
    // Show loading for minimum 1 second, then show canvas
    // This ensures users see the loading spinner
    const timer = setTimeout(() => {
      setShowCanvas(true)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [boneId, boneData])

  if (isLoading) {
    return (
      <div className="bone-detail-page">
        <div className="container">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (!boneData) {
    return (
      <div className="bone-detail-page">
        <div className="container">
          <Link to="/bone-structure" className="back-link">← Back to Bone Structure</Link>
          <h1 className="page-title">Bone Not Found</h1>
          <p>The bone you're looking for doesn't exist. ID: {boneId}</p>
          <p>Available bones: skull, spine, ribcage, humerus, femur, tibia</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bone-detail-page">
      <div className="container">
        <Link to="/bone-structure" className="back-link">← Back to Bone Structure</Link>
        <h1 className="page-title">{boneData.name}</h1>
        <p className="page-subtitle">Explore the 3D model below. Rotate, zoom, and examine the {boneData.name.toLowerCase()} from all angles.</p>

        {boneData.model3d ? (
          <div className="bone-viewer">
            <div className="model-container">
              {!showCanvas ? (
                <div className="model-loading">
                  <div className="loading-spinner"></div>
                  <p className="loading-text">Loading 3D model...</p>
                  <p className="loading-subtext">This may take a few moments</p>
                </div>
              ) : (
                <ErrorBoundary 
                  key={`error-boundary-${boneId}`}
                  fallback={
                    <div className="model-error">
                      <p style={{ color: '#f44336', fontSize: '1.2rem', marginBottom: '10px' }}>
                        ⚠️ 3D model could not be loaded
                      </p>
                      <p style={{ color: '#666', fontSize: '0.95rem' }}>
                        Please try refreshing the page or contact support if the problem persists.
                      </p>
                    </div>
                  }
                  onError={(error) => {
                    console.error('ErrorBoundary caught error:', error)
                  }}
                >
                  <Suspense fallback={
                    <div className="model-loading">
                      <div className="loading-spinner"></div>
                      <p className="loading-text">Loading 3D model...</p>
                      <p className="loading-subtext">This may take a few moments</p>
                    </div>
                  }>
                    <Canvas key={`canvas-${boneId}-${boneData.model3d}`} style={{ width: '100%', height: '100%' }}>
                      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[10, 10, 5]} intensity={1} />
                      <BoneModel key={`model-${boneId}-${boneData.model3d}`} modelUrl={boneData.model3d} />
                      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
                    </Canvas>
                  </Suspense>
                </ErrorBoundary>
              )}
            </div>
            <p className="viewer-instruction">Click and drag to rotate • Scroll to zoom • Right-click and drag to pan</p>
          </div>
        ) : (
          <div className="bone-viewer">
            <div className="model-container">
              <div className="model-error">
                <p style={{ color: '#666', fontSize: '1rem' }}>
                  No 3D model available for this item.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="bone-info">
          <div className="info-section">
            <h2>Description</h2>
            <p>{boneData.description}</p>
          </div>

          <div className="info-section">
            <h2>Function</h2>
            <p>{boneData.function}</p>
          </div>

          <div className="info-section">
            <h2>Physiotherapy Relevance</h2>
            <p>Understanding the {boneData.name.toLowerCase()} is crucial for physiotherapy. Injuries, conditions, and treatment approaches are directly related to its structure and function. Proper assessment and rehabilitation techniques require in-depth knowledge of this anatomical structure.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoneDetail

