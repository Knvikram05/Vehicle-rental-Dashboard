import React from 'react'
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

const vehicles = [
  {
    id: 1,
    name: 'Ford Ecosport',
    bookings: 5,
    image: 'https://via.placeholder.com/150',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Ford Ecosport',
    bookings: 5,
    image: 'https://via.placeholder.com/150',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Ford Ecosport',
    bookings: 5,
    image: 'https://via.placeholder.com/150',
    status: 'Active',
  },
]

const VehicleList = () => {
  return (
    <div className='container mt-4'>
      <h2 className='fw-bold'>
        Welcome back <span className='text-primary'>Jayden</span>
      </h2>
      <p>
        You have <span className='text-primary'>3 unread</span> notifications
      </p>

      {/* Title + Create Button */}
      <div className='d-flex justify-content-between align-items-center my-3'>
        <h4>Manage Vehicle Listings</h4>
        <button className='btn btn-primary'>Create new listing</button>
      </div>

      {/* Filters */}
      <div className='d-flex gap-2 mb-3'>
        <select className='form-select'>
          <option>Date</option>
        </select>
        <select className='form-select'>
          <option>Vehicle name</option>
        </select>
        <select className='form-select'>
          <option>Status</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Search vehicle'
        />
        <button className='btn btn-dark'>
          <FaSearch />
        </button>
      </div>

      {/* Vehicle Cards */}
      <div className='row'>
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className='col-md-4 mb-4'>
            <div className='card shadow-sm position-relative'>
              {/* Status Badge */}
              <span className='badge bg-success position-absolute m-2'>
                {vehicle.status}
              </span>
              <img
                src={vehicle.image}
                className='card-img-top'
                alt={vehicle.name}
              />
              <div className='card-body'>
                <h5 className='card-title'>{vehicle.name}</h5>
                <p className='card-text'>No. of Bookings: {vehicle.bookings}</p>

                {/* Edit & Delete Buttons */}
                <div className='d-flex justify-content-between'>
                  <button className='btn btn-outline-primary btn-sm'>
                    <FaEdit /> Edit
                  </button>
                  <button className='btn btn-outline-danger btn-sm'>
                    <FaTrash /> Delete
                  </button>
                </div>

                {/* View Bookings Button */}
                <button className='btn btn-primary mt-2 w-100'>
                  View Bookings
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VehicleList
