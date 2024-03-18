# Login Application Overview

This login application is designed with scalability and security in mind. The backend is developed using Spring Boot, incorporating JWT for security, while the frontend is built with Next.js (Next 13) and utilizes Chakra UI for a sleek user interface.

## Repositories

- **Backend**: [https://github.com/chelleadel/loginapp](https://github.com/chelleadel/loginapp)
- **Frontend**: [https://github.com/chelleadel/login-application](https://github.com/chelleadel/login-application)

## Backend: Spring Boot

The Spring Boot backend is a robust platform that includes features like JWT authentication. It interacts with a database comprising two main tables: `users` and `roles`, ensuring the application is ready for future expansion.

### APIs

The backend provides several API endpoints grouped under:

- **Authentication** (`/api/auth`)
  - Sign In: `/signin`
  - Sign Up (unused in frontend): `/signup`
- **Home** (`/api/home`)
  - User: `/user`
  - Manager: `/manager`

### Starting the Backend Server

To start the server:

1. Open your preferred Java IDE (e.g., IntelliJ IDEA).
2. Run the project to launch the backend server.

## Frontend: Next.js 13

The frontend of the login application leverages Next.js 13, enhanced with Chakra UI components for an intuitive user experience. It features content restriction based on user roles (user and manager) and offers multilingual support (English and Chinese). Usage instructions are provided within the web application.

### Installing Dependencies

To install required dependencies, run the following in your terminal:

```bash
npm install
# or, if you use Yarn:
yarn
```

### Running the Frontend

To start the development server:

```bash
npm run dev
# or, if you use Yarn:
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.