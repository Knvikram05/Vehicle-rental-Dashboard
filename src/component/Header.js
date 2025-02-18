import React from 'react'
import { Bell, ChevronDown } from 'react-bootstrap-icons'
import { FaCheckCircle, FaCircle, FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='container-fluid p-3 d-flex justify-content-between align-items-center bg-white shadow-sm rounded mt-3'>
      {/* Left Section */}
      <div>
        <h3 className='text-secondary fw-light'>
          Welcome back <span className='fw-bold text-dark'>Jayden</span>
        </h3>
        <p className='text-muted'>
          You have{' '}
          <span
            className='fw-bold '
            style={{
              color: '#00B1EF',
            }}
          >
            3 unread
          </span>{' '}
          notifications
        </p>
      </div>

      {/* Right Section */}
      <div className='d-flex align-items-center gap-3'>
        {/* Notification Icon */}
        <button className='btn btn-light rounded-circle shadow-sm'>
          <Bell size={20} className='text-secondary' />
        </button>

        {/* Profile Section */}
        <div className='d-flex align-items-center gap-2'>
          <FaUser className='me-2' />
          <div className='text-end'>
            <h6 className='text-dark fw-semibold mb-0 d-flex flex-start'>
              Jayden Owusu <FaCheckCircle className='ms-2 ' />
            </h6>
            <p className='text-muted small mb-0'>jaydenowusu@gmail.com</p>
          </div>
          <ChevronDown size={20} className='text-secondary' />
        </div>
      </div>
    </div>
  )
}

export default Header
