
# E-Commerce Backend (Object-Relational Mapping (ORM))
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

Walkthrough video covers MySQL shell [Click here]()<br>
    * Create the schema <br>
    * Seed the database <br>
    * Start the npm Server
       
Walkthrough video covers API routes being tested in Insomnia Core. [Click here]()<br>
    *  GET routes for all categories, all products, and all tags <br>
    *  GET routes for a single category, a single product, and a single tag <br>
    *  POST, PUT, and DELETE routes for categories, products, and tags

## License 
This project is licensed under ISC

## Tests
There are no tests for this application. 

## Questions
For any questions about the project/repository please contact me @ [archana.nagaraj@gmail.com](mailto:archana.nagaraj@gmail.com) </br>
GitHub @ [archana-nagaraj](https://github.com/archana-nagaraj) 