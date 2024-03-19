const dotenv = require('dotenv').config().parsed;

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: dotenv.DB_USERNAME,
  password: dotenv.DB_PASSWORD,
  database: 'tasklist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
