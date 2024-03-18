# Backend (Springboot)
## Framework and Features
The backend is build using Springboot, supporting security features such as JWT token. The database contains 2 tables: ``users`` and ``roles``, to ensure scalability. 

## APIs 
- ``/api/auth``
  - ``/signin``
  - ``/signup`` not used in the frontend
- ``/api/home``
  - ``/user``
  - ``/manager``

## Start Server 
Open preferred Java IDE such as IntelliJ. Run the project.
# Frontend (Next 13)
## Framework and Features
The login application frontend is build using Next 13, supported by Chakra-UI components. The app restricts contents based on 2 user types: user and manager and supports 2 languages: English and Chinese. Instructions to navigate in the app, will be in the web app runtime.

## Install Dependencies

```bash
npm install
# or
yarn 
```

## Run 

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.