-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS library_system;
USE library_system;

-- Create Books table
CREATE TABLE IF NOT EXISTS Books (
    book_id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    number_of_copies INT DEFAULT 0,
    availability INT DEFAULT 0
);

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    user_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user'
);

-- Create loan table for tracking borrowings
CREATE TABLE IF NOT EXISTS loan (
    borrowing_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(50),
    book_id VARCHAR(50),
    borrow_date DATE,
    return_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES Books(book_id) ON DELETE CASCADE
);
