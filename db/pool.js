const { Pool } = require("pg");

const config = {
  host: "localhost",
  user: "shinji",
  database: "messages",
  password: "%13Az@kdl1*TvR",
  port: 5432,
};

module.exports = new Pool(config);
