const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage({ text, user, added }) {
  await pool.query(
    "INSERT INTO messages (text, sender, added) VALUES ($1, $2, $3)",
    [text, user, added]
  );
}

async function getMessageDetails(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

module.exports = {
  getMessages,
  insertMessage,
  getMessageDetails,
};
