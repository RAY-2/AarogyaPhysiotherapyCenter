import React, { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

const Model = ({ url }) => {
  const { scene } = useGLTF(url)
  const sceneRef = useRef()
  
  // Clone the scene to avoid mutating the cached original
  const clonedScene = useMemo(() => {
    if (!scene) return null
    try {
      return scene.clone()
    } catch (error) {
      console.error('Model: Error cloning scene:', error)
      return scene
    }
  }, [scene])

  // Position the model when scene is loaded
  useEffect(() => {
    if (clonedScene) {
      try {
        // Calculate bounding box to position model at 1/3rd from bottom
        const box = new THREE.Box3().setFromObject(clonedScene)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        
        // Position model at 1/3rd from bottom of screen
        const targetBottomY = -2
        clonedScene.position.y = targetBottomY - (center.y - size.y / 2)
        clonedScene.position.x = -center.x // Center horizontally
        clonedScene.position.z = -center.z // Center on Z axis (handle positive Z offset from .glb files)
      } catch (error) {
        console.error('Model: Error positioning model:', error)
      }
    }
  }, [clonedScene])

  // Continuous rotation animation
  useFrame(() => {
    if (sceneRef.current) {
      sceneRef.current.rotation.y -= 0.0025
    }
  })

  if (!clonedScene) return null
  
  return (
    <group ref={sceneRef}>
      <primitive object={clonedScene} scale={2} />
    </group>
  )
}

const Bone3DViewer = ({ modelUrl }) => {
  if (!modelUrl) return null

  return (
    <div className="bone-3d-viewer">
      <Canvas style={{ width: '100%', height: '500px', background: '#f0f7ff' }}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 1.5, 5]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Model url={modelUrl} />
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        </Suspense>
      </Canvas>
      <p className="viewer-instruction">Click and drag to rotate • Scroll to zoom</p>
    </div>
  )
}

export default Bone3DViewer

