import React from 'react'
import '../styles/SocialButtons.css'

const SocialButtons = () => {
  const whatsappNumber = 'YOUR_WHATSAPP_NUMBER' // Replace with actual number
  const youtubeChannel = 'YOUR_YOUTUBE_CHANNEL' // Replace with actual channel

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
        href={`https://youtube.com/${youtubeChannel}`}
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
