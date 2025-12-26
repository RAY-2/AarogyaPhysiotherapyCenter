import React, { Suspense } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import ExerciseModel from '../components/ExerciseModel'
import '../styles/Exercises.css'

const Exercises = () => {
  const { painArea } = useParams()

  const exerciseData = {
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

  const data = exerciseData[painArea] || exerciseData.neck

  return (
    <div className="exercises-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="page-title">{data.title}</h1>
        <p className="page-subtitle">Use the 3D model below to see the exercise movements. Rotate, zoom, and explore the model from all angles.</p>

        <div className="exercise-viewer">
          <div className="model-container">
            <Canvas>
              <Suspense fallback={null}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <ExerciseModel painArea={painArea} />
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
              </Suspense>
            </Canvas>
          </div>
        </div>

        <div className="exercises-list">
          <h2>Exercise Instructions</h2>
          {data.exercises.map((exercise, index) => (
            <div key={index} className="exercise-item">
              <div className="exercise-number">{index + 1}</div>
              <div className="exercise-content">
                <h3>{exercise.name}</h3>
                <p>{exercise.description}</p>
              </div>
            </div>
          ))}
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
