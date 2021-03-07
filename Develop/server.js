// Dependencies
// =============================================================
const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3002;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// =============================================================
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
});
