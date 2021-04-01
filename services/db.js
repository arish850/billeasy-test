const { Pool } = require("pg");
const config = require("../config");
const pool = new Pool(config.db);

async function query(query) {
  const rows = await pool.query(query);
  return rows.rows;
}

module.exports = {
  query,
};
