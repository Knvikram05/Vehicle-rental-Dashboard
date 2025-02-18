import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import pop1 from '../images/pop1.png'
import pop2 from '../images/pop2.png'
import pop3 from '../images/pop3.png'
import pop4 from '../images/pop4.png'
import pop5 from '../images/pop5.png'
import pop6 from '../images/pop6.png'

const destinations = [
  { id: 1, name: 'Accra ', image: pop2 },
  { id: 2, name: 'Cape Coast', image: pop6 },
  { id: 3, name: 'Kumasi', image: pop4 },
  { id: 4, name: 'Volta', image: pop1 },
  { id: 5, name: 'Ada Foah', image: pop5 },
  { id: 6, name: 'Busua', image: pop3 },
]

const DestinationCard = ({ destination }) => (
  <div className='col-md-4 mb-3'>
    <div className='card text-white border-0 overflow-hidden'>
      <img
        src={destination.image}
        alt={destination.name}
        className='card-img'
      />
      <div className='card-img-overlay d-flex align-items-center justify-content-center '>
        <h5 className='fw-bold bg-dark bg-opacity-50'>{destination.name}</h5>
      </div>
    </div>
  </div>
)

const PopularDestinations = () => {
  return (
    <section className='container py-5'>
      <h2 className='mb-4 fw-bold'>Popular Car Rental Destinations</h2>
      <div className='row'>
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  )
}

export default PopularDestinations
