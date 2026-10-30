📚 Campus Library – GraphQL Project

Course: CS543 – Web Services
Topic: GraphQL
Project: Campus Library Application

1. Introduction

Campus Library is a simple web application that stores authors and their books in a MySQL database.

It uses GraphQL to connect the frontend with the backend.

Main Features:

Display all authors.
Display books written by each author.
Add new books using a form.
Store book details in MySQL.
2. Technologies Used
HTML – Webpage structure
CSS – Webpage design
JavaScript – Frontend functionality
Node.js – Backend
Apollo Server – GraphQL API
GraphQL – Data communication
MySQL – Database
MySQL2 – Database connection
VS Code – Code editor
3. Project Architecture
text
Frontend (HTML + CSS + JS)
           |
           | GraphQL
           v
Backend (Node.js + Apollo)
           |
           | SQL
           v
Database (MySQL)

4. Project Structure
text
campus-library/
│
├── schema.sql
├── db.js
├── server.js
├── package.json
├── README.md
│
└── public/
    ├── index.html
    └── style.css

5. Installation

Install the following software:

Node.js (v18 or newer)
MySQL Community Server
Visual Studio Code
Live Server extension

Check installation:

bash
node -v
npm -v
mysql --version

6. Setup Project

Create the project folder:

bash
mkdir campus-library
cd campus-library


Initialize Node.js:

bash
npm init -y


Install packages:

bash
npm install @apollo/server graphql mysql2

7. Database Setup

Create schema.sql and add:

sql
CREATE DATABASE IF NOT EXISTS gqldemo;
USE gqldemo;

CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(50)
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    year INT,
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

INSERT INTO authors (name, country) VALUES
('Asha Patel', 'India'),
('Ravi Kumar', 'India');

INSERT INTO books (title, year, author_id) VALUES
('Databases 101', 2020, 1),
('SQL in Practice', 2022, 1),
('Web Services Basics', 2023, 2);


Run the SQL file:

bash
mysql -u root -p


Then:

sql
SOURCE schema.sql;

8. Connect MySQL

Create db.js.

Add your MySQL password:

javascript
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'YOUR_MYSQL_PASSWORD',
    database: 'gqldemo'
});

module.exports = pool;

9. GraphQL Backend

Create server.js.

This file contains:

GraphQL schema
Queries
Mutations
Resolvers
Apollo Server

The API provides:

Queries (Read):

authors – Get all authors.
author – Get one author.
books – Get all books.

Mutation (Write):

addBook – Add a new book.

Resolvers execute SQL queries to read and write data in MySQL.

10. Run Backend

Start the GraphQL server:

bash
node server.js


Open:

http://localhost:4000/

11. Test GraphQL Query

Enter this query in Apollo Sandbox:

graphql
query {
    authors {
        name
        country
        books {
            title
            year
        }
    }
}


This displays all authors with their books.

12. Test GraphQL Mutation

Enter:

graphql
mutation {
    addBook(
        title: "GraphQL for Beginners"
        year: 2025
        authorId: "2"
    ) {
        id
        title
        year
    }
}


This adds a new book for Ravi Kumar.

13. Frontend Setup

Inside the public folder, create:

index.html – Displays authors and books and contains the add-book form.
style.css – Designs the webpage.

The JavaScript in index.html performs two operations:

READ: Fetches authors and books using a GraphQL query.
WRITE: Adds a new book using a GraphQL mutation.
14. Run Complete Application
Start the MySQL server.
Run the backend:
bash
node server.js

Open VS Code.
Right-click public/index.html.
Select Open with Live Server.

Frontend URL:

http://127.0.0.1:5500

Backend URL:

http://localhost:4000/

15. Verify Database

To check the inserted books:

sql
USE gqldemo;

SELECT * FROM authors;

SELECT * FROM books;

16. Conclusion

The Campus Library project demonstrates how HTML, CSS, JavaScript, Node.js, GraphQL, and MySQL work together.

We successfully implemented:

Database creation using MySQL.
GraphQL API using Apollo Server.
Query to read authors and books.
Mutation to add new books.
Frontend webpage to display and insert data.

Project Status: Completed
Course: CS543 – Web Services
