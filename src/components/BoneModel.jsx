import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const BoneModel = ({ modelUrl }) => {
  // Load the model - useGLTF suspends on loading and errors are caught by ErrorBoundary
  // The model is cached by drei, so subsequent loads are fast
  const { scene } = useGLTF(modelUrl)
  const sceneRef = useRef()

  // Clone the scene to avoid mutating the cached original
  // This ensures each instance has its own copy that can be positioned independently
  const clonedScene = useMemo(() => {
    if (!scene) return null
    try {
      return scene.clone()
    } catch (error) {
      console.error('BoneModel: Error cloning scene:', error)
      // If cloning fails, use the original scene
      return scene
    }
  }, [scene])

  // Continuous rotation animation
  useFrame(() => {
    if (sceneRef.current) {
      sceneRef.current.rotation.y -= 0.0025
    }
  })

  // Position the model when scene is loaded
  useEffect(() => {
    if (clonedScene) {
      try {
        console.log('BoneModel: Scene loaded, positioning model from URL:', modelUrl)
        // Calculate bounding box to position model at 1/3rd from bottom
        const box = new THREE.Box3().setFromObject(clonedScene)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        
        console.log('BoneModel: Bounding box - center:', center, 'size:', size)
        
        // Position model at 1/3rd from bottom of screen
        // With camera at y=1.5 looking at origin, we want model bottom at approximately y=-2.5
        // This accounts for the 2x scale and positions it at 1/3rd from bottom
        const targetBottomY = -2
        clonedScene.position.y = targetBottomY - (center.y - size.y / 2)
        clonedScene.position.x = -center.x // Center horizontally
        clonedScene.position.z = -center.z // Center on Z axis (handle positive Z offset from .glb files)
        
        console.log('BoneModel: Model positioned at:', clonedScene.position)
      } catch (error) {
        console.error('BoneModel: Error positioning model:', error)
      }
    }
  }, [clonedScene, modelUrl])

  if (!clonedScene) {
    return null
  }

  return (
    <group ref={sceneRef}>
      <primitive object={clonedScene} scale={2} />
    </group>
  )
}

export default BoneModel

