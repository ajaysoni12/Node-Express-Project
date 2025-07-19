# Node.js + Express CRUD API with PostgreSQL & Docker

This is a simple CRUD (Create, Read, Update, Delete) REST API project built using **Node.js**, **Express**, and **PostgreSQL**, containerized using **Docker**.

## 📦 Features

- 🚀 Create, Read, Update, and Delete users
- ✅ Input validation using `Joi`
- 🔐 Centralized error handling
- 🌐 CORS enabled
- 🐳 Dockerized with PostgreSQL database
- 📁 Organized folder structure

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Docker**
- **pg (node-postgres)**
- **Joi** for validation

## 📂 Project Structure

```
.
├── controllers/         # Route logic
├── models/              # Database queries
├── routes/              # API endpoints
├── middleware/          # Error handler, validators, etc.
├── .env                 # Environment variables
└── index.js            # Entry point
```

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ajaysoni12/Node-Express-Project.git
cd Node-Express-Project
```

### 2. Create `.env` file
```env
PORT=5000
DB_HOST=host.docker.internal
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=yourdbname
```

### 3. Run with Docker
```bash
docker-compose up --build
```

This will start both the Node.js app and PostgreSQL in separate containers.

## 🔗 API Endpoints

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| GET    | `/users`           | Get all users        |
| GET    | `/users/:id`       | Get user by ID       |
| POST   | `/users`           | Create new user      |
| PUT    | `/users/:id`       | Update user by ID    |
| DELETE | `/users/:id`       | Delete user by ID    |

## 🧪 Testing API

Use tools like **Postman**, **Thunder Client**, or **cURL** to test the API endpoints.

---

### Made with ❤️ by [Ajay Soni](https://github.com/ajaysoni12)
