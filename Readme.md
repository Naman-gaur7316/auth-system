# Auth System Documentation

## Overview

This project is a full-stack authentication system with a **React + Vite** frontend and a **Node.js + Express + MongoDB** backend. It supports user registration and login with JWT-based authentication.

---

## Backend

**Location:** [`backend/`](backend/)

### Tech Stack

- Node.js
- Express
- MongoDB (Mongoose)
- JWT for authentication
- Zod for validation

### Structure

- [`index.js`](backend/index.js): Entry point, sets up Express, connects to DB, and mounts routes.
- [`DB/db.js`](backend/DB/db.js): MongoDB connection logic.
- [`models/user.model.js`](backend/models/user.model.js): User schema, password hashing, JWT methods.
- [`controllers/user.controller.js`](backend/controllers/user.controller.js): Signup and login logic.
- [`routes/user.route.js`](backend/routes/user.route.js): User-related API endpoints.
- [`middleware/validate.js`](backend/middleware/validate.js): Request validation middleware using Zod.
- [`validations/user.validation.js`](backend/validations/user.validation.js): Zod schemas for user input validation.
- `.env`: Environment variables (port, DB URL, JWT secret).

### API Endpoints

- `POST /api/v1/user/register`  
  Registers a new user. Requires `name`, `email`, and `password`.
- `POST /api/v1/user/login`  
  Logs in a user. Requires `email` and `password`.

---

## Frontend

**Location:** [`frontend/`](frontend/)

### Tech Stack

- React (with Vite)
- React Router
- Axios
- Tailwind CSS
- React Toastify

### Structure

- [`src/main.jsx`](frontend/src/main.jsx): App entry, sets up routing and context.
- [`src/App.jsx`](frontend/src/App.jsx): Main app component, defines routes.
- [`src/AuthContext.jsx`](frontend/src/AuthContext.jsx): React context for authentication state.
- [`src/pages/RegisterPage.jsx`](frontend/src/pages/RegisterPage.jsx): Registration form and logic.
- [`src/pages/LoginPage.jsx`](frontend/src/pages/LoginPage.jsx): Login form and logic.
- [`src/pages/Dashboard.jsx`](frontend/src/pages/Dashboard.jsx): Protected dashboard page.
- [`src/index.css`](frontend/src/index.css): Tailwind CSS import.

### Features

- User registration and login forms.
- Stores JWT token in `localStorage` after login/register.
- Shows toast notifications for success/error.
- Redirects authenticated users to the dashboard.
- Logout functionality.

---

## Running the Project

### Backend

#### Installation & Running

1. **Install dependencies:**
   ```sh
   cd backend
   npm install
   ```

2. **Set up environment variables:**
   - Create a `.env` file in the `backend/` directory.
   - Add the following variables:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

3. **Start the backend server:**
   ```sh
   npm start
   ```
   The backend will run on `http://localhost:3000` by default.

### Frontend

1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```

2. Start the development server:
   ```sh
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` by default.

---

## Usage

1. Register a new user via the frontend registration form.
2. Login with the registered user credentials.
3. Access the protected dashboard page.
4. Logout from the account.

---

## Notes

- Ensure MongoDB is running before starting the backend server.
- Use Postman or similar tool for API testing if needed.
- Frontend and backend can be run on the same machine with default ports, but ensure no other services are using `3000` and `5173` ports.