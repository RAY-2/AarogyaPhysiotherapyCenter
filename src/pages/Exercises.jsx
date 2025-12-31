import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ExerciseImageSequence from '../components/ExerciseImageSequence'
import { loadExercisesForPainArea, getPainAreaTitle } from '../utils/exerciseLoader'
import '../styles/Exercises.css'

const Exercises = () => {
  const { painArea } = useParams()
  const [exercises, setExercises] = useState([])
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(true)

  // Fallback exercise data for pain areas without folder-based exercises
  const fallbackExerciseData = {
    neck: {
      title: 'Neck Pain Relief Exercises',
      exercises: [
        { name: 'Neck Rotation', description: 'Slowly rotate your head clockwise, then counterclockwise. Repeat 10 times each direction.' },
        { name: 'Neck Tilt', description: 'Gently tilt your head to the right, hold for 10 seconds, then to the left. Repeat 5 times each side.' },
        { name: 'Chin Tuck', description: 'Pull your chin straight back, creating a double chin. Hold for 5 seconds, repeat 10 times.' }
      ]
    },
    back: {
      title: 'Back Pain Relief Exercises',
      exercises: [
        { name: 'Knee to Chest', description: 'Lie on your back, bring one knee to your chest, hold for 15 seconds. Alternate legs. Repeat 10 times.' },
        { name: 'Cat-Cow Stretch', description: 'On hands and knees, arch your back up (cat), then drop it down (cow). Repeat 15 times.' },
        { name: 'Pelvic Tilt', description: 'Lie on back with knees bent, flatten your lower back against floor. Hold for 5 seconds, repeat 15 times.' }
      ]
    },
    shoulder: {
      title: 'Shoulder Pain Relief Exercises',
      exercises: [
        { name: 'Arm Circles', description: 'Extend arms and make small circles, gradually increasing size. 10 forward, 10 backward.' },
        { name: 'Pendulum Swing', description: 'Lean forward, let arm hang and swing in small circles. 20 times each direction.' },
        { name: 'Shoulder Blade Squeeze', description: 'Squeeze shoulder blades together, hold for 5 seconds. Repeat 15 times.' }
      ]
    },
    knee: {
      title: 'Knee Pain Relief Exercises',
      exercises: [
        { name: 'Straight Leg Raise', description: 'Lie on back, raise one leg straight up, hold for 5 seconds. Repeat 15 times each leg.' },
        { name: 'Hamstring Stretch', description: 'Sit with one leg extended, lean forward until you feel stretch. Hold 30 seconds, repeat 3 times.' },
        { name: 'Quad Sets', description: 'Tighten quad muscle, hold for 5 seconds, relax. Repeat 15 times each leg.' }
      ]
    },
    wrist: {
      title: 'Wrist Pain Relief Exercises',
      exercises: [
        { name: 'Wrist Flexor Stretch', description: 'Extend arm, pull fingers back with other hand. Hold 15 seconds, repeat 3 times.' },
        { name: 'Wrist Circles', description: 'Rotate wrists in circles, 10 times clockwise, 10 counterclockwise.' },
        { name: 'Finger Stretch', description: 'Spread fingers wide, hold for 5 seconds, then make fist. Repeat 10 times.' }
      ]
    },
    ankle: {
      title: 'Ankle Pain Relief Exercises',
      exercises: [
        { name: 'Ankle Circles', description: 'Rotate ankle in circles, 10 times each direction. Repeat with other foot.' },
        { name: 'Calf Stretch', description: 'Place hands on wall, step back with one foot, lean forward. Hold 30 seconds, repeat 3 times.' },
        { name: 'Toe Raises', description: 'Slowly rise up on toes, hold for 3 seconds, lower. Repeat 15 times.' }
      ]
    },
    hip: {
      title: 'Hip Pain Relief Exercises',
      exercises: [
        { name: 'Hip Flexor Stretch', description: 'Kneel on one knee, push hips forward. Hold 30 seconds, repeat 3 times each side.' },
        { name: 'Clamshells', description: 'Lie on side, lift top knee while keeping feet together. Repeat 15 times each side.' },
        { name: 'Bridging', description: 'Lie on back, lift hips up, hold for 5 seconds. Repeat 15 times.' }
      ]
    },
    elbow: {
      title: 'Elbow Pain Relief Exercises',
      exercises: [
        { name: 'Wrist Extension Stretch', description: 'Extend arm, pull hand down with other hand. Hold 15 seconds, repeat 3 times.' },
        { name: 'Wrist Flexion Stretch', description: 'Extend arm, pull hand up with other hand. Hold 15 seconds, repeat 3 times.' },
        { name: 'Forearm Stretch', description: 'Extend arm, rotate palm up/down. Hold each position 15 seconds, repeat 5 times.' }
      ]
    }
  }

  // Load exercises dynamically
  useEffect(() => {
    const loadExercises = async () => {
      setLoading(true)
      
      // Try to load from folders first
      const folderExercises = await loadExercisesForPainArea(painArea)
      
      if (folderExercises) {
        // Use folder-based exercises
        setExercises(folderExercises)
        setTitle(getPainAreaTitle(painArea))
      } else {
        // Fall back to static data
        const fallbackData = fallbackExerciseData[painArea] || fallbackExerciseData.neck
        setExercises(fallbackData.exercises)
        setTitle(fallbackData.title)
      }
      
      setLoading(false)
    }

    loadExercises()
  }, [painArea])

  if (loading) {
    return (
      <div className="exercises-page">
        <div className="container">
          <Link to="/" className="back-link">← Back to Home</Link>
          <div className="loading-container">
            <p>Loading exercises...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="exercises-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">Follow the exercise instructions below. Each exercise includes a demonstration video to help you perform it correctly.</p>

        <div className="exercises-list">
          <h2>Exercise Instructions</h2>
          {exercises.length === 0 ? (
            <p>No exercises available for this pain area.</p>
          ) : (
            <div className="exercises-grid">
              {exercises.map((exercise, index) => (
                <div key={index} className="exercise-card">
                  <div className="exercise-header">
                    <div className="exercise-number">{index + 1}</div>
                    <h3 className="exercise-name">{exercise.name}</h3>
                  </div>
                  <div className="exercise-image-section">
                    <ExerciseImageSequence 
                      painArea={painArea} 
                      exerciseName={exercise.folderName || exercise.name} 
                    />
                  </div>
                  <p className="exercise-description">{exercise.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="exercise-tips">
          <h2>Important Tips</h2>
          <ul>
            <li>Start slowly and gradually increase repetitions</li>
            <li>Stop if you feel sharp pain - consult your physiotherapist</li>
            <li>Perform exercises in a comfortable, safe environment</li>
            <li>Breathe normally during exercises</li>
            <li>Maintain proper form throughout each exercise</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Exercises
