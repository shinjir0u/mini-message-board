const { Pool } = require("pg");

const local_config = {
  host: "localhost",
  user: "shinji",
  database: "messages",
  password: "%13Az@kdl1*TvR",
  port: 5432,
};

const external_config = {
  connectionString:
    "postgresql://shinji:BnZAIf696GGjJfnpg79UnXZBlpgOUawX@dpg-d23g5pje5dus73ajhc4g-a.oregon-postgres.render.com/messages_f1q6?ssl=true",
};

module.exports = new Pool(external_config);
