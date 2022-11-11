import axios from 'axios';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const baseURL = 'https://api.itbook.store/1.0/new';

function App() {
  const [newBooks, setNewBooks] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNewBooks(response.data);
      console.log('AQUI Books', newBooks.books);
    });

  }, []);

  if (!newBooks) return null;

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <a
            className='App-link'
            href='#'
            target='_blank'
            rel='noopener noreferrer'
          >
            Books
          </a>
          <i className="bi bi-cart3 carIcon"></i>
        </header>
      </div>
      <div>
        <h1>TechnoBooks</h1>
        <h3>Estos son los libros recientemente agregados.</h3>

        {/* Inicio contenedor book cards */}
        <div className="row row-cols-1 row-cols-md-5 md-gx-6 gy-4">
          {
            newBooks.books.map(function (book, index) {
              return (
                <>
                  <div className="col d-flex align-items-stretch">
                    <div key={index} className="card">
                      <img src={book.image} className="card-img-top" alt="..." />
                      <div className="row card-body d-flex align-content-between">
                        <h6>Título:</h6>
                        <h5 className="card-title">{book.title}</h5>
                        <h6>Subtítulo:</h6>
                        <h5 className="card-title">{book.subtitle}</h5>
                        <h6>Código:</h6>
                        <h6 className="card-title">{book.isbn13}</h6>
                        <h6>Precio:</h6>
                        <p className="card-text">{book.price}</p>

                        <button type="button" className="btn btn-dark">Agregar al carrito <i className="bi bi-cart3 carIcon"></i></button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          }
        </div> {/* Fin contenedor book cards */}
      </div>
    </>
  );
}

export default App;
