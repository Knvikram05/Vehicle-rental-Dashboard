import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css' // Import Bootstrap Icons

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle border rounded-full d-flex align-items-center'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='bi bi-geo-alt me-2'></i> Choose your Location
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Coimbatore
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Chennai
                  </a>
                </li>
                <li className='dropdown-divider'></li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className='d-flex'>
            <button className='btn btn-danger mx-2' type='button'>
              For Vehicle Owner
            </button>
            <button
              className='btn btn-light btn-outline-dark mx-2'
              type='button'
            >
              Login
            </button>
            <button
              className='btn btn-dark btn-outline-dark text-light mx-2'
              type='button'
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
