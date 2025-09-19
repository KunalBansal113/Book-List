import React, { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../api';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await getBooks();
      setBooks(res.data || []);
    } catch (err) {
      console.error("Failed to fetch books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      fetchBooks();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div
      style={{
        background: "url('/graphic-design-illustration-of-a.jpg') no-repeat center center fixed",
        backgroundSize: "cover",
        minHeight: "100vh",
        paddingTop: "30px",
        paddingBottom: "30px"
      }}
    >
      <div className="container">
        <h1 className=" p-2 mb-2 bg-warning text-dark text-center mb-4 text-white fw-bolder ">Books List</h1>
        <div className="text-center mb-4">
          <Link to="/add">
            <button className="btn btn-primary">Add New Book</button>
          </Link>
        </div>
        <div className="row">
          {books.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-primary">
                <div className="card-header bg-primary text-white text-center">
                  {book.title}
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    ID: {book.id}
                  </h6>
                  <p className="card-text">
                    <strong>Author:</strong> {book.author} <br />
                    <strong>Year:</strong> {book.publishedYear}
                  </p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to={`/edit/${book._id}`}
                      className="btn btn-sm btn-warning"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookList;
