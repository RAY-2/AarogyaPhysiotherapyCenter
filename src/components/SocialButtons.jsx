import React from 'react'
import '../styles/SocialButtons.css'

const SocialButtons = () => {
  const whatsappNumber = '919650908779' // 9650908779 with country code
  const youtubeChannel = 'https://www.youtube.com/channel/UCXigje96TS4WwZ7Q4uZEdyw'

  return (
    <div className="social-buttons">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button whatsapp-button"
        aria-label="WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <span className="social-icon">💬</span>
      </a>
      <a
        href={youtubeChannel}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button youtube-button"
        aria-label="YouTube"
        title="Visit our YouTube channel"
      >
        <span className="social-icon">▶️</span>
      </a>
    </div>
  )
}

export default SocialButtons
