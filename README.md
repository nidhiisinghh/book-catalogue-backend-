# Book Catalogue Backend 📚

This is a Node.js/Express backend for a Book Catalogue application. It provides user authentication and book management features, using a modular structure with controllers, routes, and middleware.

## Features
- User registration and login (authentication)
- JWT-based protected routes
- CRUD operations for books
- Error handling middleware

## Project Structure
```
controllers/
  authController.js      # Handles user authentication logic
  bookController.js      # Handles book CRUD logic
db/
  models/
    user.js              # User model
    book.js              # Book model
index.js                 # Entry point
middleware/
  auth.js                # Auth middleware (JWT)
  errorHandler.js        # Error handling middleware
routes/
  auth.js                # Auth routes
  books.js               # Book routes
```

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm
- MongoDB (local or cloud)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/nidhiisinghh/book-catalogue-backend-.git
   cd book-catalogue-backend-
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```
4. Start the server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:5000` by default.

## API Endpoints

### Auth
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive a JWT

### Books (Protected)
- `GET /api/books` — Get all books
- `GET /api/books/:id` — Get a book by ID
- `POST /api/books` — Add a new book
- `PUT /api/books/:id` — Update a book
- `DELETE /api/books/:id` — Delete a book

> All `/api/books` routes require a valid JWT in the `Authorization` header.

## Example Requests

**Register:**
```http
POST /api/auth/register
Content-Type: application/json
{
  "username": "testuser",
  "password": "password123"
}
```

**Login:**
```http
POST /api/auth/login
Content-Type: application/json
{
  "username": "testuser",
  "password": "password123"
}
```

**Get Books (with JWT):**
```http
GET /api/books
Authorization: Bearer <your_jwt_token>
```

## License

This project is open source and available under the [MIT License](LICENSE). 