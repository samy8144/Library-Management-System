![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/Node.js-22.x-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)
![EJS](https://img.shields.io/badge/EJS-3.x-orange?logo=ejs)
![npm](https://img.shields.io/badge/npm-10.x-red?logo=npm)
![GitHub last commit](https://img.shields.io/github/last-commit/mohnish-srshetty/Library-Mangement-System)
![GitHub issues](https://img.shields.io/github/issues/mohnish-srshetty/Library-Mangement-System)
![GitHub pull requests](https://img.shields.io/github/issues-pr/mohnish-srshetty/Library-Mangement-System)
![GitHub stars](https://img.shields.io/github/stars/mohnish-srshetty/Library-Mangement-System?style=social)

# Library Management System

A web-based Library Management System built with Node.js and EJS templates. This application allows users to manage books, users, borrowings, and book copies efficiently.

## Features

- **Book Management:** Add, view, and update book copies.
- **User Management:** Register new users and manage user data.
- **Borrowing System:** Borrow and return books, track borrowings.
- **Search Functionality:** Search for books and users.
- **Authentication:** User login and registration.
- **Responsive UI:** Simple HTML and EJS-based interface.

## Folder Structure

```
Library Mangement System/
├── bookcopies.ejs         # EJS template for displaying book copies
├── borrowbook.html        # HTML page for borrowing books
├── borrowings.ejs         # EJS template for borrowings list
├── connection.js          # Database connection logic
├── home.html              # Main landing page
├── index.js               # Main server file (Node.js/Express)
├── login.html             # User login page
├── newuser.html           # User registration page
├── package.json           # Project metadata and dependencies
├── search.ejs             # EJS template for search results
├── table.ejs              # EJS template for displaying tables
├── tempCodeRunnerFile.js  # Temporary file for code runner
├── update_copy.ejs        # EJS template for updating book copies
└── users.ejs              # EJS template for user list
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd "Library Mangement System"
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure the database:**
   - Edit `connection.js` with your database credentials (e.g., MySQL, MongoDB, etc.).
   - Ensure your database is running and accessible.

4. **Start the server:**
   ```sh
   node index.js
   ```
   The server will start on the port specified in `index.js` (commonly `6174`).

5. **Access the application:**
   - Open your browser and go to `http://localhost:6174`

## Usage

- **Home Page:** Overview and navigation.
- **Login/Register:** Authenticate or create a new user.
- **Borrow Books:** Select books to borrow and manage borrowings.
- **Manage Users:** View and update user information.
- **Manage Books:** Add new books, update copies, and view book details.
- **Search:** Find books or users by keywords.

## Technologies Used

- **Node.js**: Backend runtime
- **Express.js**: Web framework
- **EJS**: Templating engine for dynamic HTML
- **HTML/CSS**: Frontend structure and styling
- **Database**: (Specify your DB, e.g., MySQL, MongoDB)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Author

- [Mohnish S Shetty](https://github.com/mohnish-srshett)

