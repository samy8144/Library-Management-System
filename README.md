# Library Management System

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/Node.js-22.x-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)
![MySQL](https://img.shields.io/badge/MySQL-8.x-blue?logo=mysql)
![EJS](https://img.shields.io/badge/EJS-3.x-orange?logo=ejs)

## 📖 Project Description and Purpose

A comprehensive web-based **Library Management System** designed to digitize and streamline library operations. This application provides a complete solution for managing books, tracking user borrowing history, and maintaining an organized catalog system.

**Purpose:**
- Automate library workflows to reduce manual administrative tasks
- Provide real-time book availability tracking
- Maintain detailed borrowing records with due dates
- Enable efficient search and discovery of books
- Support multi-user management with role-based access

**Benefits:**
- Reduces human errors in record-keeping
- Improves user experience with instant book searches
- Tracks overdue books with automatic date calculations
- Scalable solution suitable for schools, community libraries, and small institutions

## 📸 Screenshots of Running Application

Below are screenshots of the fully functional Library Management System:

### Borrow Books Interface
![Borrow Books](ui%20ss/borrow%20books.bmp)
*Streamlined process for issuing and returning books with automatic due date calculation (15-day loan period).*

### User Management Dashboard
![User Management](ui%20ss/users.bmp)
*Manage library members, view complete borrowing history, and update user details with role-based access.*

### Book Inventory Management
![Book Inventory](ui%20ss/books.bmp)
*View, add, edit, and track book copies in the library catalog with real-time availability status.*



---

## ✨ Features

-   **📚 Book Management**: add new books, update copies, and view detailed information.
-   **👥 User Management**: Register new users, update profiles, and manage permissions.
-   **🔄 Borrowing System**: Track borrowed books, due dates, and return status.
-   **🔍 Advanced Search**: Find books by title, author, genre, or ISBN.
-   **🔐 Authentication**: Secure user login and registration system.
-   **RESPONSIVE UI**: Clean and intuitive interface built with EJS templates.

## 🛠️ Complete Tech Stack

### Languages
-   **JavaScript** (Node.js runtime environment)
-   **SQL** (MySQL database queries)
-   **HTML5** (Structure and markup)
-   **CSS3** (Styling and layout)

### Backend Framework
-   **Node.js** (v22.x) - JavaScript runtime
-   **Express.js** (v4.x) - Web application framework

### Database
-   **MySQL** (v8.x) - Relational database management system
-   **mysql2** - MySQL client for Node.js with connection pooling

### Templating Engine
-   **EJS** (Embedded JavaScript Templates) - Dynamic HTML rendering

### Key Node.js Packages
-   **body-parser** - Parse incoming request bodies (JSON & URL-encoded)
-   **dotenv** - Environment variable management
-   **express** - Web framework for routing and middleware

### Development Tools
-   **npm** - Package manager
-   **Git** - Version control

### APIs
-   **RESTful APIs** - Built-in Express routes for CRUD operations
-   No external third-party APIs used

## 🚀 Step-by-Step Setup and Installation Instructions

### Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   [MySQL Server](https://dev.mysql.com/downloads/mysql/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/samy8144/Library-Management-System.git
    cd Library-Mangement-System
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(Refer to `requirements.txt` or `package.json` for version details)*

3.  **Configure Database:**
    -   Ensure your MySQL server is running.
    -   Create the database and tables using the provided script:
        ```bash
        mysql -u root -p < setup_database.sql
        ```
    -   Create a `.env` file in the root directory and update your credentials:
        ```env
        DB_HOST=localhost
        DB_USER=root
        DB_PASS=your_password
        DB_NAME=library_system
        ```

4.  **Start the Application:**
    ```bash
    npm start
    ```
    The server will start on port `6174`.

5.  **Access the App:**
    Open your browser and navigate to: [http://localhost:6174](http://localhost:6174)

## 📂 Project Structure

```
Library-Mangement-System/
├── connection.js          # Database connection configuration
├── index.js               # Main application entry point
├── package.json           # Project dependencies and scripts
├── requirements.txt       # List of dependencies (version locked)
├── setup_database.sql     # SQL script for database initialization
├── views/                 # EJS templates (implied structure)
│   ├── home.html          # Landing page
│   ├── users.ejs          # User list view
│   ├── borrowings.ejs     # Borrowing history view
│   └── ...
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## 📄 License

This project is licensed under the MIT License.

