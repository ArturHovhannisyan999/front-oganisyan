import './App.css';
import { Navbar } from './components/Navbar';
import LogoImage from './images/logo.png';
import { Products } from './components/Products';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://cloud.codesupply.co/endpoint/react/data.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="app">
      <img className='logo' alt='logo' src={LogoImage}></img>
      <Navbar />
      <Products products={products}/>
    </div>
  );
}

export default App;
