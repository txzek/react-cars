import { useState, useEffect } from 'react'
import CarCard from './components/CarCard';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  const [model, setModel] = useState('');
  const [marka, setMarka] = useState('');
  const [opis, setOpis] = useState('');
  const [przebieg, setPrzebieg] = useState(0);
  const [rocznik, setRocznik] = useState(0);
  

  const fetchCars = async () => {
    setLoading(true);

    try {
      const url = 'http://localhost:5005/api/cars';

      const response = await fetch(url);
      let data = await response.json();

      if(data) {
        data = data.filter(c => c.brand.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || c.model.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || c.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()));

        setCars(data)
      } else {
        setCars([]);
      }
      console.log(cars);
    } catch (error) {
      console.error("błąd ", error);
    } finally {
      setLoading(false);
    }
  }

  // useEffect(() => {
  //   fetchCars();
  // }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // filterCars();
      fetchCars();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query])

  function addCar() {

  }

  return (
    <>
      <div className='container'>
        <div>
          <div className=''>

            <input type="text" placeholder='szukaj samochodu' value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
        </div>

        {loading ? (
          <div className='text-center py-5'>
            <div className='spinner-border text-primary'>
              <span className='visually-hidden'>Loading...</span>
            </div>
            <p className='mt-3 text-secondary'>Podróżowanie między wymiarami...</p>
          </div>
        ) : (
          <div className='row g4'>
            {cars.map(car =>
              <CarCard car={car} />
            )}
          </div>
        )}
      </div>

      <div className='form w-100'>
        <p className='mx-2'>Model: </p>
        <input className='form-control text-light bg-dark border mb-3' type="text" name='model' value={model} onChange={(e) => setModel(e.target.value)} />

        <p className='mx-2'>Marka: </p>
        <input className='form-control text-light bg-dark border' type="text" name='marka' value={marka} onChange={(e) => setMarka(e.target.value)} />

        <p className='mx-2'>Opis: </p>
        <input className='form-control text-light bg-dark border' type="text" name='opis' value={opis} onChange={(e) => setOpis(e.target.value)} />

        <p className='mx-2'>Rocznik: </p>
        <input className='form-control text-light bg-dark border' type="number" name='rocznik' value={rocznik} onChange={(e) => setRocznik(e.target.value)} />

        <p className='mx-2'>Przebieg: </p>
        <input className='form-control text-light bg-dark border' type="number" name='przebieg' value={przebieg} onChange={(e) => setPrzebieg(e.target.value)} />

        <button className='btn btn-primary mt-3' onClick={() => addCar()}>Dodaj samochód</button>
      </div>
      
    </>
  )
}

export default App
