import './App.css';
import { useEffect, useState } from 'react';



const apiEndpoint = {
  baseUrl: `https://random-data-api.com/api/v2`,

  get BEERS() {
    return `${this.baseUrl}/beers`;
  }
}

function useRandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNewBeer = () => {
    setLoading(true);
    setError(null);

    fetch(apiEndpoint.BEERS)
      .then(r => r.json())
      .then(beer => {
        setRandomBeer(beer)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchNewBeer();
  }, [])

  return { randomBeer, loading, setLoading, error, fetchNewBeer };
}

function App() {
  const { 
    randomBeer, 
    loading, 
    error, 
    fetchNewBeer 
  } = useRandomBeer();

  if(loading){
    return `Fermentando..`;
  }

  if(error || !randomBeer){
    return `Errore di connessione al server, provare a ricaricare la pagina`;
  }

  const {brand, name, style, alcohol, malts, ibu} = randomBeer;

  return (
    <div className="App">
      <div className='card'>
        <h1>{brand} - {name}</h1>
        <h2>{style} - {alcohol}</h2>
        <div className='paragraphs'>
          <p>Type of malt: {malts}</p>
          <p>{ibu}</p>
        </div>  
      </div>
      <button onClick={() => fetchNewBeer()}>🍺</button>
    </div>
  );
}

export default App;
