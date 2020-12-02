const Pool = require('pg').Pool;

const pool = new Pool({
	user: "postgres",
	password: "ZhutSobaka",
	database: "sleep_calculator",
	host: "localhost",
	port: 5432
});

module.exports = pool;