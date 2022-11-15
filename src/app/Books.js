import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const baseURL = 'https://api.itbook.store/1.0/new';

const Books = () => {
  const navigate = useNavigate();
  const [newBooks, setNewBooks] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const response = await axios.get(baseURL);
        setNewBooks(response.data);
        console.log('Aqui response.data', response.data);
      } catch (error) {
        setError(error);
      }
    };
    sendGetRequest();
  }, []);

  if (!newBooks) {
    return null;
  }
  if (error) {
    return `Lo siento hay un error: ${error.message}`;
  }

  return (
    <div>
      <h1>TechnoBooks</h1>
      <h3>Estos son los nuevos lanzamientos.</h3>

      <div className='row mb-3 justify-content-end'>
        <form className='d-flex col-12 col-md-6' role='search'>
          <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
          <button className='btn btn-dark' type='submit'>Search</button>
        </form>
      </div>

      <div className='row row-cols-1 row-cols-md-5 md-gx-6 gy-4'>
        {
          newBooks.books.map((book, index) => {
            return (
              <div key={index} className='col d-flex align-items-stretch'>
                <div className='card'>
                  <img src={book.image} className='card-img-top' alt='...' />
                  <div className='row card-body d-flex align-content-between'>
                    <h6>Título:</h6>
                    <h5 className='card-title'>{book.title}</h5>
                    <h6>Subtítulo:</h6>
                    <h5 className='card-title'>{book.subtitle}</h5>
                    <h6>Código:</h6>
                    <h6 className='card-title'>{book.isbn13}</h6>
                    <h6>Precio:</h6>
                    <p className='card-text'>{book.price}</p>

                    <button type='button' className='btn btn-warning'
                      onClick={() => navigate(`/books/${book.isbn13}`)}>Ver detalle</button>

                    <button type='button' className='btn btn-dark'>Agregar al carrito <i className='bi bi-cart3 carIcon'></i></button>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Books;

