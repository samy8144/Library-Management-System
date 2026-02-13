# Library Management System

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/Node.js-22.x-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)
![MySQL](https://img.shields.io/badge/MySQL-8.x-blue?logo=mysql)
![EJS](https://img.shields.io/badge/EJS-3.x-orange?logo=ejs)

A comprehensive web-based Library Management System built with Node.js, Express, and MySQL. This application streamlines library operations, allowing for efficient management of books, users, and borrowing records.

## 📸 UI Preview

### Home Page
![Home Page Placeholder](https://placehold.co/800x400?text=Home+Page+Screenshot)
*The main landing page providing quick access to all features.*

### User Management
![User Management Placeholder](https://placehold.co/800x400?text=User+Management+Screenshot)
*Manage library members, view borrowing history, and update user details.*

### Book Inventory
![Book Inventory Placeholder](https://placehold.co/800x400?text=Book+Inventory+Screenshot)
*View, add, and update book copies in the library catalog.*

### Borrow & Return
![Borrowing System Placeholder](https://placehold.co/800x400?text=Borrowing+System+Screenshot)
*Streamlined process for issuing and returning books.*

---

## ✨ Features

-   **📚 Book Management**: add new books, update copies, and view detailed information.
-   **👥 User Management**: Register new users, update profiles, and manage permissions.
-   **🔄 Borrowing System**: Track borrowed books, due dates, and return status.
-   **🔍 Advanced Search**: Find books by title, author, genre, or ISBN.
-   **🔐 Authentication**: Secure user login and registration system.
-   **RESPONSIVE UI**: Clean and intuitive interface built with EJS templates.

## 🛠️ Tech Stack

-   **Backend**: Node.js, Express.js
-   **Database**: MySQL (using `mysql2` driver)
-   **Templating**: EJS (Embedded JavaScript)
-   **Environment Management**: `dotenv`

## 🚀 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   [MySQL Server](https://dev.mysql.com/downloads/mysql/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mohnish-srshetty/Library-Mangement-System.git
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

## 👤 Author

-   [Mohnish S Shetty](https://github.com/mohnish-srshetty)
