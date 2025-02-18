import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
  return (
    <footer className='container mt-5 py-4 border-top bg-light'>
      <div className='row text-dark'>
        {/* About Section */}
        <div className='col-md-4'>
          <h5 className='fw-bold'>ABOUT</h5>
          <p className='text-muted'>
            Welcome to vehicle rental, where comfort is everything. Beautiful
            room presentations, straightforward booking & reservation options, &
            a whole lot more awaits here.
          </p>
          <div className='d-flex gap-3'>
            <i className='bi bi-facebook fs-3 text-primary'></i>
            <i className='bi bi-instagram fs-3 text-danger'></i>
            <i className='bi bi-twitter fs-3 text-info'></i>
          </div>
        </div>

        {/* Contact Section */}
        <div className='col-md-4'>
          <h5 className='fw-bold'>CONTACT</h5>
          <p className='text-muted'>
            A:{' '}
            <a href='#' className='text-decoration-none text-dark'>
              Via Venti Settembre, Roma
            </a>
            <br />
            P:{' '}
            <a
              href='tel:+3155577783'
              className='text-decoration-none text-dark'
            >
              +31 555 777 83
            </a>
            <br />
            App: Viber, WhatsApp
            <br />
            E:{' '}
            <a
              href='mailto:info@easymove.com'
              className='text-decoration-none text-dark'
            >
              info@easymove.com
            </a>
          </p>
          <h5 className='fw-bold'>LOCATION</h5>
          <a href='#' className='text-decoration-none text-primary'>
            Show on map ↗
          </a>
        </div>

        {/* Payment Methods */}
        <div className='col-md-4'>
          <h5 className='fw-bold'>PAYMENT METHODS</h5>
          <p className='text-muted'>
            Pay any way you choose, we support all payment options.
          </p>
          <div className='d-flex gap-2'>
            <img
              src='/paypal-logo.png'
              alt='PayPal'
              height='20'
              className='border rounded p-1'
            />
            <img
              src='/visa-logo.png'
              alt='Visa'
              height='20'
              className='border rounded p-1'
            />
            <img
              src='/mastercard-logo.png'
              alt='MasterCard'
              height='20'
              className='border rounded p-1'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
