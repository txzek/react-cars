
function CarCard({ car }) {

  
  return (
    <>
        <div key={car.id} className='col-12 col-sm-6 col-lg-4 col-xl-3'>
            <div className='card h-100 border-0'>
                <div className='poistion-relative'>
                <img src={car.img} alt="car's picture" className='card-img-top' />
                <span className='badge bg-warning text-dark position-absolute'>{car.price}</span>
                </div>

                <div className='card-body'>
                <h5 className='mb-1'>{car.brand}</h5>

                <p className='text-muted small mb-2'>
                    {car.model}, {car.year}
                </p>

                <p className='small text-secondary'>{car.description}</p>

                <button className='btn btn-primary rounded-pill mt-3'>Zobacz ofertę</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CarCard
