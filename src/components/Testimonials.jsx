import React from 'react'
import '../styles/Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      condition: 'Back Pain',
      rating: 5,
      text: 'Excellent treatment and care. My back pain is completely gone. The team is professional and the exercises they showed really helped me recover quickly.',
      date: '2024'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      condition: 'Neck Pain',
      rating: 5,
      text: 'I had severe neck pain due to long hours of computer work. The physiotherapy sessions and the exercise program helped me get back to normal. Highly recommended!',
      date: '2024'
    },
    {
      id: 3,
      name: 'Amit Patel',
      condition: 'Knee Injury',
      rating: 5,
      text: 'After my sports injury, I was worried about recovery. But the team at Aarogya helped me with their advanced machines and personalized treatment. Great experience!',
      date: '2024'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      condition: 'Shoulder Pain',
      rating: 5,
      text: 'Professional staff and modern equipment. My shoulder pain is much better now. The free consultation was really helpful to understand my condition.',
      date: '2024'
    }
  ]

  return (
    <section className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">Patient Stories</h2>
        <p className="section-subtitle">Hear from our patients about their recovery journey</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-condition">{testimonial.condition}</p>
                </div>
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-date">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
