import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Book = () => {
    const params = useParams();
    const urlBook = `https://api.itbook.store/1.0/books/${params.book_id}`;
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBook = async () => {
            try {
                const response = await axios.get(urlBook);
                setBook(response.data);
            } catch (error) {
                setError(error);
            }
        };
        getBook();
    }, []);

    if (!book) {
        return null;
    }
    if (error) {
        return `Lo siento hay un error: ${error.message}`;
    }

    return (
        <div>
            <h1><b>Título: </b>{book.title}</h1>
            <h6><b>Subtítulo: </b>{book.subtitle}</h6>
            <img src={book.image} alt='...' />
            <p><b>Autor(es):</b> {book.authors}</p>
            <p><b>Publicado por:</b> {book.publisher}</p>
            <p><b>Código del libro:</b> {book.isbn13}</p>
            <p><b>Año de publicación:</b> {book.year}</p>
            <p><b>Precio:</b>{book.price}</p>
            <p><b>Descripción:</b>{book.desc}</p>
            <p><b>Caificación del libro:</b>{book.rating}</p>
        </div>
    );
};

export default Book;