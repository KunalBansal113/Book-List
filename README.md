
# Book CRUD App

A full-stack web application built with **React** (frontend) and **Node.js + Express** (backend) that implements **CRUD operations** for managing a list of books. MongoDB Atlas is used as the database.

---

## Live Demo

[View Live App](https://book-list-z7cq.onrender.com)

---

## Features

- Add a new book (with ID, Title, Author, Published Year)
- View a list of books
- Edit book details
- Delete a book
- Responsive UI using Bootstrap

---

## Folder Structure
book-LIST/
│
├─ backend/
│   ├─ models/
│   │   └─ book.js
│   ├─ routes/
│   │   └─ bookRoutes.js
│   ├─ server.js
│   └─ .env
│
├─ frontend/
│   ├─ src/
│   │   ├─ api.js
│   │   ├─ components/
│   │   │   ├─ BookList.js
│   │   │   ├─ AddBook.js
│   │   │   └─ EditBook.js
│   │   └─ App.js
│   └─ public/
│       └─ index.html
│
└─ README.md
npm init -y
cd backend
npm install express mongoose dotenv cors
npm install --save-dev nodemon
MONGO_URI=your_mongodb_connection_string
PORT=5000
npx nodemon server.js
node server.js
cd frontend
npm install react react-dom react-router-dom axios bootstrap
npm start

Running the Project Locally

To run this Book CRUD App locally, first ensure that you have Node.js and npm installed on your system. Start by opening the backend folder in a terminal, install the required dependencies using npm install, and make sure your .env file contains your MongoDB connection string (MONGO_URI) and the port number (PORT=5000). Then, start the backend server with node server.js or npx nodemon server.js if you have nodemon installed. Next, open a second terminal for the frontend, navigate to the frontend folder, install dependencies with npm install, and start the frontend development server using npm start. The app should open in your default browser at http://localhost:3000, allowing you to perform all CRUD operations on books. Optionally, you can use the concurrently package to run both frontend and backend together in a single terminal for convenience.
