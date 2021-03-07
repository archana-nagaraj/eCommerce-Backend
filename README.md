
# E-Commerce Backend (Object-Relational Mapping (ORM)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description 
This project is about building the back end for an e-commerce site. This application used Express.js API and Sequelize to interact with a MySQL database. This application creates a database using mySQL with models and associations. API Routes are derived to perform RESTful CRUD operations using sequelized models and the same is being tested in Insomnia.

## Table of Contents
* [Installation](#installation)
* [Demonstration](#Demonstration)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Installation 

* Dependencies/Packages
    - Node.js
    - Express.js
    - MySQL2
    - Sequelize
    - dotenv

* Git clone the repo from Github

* Navigate to the folder and run `npm install` in your terminal.

* Be sure to include your MySQL user/password information in .env file.

* Database Connection
    - `mysql -u root -p`
    - `source schema.sql`
    - `npm run seed` [To seed the file]

* Run the app
     - `npm start` [To start the server] and navigate to <http://localhost:3002/> in your browser OR Use Insomnia Core

## Demonstration 
This application will allow users to view, add, edit, and delete categories, products, and tags. Below videos demonstrate the functionality of the e-commerce back end.

1. Walkthrough video covers MySQL shell [Click here](https://drive.google.com/file/d/1aDIpl7tWHzKQ0azCVqr8WziJHOI3ft1V/view)<br>
    * Source the schema <br>
    * Seed the database <br>
    * Start the npm Server
       
2. Walkthrough video covers API routes being tested in Insomnia Core. [Click here](https://drive.google.com/file/d/1M9CpVWk4thP-Rro-VD4ReE9DivpzTRGB/view)<br>
    *  GET routes for all categories, all products, and all tags <br>
    *  GET routes for a single category, a single product, and a single tag by Id<br>
    *  POST, PUT, and DELETE routes for categories, products, and tags

3. Walkthrough video showing all the technical acceptance criteria met. [CLick here](https://drive.google.com/file/d/1j1YjbTw7kyNK469iLeNP5PK7gSsiP0JA/view)<br>
    * Uses the MySQL2 and Sequelize packages to connect to a MySQL database
    * Uses the dotenv package to use environment variables to store sensitive data, like a user’s MySQL username, password, and database name.
    * Syncs Sequelize models to a MySQL database on the server start.
    * Column definitions for all four models
    * Model associations

## License 
This project is licensed under ISC

## Tests
There are no tests for this application. 

## Questions
For any questions about the project/repository please contact me @ [archana.nagaraj@gmail.com](mailto:archana.nagaraj@gmail.com) </br>
GitHub @ [archana-nagaraj](https://github.com/archana-nagaraj) 