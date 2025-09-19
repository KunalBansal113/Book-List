import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookById, updateBook } from '../api';

function EditBook() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [book, setBook] = useState({ id: '', title: '', author: '', publishedYear: '' });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await getBookById(id); 
        setBook(res.data);
      } catch (err) {
        console.error("Failed to fetch book:", err);
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id, {
        id: book.id,                 
        title: book.title,
        author: book.author,
        publishedYear: Number(book.publishedYear),
      });
      navigate('/');
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className='text-center'>
      <h1 className=" p-2 mb-2 bg-warning text-dark text-center mb-4 text-white fw-bolder ">Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <input className='text-center'
          name="id" 
          placeholder="Book ID" 
          value={book.id} 
          onChange={handleChange} 
          required 
        />
        <input className='text-center'
          name="title" 
          placeholder="Title" 
          value={book.title} 
          onChange={handleChange} 
          required 
        />
        <input className='text-center'
          name="author" 
          placeholder="Author" 
          value={book.author} 
          onChange={handleChange} 
          required 
        />
        <input className='text-center'
          name="publishedYear" 
          placeholder="Published Year" 
          value={book.publishedYear} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
