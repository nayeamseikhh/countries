import React, {useState, useEffect } from 'react';
import './App.css';
import Country from './Components/country/Country';

const handleAddCountry = (country) => {
  console.log('country added', country)} 
// button event-Handler diclear Here 
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=> {setCountries(data);})
  }, [])
  return (
    <div className="App">
     <h1>Country: {countries.length}</h1>
     {
      countries.map(country=> <Country country= {country} handleAddCountry={handleAddCountry} key={country.name.common}></Country>)
      //* data/parametar send=      handleAddCountry={handleAddCountry}
      //* data/parametar send=      country= {country}
      //* key is define for error 
     }
    </div>
  );
}

export default App;