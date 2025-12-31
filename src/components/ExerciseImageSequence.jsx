import React, { useState, useEffect } from 'react'

const ExerciseImageSequence = ({ painArea, exerciseName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [images, setImages] = useState([])
  const [imageErrors, setImageErrors] = useState({})

  const baseUrl = import.meta.env.BASE_URL

  // Convert exercise name to folder name format
  const getExerciseFolderName = (name) => {
    return name
      .replace(/\s+/g, ' ') // Normalize spaces
      .trim()
  }

  useEffect(() => {
    const folderName = getExerciseFolderName(exerciseName)
    // Sequence: 1 -> 2 -> 3 -> 2 -> 1 (repeat)
    const imagePaths = [
      `${baseUrl}images/pain-areas/${painArea}/${folderName}/1.png`,
      `${baseUrl}images/pain-areas/${painArea}/${folderName}/2.png`,
      `${baseUrl}images/pain-areas/${painArea}/${folderName}/3.png`,
      `${baseUrl}images/pain-areas/${painArea}/${folderName}/2.png`,
      `${baseUrl}images/pain-areas/${painArea}/${folderName}/1.png`
    ]
    setImages(imagePaths)
  }, [painArea, exerciseName, baseUrl])

  useEffect(() => {
    if (images.length === 0) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        // Cycle through: 0 -> 1 -> 2 -> 3 -> 4 -> 0 (1->2->3->2->1->repeat)
        return (prevIndex + 1) % images.length
      })
    }, 1000) // Change image every second

    return () => clearInterval(interval)
  }, [images.length])

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }))
  }

  // Check if all images failed to load
  const allImagesFailed = images.every((_, index) => imageErrors[index])

  if (allImagesFailed && images.length > 0) {
    return (
      <div className="exercise-video-container">
        <div className="video-placeholder">
          <div className="video-placeholder-icon">▶</div>
          <p className="video-placeholder-text">
            Exercise demonstration images not found. Please add images to:<br />
            <code>public/images/pain-areas/{painArea}/{getExerciseFolderName(exerciseName)}/</code>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="exercise-video-container">
      <div className="exercise-image-sequence">
        {images.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            alt={`${exerciseName} - Step ${index + 1}`}
            className={`exercise-sequence-image ${
              index === currentImageIndex ? 'active' : ''
            }`}
            onError={() => handleImageError(index)}
            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
          />
        ))}
        <div className="image-sequence-controls">
          <div className="image-indicators">
            {/* Show only 3 indicators for the 3 unique images (1, 2, 3) */}
            {[0, 1, 2].map((index) => {
              // Map current index to the actual sequence position
              const isActive = currentImageIndex === index || 
                              (index === 1 && currentImageIndex === 3) || // 2nd image appears at index 1 and 3
                              (index === 0 && currentImageIndex === 4)    // 1st image appears at index 0 and 4
              return (
                <span
                  key={index}
                  className={`indicator ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    // Navigate to the first occurrence of this image
                    if (index === 0) setCurrentImageIndex(0)
                    else if (index === 1) setCurrentImageIndex(1)
                    else if (index === 2) setCurrentImageIndex(2)
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExerciseImageSequence


