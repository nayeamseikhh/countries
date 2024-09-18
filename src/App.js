import React, {useState, useEffect } from 'react';
import './App.css';
import Country from './Components/country/Country';
import Cart from './Cart/Cart';


// button event-Handler diclear Here 
function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=> {setCountries(data);})
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
     

  return (
    <div className="App">
     <h1>Country: {countries.length}</h1>
     <h4>Cart Added: {cart.length}</h4>
     <Cart cart = {cart} ></Cart>
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