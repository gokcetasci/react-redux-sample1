import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function Favorites() {
    const favoriteProducts = useSelector((state) => state.favoriteProducts);
  const dispatch = useDispatch();

  const handleDelete = (product) => {
    dispatch({
      type: 'DeleteFavorite',
      product,
    });
  };
  return (<>
   <h1>Favorites: {favoriteProducts.length}</h1>
      <table className='w3-table w3-striped'>
        <thead>
          <tr>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {favoriteProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <button className='w3-button' onClick={() => handleDelete(product)}>REMOVE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  </>
  )
}

export default Favorites