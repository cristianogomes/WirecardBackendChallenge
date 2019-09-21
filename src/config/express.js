const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../api/routes/v1');
const { sequelize } = require('../api/models');

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    sequelize.sync();
  }

  middlewares() {
    this.express.use(morgan('combined'));
    this.express.use(express.json());
    this.express.use(express.urlencoded());
    this.express.use(helmet());
    this.express.use(cors());
  }

  routes() {
    this.express.use('/v1', routes);
  }
}

module.exports = new App().express;
