# Blog Backend

This is the backend of a blogging application built with Node.js, Express, and MongoDB. It supports user authentication, and allows users to create, read, update, and delete blog posts.

## Features

- **User Authentication**: User registration and login with JWT authentication.
- **Blog CRUD Operations**: Create, read, update, and delete blogs.
- **Data Ownership**: Blogs can only be updated or deleted by the user who created them.
- **API Documentation**: Interactive API documentation using Swagger UI.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database to store blog data and user information.
- **JWT**: JSON Web Tokens for user authentication.
- **Swagger UI**: Interactive API documentation.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/iamRajatSharma/blog-backend.git
   cd blog-backend

   ```

2. Install dependency:

   ```bash
   npm install

   ```

3. Configure environment variables: Create/Copy a .env.sample file and Create/Copy a new .env file and change the all variable according to your configuration

4. Run project:
   ```bash
   npm start
   ```

## Swagger UI

- You can view and test the API endpoints at **http://localhost:5000/api-docs**.
