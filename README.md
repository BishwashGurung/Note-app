# Note App
This Note App is built using React.js for the frontend and Django REST framework for the backend. It utilizes SQLite as the database. Users are required to login to create and manage notes. The app employs JWT token-based authentication for security along with Django's built-in security features.

## Features
- User Authentication: Users must login to create and manage notes. Registration is required for new users.
- JWT Token Authentication: JWT tokens are used for user authentication, providing secure access to the app's functionalities.
- Note Creation: Authenticated users can create new notes, providing a title and content.
- Note Deletion: Users can delete their own notes.
- Security Features: Utilizes Django's built-in security features to ensure secure data management and user authentication.

## Technologies Used
- Frontend:
  - React.js: A JavaScript library for building user interfaces.
  - JWT Authentication: Token-based authentication mechanism for securing frontend-backend communication.

- Backend:
  - Django REST Framework: A powerful and flexible toolkit for building Web APIs in Django.
  - SQLite: A lightweight relational database management system.
