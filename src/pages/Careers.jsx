import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Careers.css'

const Careers = () => {
  const whatsappNumber = '919650908779' // 9650908779 with country code
  const email = 'aarogyaphysiotherapycenter@gmail.com'

  return (
    <div className="careers-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="page-title">Career Opportunities</h1>
        <p className="page-subtitle">Join our team and help make a difference in patients' lives</p>

        <div className="careers-content">
          <div className="career-intro">
            <h2>Why Join Aarogya Physiotherapy Center?</h2>
            <p>We are looking for dedicated healthcare professionals who are passionate about helping patients recover and improve their quality of life. Join us in our mission to provide excellent physiotherapy care with modern equipment and evidence-based practices.</p>
          </div>

          <div className="job-opening">
            <div className="job-header">
              <h2>Physiotherapy Assistant</h2>
              <span className="job-status">Currently Hiring</span>
            </div>

            <div className="job-details">
              <div className="job-section">
                <h3>Job Description</h3>
                <p>We are seeking a qualified Physiotherapy Assistant to join our team. The ideal candidate will assist our physiotherapists in providing excellent patient care, managing equipment, and supporting treatment sessions.</p>
              </div>

              <div className="job-section">
                <h3>Responsibilities</h3>
                <ul>
                  <li>Assist physiotherapists during patient treatment sessions</li>
                  <li>Prepare and maintain treatment equipment and therapy areas</li>
                  <li>Guide patients through prescribed exercises and therapeutic activities</li>
                  <li>Monitor patient progress and report to supervising physiotherapist</li>
                  <li>Maintain patient records and documentation</li>
                  <li>Ensure cleanliness and hygiene of therapy areas</li>
                  <li>Provide support and encouragement to patients during rehabilitation</li>
                </ul>
              </div>

              <div className="job-section">
                <h3>Requirements</h3>
                <ul>
                  <li>Diploma or degree in Physiotherapy Assistant/Physiotherapy</li>
                  <li>Strong communication and interpersonal skills</li>
                  <li>Compassionate and patient-centered approach</li>
                  <li>Ability to work in a team environment</li>
                  <li>Basic knowledge of physiotherapy equipment and techniques</li>
                  <li>Physical fitness to assist patients with exercises</li>
                  <li>Willingness to learn and adapt to new treatment methods</li>
                </ul>
              </div>

              <div className="job-section">
                <h3>What We Offer</h3>
                <ul>
                  <li>Competitive salary package</li>
                  <li>Professional development opportunities</li>
                  <li>Modern facility with advanced equipment</li>
                  <li>Supportive and collaborative work environment</li>
                  <li>Opportunity to make a meaningful impact on patients' lives</li>
                  <li>Regular training and skill enhancement programs</li>
                </ul>
              </div>

              <div className="job-apply">
                <h3>How to Apply</h3>
                <p>Interested candidates can apply by:</p>
                <div className="apply-options">
                  <a 
                    href={`mailto:${email}?subject=Application for Physiotherapy Assistant Position`}
                    className="btn btn-blue"
                  >
                    Send Email
                  </a>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=Hello, I am interested in applying for the Physiotherapy Assistant position.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-green"
                  >
                    WhatsApp Us
                  </a>
                </div>
                <p className="apply-note">Please include your resume, cover letter, and relevant qualifications in your application.</p>
              </div>
            </div>
          </div>

          <div className="future-openings">
            <h2>Future Opportunities</h2>
            <p>We are always looking for talented professionals. Even if we don't have an opening right now, feel free to send us your resume for future consideration. We'll keep your information on file and contact you when a suitable position becomes available.</p>
            <a href={`mailto:${email}`} className="btn">Submit General Application</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers
