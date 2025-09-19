import React, { useState } from 'react';
import { addBook } from '../api';
import { useNavigate } from 'react-router-dom';

function BookForm() {
  const [book, setBook] = useState({ id: '', title: '', author: '', publishedYear: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook(book); 
      navigate('/');
    } catch (err) {
      console.error("Failed to add book:", err);
    }
  };

  return (
    <div className='text-center'>
      <h1 className=" p-2 mb-2 bg-warning text-dark text-center mb-4 text-white fw-bolder ">Add New Book</h1>
      <form onSubmit={handleSubmit} >
        <input className='text-center'
          name="id"
          value={book.id}
          onChange={handleChange}
          placeholder="Book ID"
          required
        />
        <input input className='text-center'
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input input className='text-center'
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author"
          required
        />
        <input input className='text-center'
          name="publishedYear"
          type="number"
          min="0"
          value={book.publishedYear}
          onChange={handleChange}
          placeholder="Published Year"
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
