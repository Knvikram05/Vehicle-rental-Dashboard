import React from 'react'
import { Heart, MapPin, Users, Fuel, Settings } from 'lucide-react'
import fea1 from '../images/fea1.png'
import fea2 from '../images/fea2.png'
import fea3 from '../images/fea3.png'


const vehicles = [
  {
    id: 1,
    image: fea1, // Replace with actual image URL
    name: 'Ford Ecosport',
    location: 'Cape Coast, Ghana',
    seats: 4,
    fuel: 'Diesel',
    transmission: 'Manual',
    price: 'GH¢ 950',
  },
  {
    id: 2,
    image: fea2,
    name: 'Ford Ecosport',
    location: 'Cape Coast, Ghana',
    seats: 4,
    fuel: 'Diesel',
    transmission: 'Manual',
    price: 'GH¢ 950',
  },
  {
    id: 3,
    image: fea3,
    name: 'Volkswagen Virtus',
    location: 'Cape Coast, Ghana',
    seats: 5,
    fuel: 'Diesel',
    transmission: 'Manual',
    price: 'GH¢ 950',
  },
]

const FeaturedVehicles = () => {
  return (
    <div className='container py-5'>
      <h2 className='text-center mb-4 fw-bold'>Featured Vehicles</h2>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className='col'>
            <div className='card shadow-sm rounded-lg position-relative'>
              <div className='position-relative'>
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className='card-img-top w-100'
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <span className='position-absolute top-0 start-0 bg-danger text-white px-2 py-1 fs-6 fw-bold'>
                  10% off
                </span>
                <button className='position-absolute top-0 end-0 bg-white p-1 rounded-circle shadow-sm'>
                  <Heart className='w-5 h-5 text-secondary' />
                </button>
              </div>
              <div className='card-body'>
                <h5 className='card-title'>{vehicle.name}</h5>
                <p className='card-text'>
                  <MapPin className='me-1' /> {vehicle.location}
                </p>
                <div className='d-flex justify-content-between text-muted'>
                  <div>
                    <Users className='me-1' /> {vehicle.seats} Seater
                  </div>
                  <div>
                    <Fuel className='me-1' /> {vehicle.fuel}
                  </div>
                  <div>
                    <Settings className='me-1' /> {vehicle.transmission}
                  </div>
                </div>
                <div className='d-flex'>
                  <p className='fs-5 mt-2 mb-1'>{vehicle.price}</p>
                  <p className='text-muted'>for 40 kms without fuel</p>
                </div>
                <p className='fs-5 mt-2 mb-1'>{vehicle.price}</p>
                <p className='text-muted'>for 40 kms without fuel</p>
                <button className='btn btn-primary w-100 mt-3'>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedVehicles
