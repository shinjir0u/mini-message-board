const { Pool } = require("pg");
require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URL;

const local_config = {
  host: "localhost",
  user: "shinji",
  database: "messages",
  password: "%13Az@kdl1*TvR",
  port: 5432,
};

const external_config = {
  connectionString: DATABASE_URL,
};

module.exports = new Pool(external_config);
