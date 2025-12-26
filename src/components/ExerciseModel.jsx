import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const ExerciseModel = ({ painArea }) => {
  const meshRef = useRef()

  // Create a simple geometric representation of the human body part
  useFrame(() => {
    if (meshRef.current) {
      // Subtle animation
      meshRef.current.rotation.y += 0.005
    }
  })

  // Different colors for different body parts
  const colors = {
    neck: '#4CAF50',
    back: '#2196F3',
    shoulder: '#FF9800',
    knee: '#9C27B0',
    wrist: '#F44336',
    ankle: '#00BCD4',
    hip: '#FF5722',
    elbow: '#795548'
  }

  const color = colors[painArea] || '#4CAF50'

  // Create different shapes based on body part
  const getGeometry = () => {
    switch(painArea) {
      case 'neck':
        return <cylinderGeometry args={[0.3, 0.4, 1, 16]} />
      case 'back':
        return <boxGeometry args={[1, 2, 0.5]} />
      case 'shoulder':
        return <sphereGeometry args={[0.8, 16, 16]} />
      case 'knee':
        return <cylinderGeometry args={[0.5, 0.5, 1.5, 16]} />
      case 'wrist':
        return <cylinderGeometry args={[0.2, 0.2, 0.8, 16]} />
      case 'ankle':
        return <sphereGeometry args={[0.4, 16, 16]} />
      case 'hip':
        return <sphereGeometry args={[0.7, 16, 16]} />
      case 'elbow':
        return <cylinderGeometry args={[0.3, 0.3, 0.6, 16]} />
      default:
        return <boxGeometry args={[1, 1, 1]} />
    }
  }

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {getGeometry()}
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.7} />
    </mesh>
  )
}

export default ExerciseModel
