import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Machines.css'

const MachineCard = ({ machine }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="machine-card">
      <div className="machine-image-container">
        {!imageError ? (
          <img 
            src={machine.image} 
            alt={machine.name}
            className="machine-image"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="machine-image-placeholder">
            <div className="image-icon">⚙️</div>
            <p className="image-note">Image not found<br />Add image at: {machine.image}</p>
          </div>
        )}
      </div>
      <div className="machine-content">
        <h2>{machine.name}</h2>
        <div className="machine-section">
          <h3>Description</h3>
          <p>{machine.description}</p>
        </div>
        <div className="machine-section">
          <h3>Common Uses</h3>
          <p>{machine.uses}</p>
        </div>
      </div>
    </div>
  )
}

const Machines = () => {
  const machines = [
    {
      id: 'tens',
      name: 'TENS (Transcutaneous Electrical Nerve Stimulation)',
      description: 'TENS is a non-invasive pain relief technique that uses low-voltage electrical currents to stimulate nerves and block pain signals. It helps manage acute and chronic pain conditions.',
      uses: 'Chronic pain, post-operative pain, muscle spasms, arthritis pain, neuropathic pain',
      image: '/images/machines/tens.png'
    },
    {
      id: 'ift',
      name: 'IFT (Interferential Therapy)',
      description: 'IFT uses two medium-frequency currents that interfere with each other to create a therapeutic frequency deep in the tissues, providing pain relief and muscle stimulation.',
      uses: 'Chronic pain, edema reduction, muscle re-education, pain management, circulatory disorders',
      image: '/images/machines/ift.png'
    },
    {
      id: 'wax',
      name: 'Wax Bath Therapy',
      description: 'Paraffin wax bath therapy involves immersing affected areas in warm, melted paraffin wax. It provides deep heat therapy, improves circulation, and increases flexibility.',
      uses: 'Arthritis, joint stiffness, hand and foot conditions, muscle tension, chronic pain',
      image: '/images/machines/wax-bath.png'
    },
    {
      id: 'traction',
      name: 'Lumbar & Cervical Traction',
      description: 'Traction therapy applies a pulling force to the spine to decompress vertebrae, relieve pressure on discs, and reduce nerve compression. Available for both lumbar and cervical regions.',
      uses: 'Herniated discs, sciatica, neck pain, back pain, spinal stenosis, degenerative disc disease',
      image: '/images/machines/traction.png'
    },
    {
      id: 'swd',
      name: 'SWD (Short Wave Diathermy)',
      description: 'SWD uses high-frequency electromagnetic waves to generate deep heat in tissues, promoting blood flow, reducing inflammation, and relaxing muscles.',
      uses: 'Deep tissue heating, chronic inflammation, muscle stiffness, joint conditions, sports injuries',
      image: '/images/machines/swd.png'
    },
    {
      id: 'laser',
      name: 'Laser Therapy',
      description: 'Low-level laser therapy uses specific wavelengths of light to penetrate tissues and stimulate cellular processes, promoting healing, reducing inflammation, and relieving pain.',
      uses: 'Tissue healing, wound care, pain management, inflammation reduction, nerve regeneration',
      image: '/images/machines/laser.png'
    },
    {
      id: 'stimulator',
      name: 'Muscle Stimulator',
      description: 'Electrical muscle stimulation (EMS) uses electrical impulses to contract muscles, helping with muscle strengthening, preventing atrophy, and improving circulation.',
      uses: 'Muscle strengthening, preventing muscle atrophy, improving circulation, muscle re-education',
      image: '/images/machines/muscle-stimulator.png'
    },
    {
      id: 'cupping',
      name: 'Dry Cupping Therapy',
      description: 'Dry cupping involves placing suction cups on the skin to create negative pressure, promoting blood flow, reducing muscle tension, and facilitating healing.',
      uses: 'Muscle tension, pain relief, improved circulation, trigger point therapy, relaxation',
      image: '/images/machines/cupping.png'
    },
    {
      id: 'manual',
      name: 'Manual Exercise Equipment',
      description: 'Various exercise equipment for manual therapy including resistance bands, exercise balls, weights, and specialized devices for targeted rehabilitation exercises.',
      uses: 'Strength training, flexibility exercises, balance training, coordination, functional training',
      image: '/images/machines/manual-exercise.png'
    },
    {
      id: 'cpm',
      name: 'CPM (Continuous Passive Motion)',
      description: 'CPM machines provide continuous, passive movement to joints without active muscle contraction, helping maintain range of motion and prevent stiffness after surgery or injury.',
      uses: 'Post-surgical rehabilitation, joint stiffness, range of motion improvement, preventing contractures',
      image: '/images/machines/cpm.png'
    },
    {
      id: 'ultrasonic',
      name: 'Ultrasonic Therapy',
      description: 'Ultrasonic therapy uses ultrasound waves to treat deep tissue conditions, providing thermal and mechanical effects that promote healing and reduce pain.',
      uses: 'Deep tissue injuries, chronic pain, scar tissue reduction, calcific deposits, soft tissue healing',
      image: '/images/machines/ultrasonic.png'
    }
  ]

  return (
    <div className="machines-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="page-title">Our Advanced Physiotherapy Machines</h1>
        <p className="page-subtitle">Explore our state-of-the-art equipment designed to provide comprehensive treatment and faster recovery</p>

        <div className="machines-grid">
          {machines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Machines
