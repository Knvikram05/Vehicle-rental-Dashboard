import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaQuoteLeft } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

const feedbacks = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni',
    author: 'Lorem',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni',
    author: 'Lorem',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni',
    author: 'Lorem',
  },
]

const FeedbackCard = ({ feedback }) => (
  <div className='col-md-4'>
    <div className='card border-0 shadow-sm p-4 text-center'>
      <FaQuoteLeft className='text-danger fs-1 mb-3' />
      <p>{feedback.text}</p>
      <h6 className='fw-bold'>- {feedback.author}</h6>
    </div>
  </div>
)

const NewsletterSignup = () => (
  <div className='container py-5'>
    <div className='row align-items-center  p-4 rounded'>
      <div className='col-md-6 d-flex align-items-center'>
        <FaEnvelope className='fs-1 me-3' />
        <h5 className='mb-0'>Join our weekly Newsletter</h5>
      </div>
      <div className='col-md-6 d-flex'>
        <input
          type='email'
          className='form-control me-2'
          placeholder='Email Address'
        />
        <button className='btn btn-primary'>SIGNUP ME</button>
      </div>
    </div>
  </div>
)

const ClientFeedback = () => {
  return (
    <section className='container py-1'>
      <h2 className='text-center mb-4 fw-bold'>Our Clients Feedback</h2>
      <div className='row g-4'>
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
      </div>
      <NewsletterSignup />
    </section>
  )
}

export default ClientFeedback
