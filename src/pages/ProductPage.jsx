import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function ProductPage() {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
  
    useEffect(() => {
      showProducts();
    }, []);
  
    const showProducts = () => {
      axios.get('https://northwind.vercel.app/api/products')
        .then((res) => {
          setProducts(res.data);
        })
        .catch((error) => {
          console.log('HATA:', error);
        });
    };
  
    const addFavoriteProductToRedux = (product) => {
      dispatch({ 
        type: 'AddProduct', product });
    };
    return (
        <>
 <>
      <h1>Total Products: {products.length}</h1>
      <br />
      <table className='w3-table w3-striped'>
        <thead>
          <tr>
            <th>Products Name</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>
                  <button
                    className='w3-button'
                    onClick={() => addFavoriteProductToRedux(product)}>
                    ADD
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>


        </>)
}

export default ProductPage