import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage';
import Favorites from './pages/Favorites';

function App() {
  return (
    <>
    <ul style={{display:'flex', justifyContent:'space-evenly'}}>
      <li><Link to='/'>Products Page</Link></li>
      <li><Link to='/favorites'>Favorites</Link></li>

    </ul>
    <Routes>
      <Route path='/' element={<ProductPage />}></Route>
      <Route path='/favorites' element={<Favorites />}></Route>
    </Routes>
  </>
  );
}

export default App;
