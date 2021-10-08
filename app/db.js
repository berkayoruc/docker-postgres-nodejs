const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "123456",
  host: "db",
  database: "postgres",
});

const getMethod = (request, response) => {
  const sql = "select * from roles";
  pool.query(sql, [], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getMethod,
};
