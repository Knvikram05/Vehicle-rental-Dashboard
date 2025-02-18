// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import { FaMapMarkerAlt, FaClock, FaCar, FaDollarSign, FaUser, FaSearch, FaCalendar } from "react-icons/fa"; // Import icons
import bg from "../images/landingpagebg.png"; // Import background image

const LandingPage = () => {
  return (
    <div className='container-fluid p-0'>
      {/* Hero Section with Background Image */}
      <div className='position-relative'>
        <img
          src={bg}
          className='img-fluid w-100'
          alt='Hero'
          style={{ height: '90vh', objectFit: 'cover' }}
        />

        {/* Bottom Overlay Content */}
        <div
          className='container bg-light text-white py-3 position-absolute start-50 translate-middle-x w-75 shadow'
          style={{ bottom: '-50px', borderRadius: '10px', opacity: '1.0' }}
        >
          {/* Row for Buttons and List */}
          <div className='row align-items-center text-dark'>
            {/* Left Buttons */}
            <div className='col-md-2 d-flex gap-3'>
              <button className='btn btn-danger'>Rent</button>
              <button className='btn btn-light'>Buy</button>
            </div>

            {/* Flexbox List */}
          </div>

          <div className='row align-items-center text-dark mt-3 '>
            <div className='col d-flex justify-content-around'>
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='d-flex gap-2 p-3'>
                  <FaMapMarkerAlt size={24} />
                  <span>Pickup Location</span>
                </div>
                <div className='d-flex gap-2'>
                  <small>Pickup Location</small>
                  <FaMapMarkerAlt size={24} />
                </div>
              </div>
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='d-flex gap-2 p-3'>
                  <FaCalendar size={24} />
                  <span>Pick-up date and Time </span>
                </div>
                <div className='d-flex gap-2'>
                  <small>Pick-up date and Time </small>
                  <FaCalendar size={24} />
                </div>
              </div>
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='d-flex gap-2 p-3'>
                  <FaMapMarkerAlt size={24} />
                  <span>Pickup Location</span>
                </div>
                <div className='d-flex gap-2'>
                  <small>Pickup Location</small>
                  <FaMapMarkerAlt size={24} />
                </div>
              </div>
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='d-flex gap-2 p-3'>
                  <FaCalendar size={24} />
                  <span>Pick-up date and Time </span>
                </div>
                <div className='d-flex gap-2'>
                  <small>Pick-up date and Time </small>
                  <FaCalendar size={24} />
                </div>
              </div>
              <div className='d-flex flex-column align-items-center text-center '>
                <div className='d-flex gap-2 pt-3 '>
                  <FaSearch size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-5 pt-5'>
        <div className='col-md-12'>
          <h1>Lorem ipsum</h1>
          <h4 className='p-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            rerum aut id dolor sequi magnam distinctio, saepe quis assumenda
            unde amet optio odit non hic facere dolorum, blanditiis omnis
            aliquid.
          </h4>
        </div>
      </div>
    </div>
  )
};

export default LandingPage;
