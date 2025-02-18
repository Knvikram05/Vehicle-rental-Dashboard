import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCar, FaBook, FaMoneyBill, FaHandshake, FaGift, FaCog ,FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import Header from "./Header";
import cardimg from '../images/car1.png'
import cardimg2 from '../images/car2.png'
import cardimg3 from '../images/car3.png'

const VehicleCard = ({ image, name, bookings, status }) => {
  return (
    <div className='card shadow-sm m-2' style={{ width: '18rem' }}>
      <img src={image} className='card-img-top mt-2' alt={name} />
      <span
        className={`badge ${
          status === 'Active' ? 'text-success' : 'text-danger'
        } position-absolute top-0 start-0    px-2 py-1 fs-6 fw-bold mt-1 `}
      >
        {status}
      </span>

      <div className='card-body'>
        <span
          className={`badge ${
            status === 'Active' ? 'bg-success' : 'bg-danger'
          }`}
        ></span>
        <h5 className='card-title mt-2'>{name}</h5>
        <p className='card-text'>No. of Bookings: {bookings}</p>
        <div className='d-flex justify-content-between gap-2'>
          <button
            className='btn btn-outline-primary d-flex align-items-center text-dark bg-light border-2 rounded-pill w-50 '
            style={{
              borderColor: '#00B1EF',
            }}
          >
            <FaEdit className='me-4' />
            Edit
          </button>
          <button
            className='btn btn-outline-primary d-flex align-items-center text-dark bg-light border-2 rounded-pill w-50'
            style={{
              borderColor: '#00B1EF',
            }}
          >
            <FaTrash className='me-4' />
            Delete
          </button>
        </div>
        <button
          className='btn  mt-2 rounded-pill text-white w-100 '
          style={{
            backgroundColor: '#00B1EF',
            borderColor: '#00B1EF',
          }}
        >
          View Bookings
        </button>
      </div>
    </div>
  )
};



const Sidebar = () => {
  return (
    <nav
      className="col-md-2 d-none d-md-block sidebar p-3 sticky-top"
      style={{ backgroundColor: "#D0E3FF", height: "100vh" }}
    >
      <h6 className="p-2 bg-white rounded text-start">Dashboard</h6>
      <ul className="nav flex-column mt-3 text-black text-start">
        <li className="nav-item">
          <a href="#" className="nav-link text-black fw-bold">
            <FaCar className="me-2" /> Listed Vehicles
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-black">
            <FaBook className="me-2" /> Bookings
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-black">
            <FaMoneyBill className="me-2" /> Transactions
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-black">
            <FaHandshake className="me-2" /> Coordinator
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-black">
            <FaGift className="me-2" /> Incentives
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-black">
            <FaCog className="me-2" /> Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};




const Dashboard = () => {
  const vehicles = [
    { image: cardimg, name: 'Ford Ecosport', bookings: 5, status: 'Active' },
    {
      image: cardimg2,
      name: 'Ford Ecosport',
      bookings: 5,
      status: 'Inactive',
    },
    { image: cardimg3, name: 'Ford Ecosport', bookings: 5, status: 'Active' },
    {
      image: cardimg2,
      name: 'Ford Ecosport',
      bookings: 5,
      status: 'Inactive',
    },
    { image: cardimg3, name: 'Ford Ecosport', bookings: 5, status: 'Active' },
    {
      image: cardimg,
      name: 'Ford Ecosport',
      bookings: 5,
      status: 'Inactive',
    },
    { image: cardimg, name: 'Ford Ecosport', bookings: 5, status: 'Active' },
    {
      image: cardimg2,
      name: 'Ford Ecosport',
      bookings: 5,
      status: 'Inactive',
    },
    {
      image: cardimg3,
      name: 'Ford Ecosport',
      bookings: 5,
      status: 'Inactive',
    },
    // Add more vehicles here
  ]

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />

        <main className='col-md-10 ms-sm-auto px-4 '>
          <Header />
          <div className='d-flex mt-3  gap-5 justify-content-around'>
            <h3 className='my-3'>Manage Vehicle Listings</h3>
            <div className='d-flex gap-1 mb-3'>
              <select
                className='form-select bg-light border-2 rounded-pill'
                aria-label='Date'
              >
                <option>Date</option>
              </select>
              <select
                className='form-select bg-light border-2 rounded-pill px-3 py-2  text-nowrap'
                aria-label='Vehicle name'
                style={{ width: '150px' ,}}
              >
                <option>Vehicle name</option>
              </select>

              <select
                className='form-select bg-light border-2 rounded-pill'
                aria-label='Status'
              >
                <option>Status</option>
              </select>
            </div>

            <div className='d-flex justify-content-between mb-3'>
              <button
                className='btn btn-primary  border-2 rounded-pill'
                style={{
                  background: '#00B1EF',
                  borderColor: '#00B1EF',
                }}
              >
                Create new listing
              </button>
            </div>
          </div>

          <div className='d-flex gap-3'>
            <input
              type='text'
              className='form-control w-50'
              placeholder='Search vehicle'
            />
            <button className='btn btn-dark'>
              <FaSearch />
            </button>
          </div>

          <div className='row'>
            {vehicles.map((vehicle, index) => (
              <VehicleCard key={index} {...vehicle} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
};

export default Dashboard;