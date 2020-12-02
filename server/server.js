const express = require('express');

var port = process.env.PORT || 4000;
const app = express();
const pool = require("./db");

app.use(express.json());


app.get('/', function(req, res) {
	res.send('SOBAKA');
});

app.get('/register', async (req, res) => {
	try {
		const {person_id, login, password} = req.body;
		const users = await pool.query(
			"SELECT * FROM users"
			);
		res.json(users.rows);
	} catch(err) {
		console.error(err.message);
		res.status(404);
	}
});

app.post('/register', async (req, res) => {
	try {
		const {person_id, login, password} = req.body;
		const newUser = await pool.query(
			"INSERT INTO users VALUES ($1, $2, $3) RETURNING *",
			[person_id],
			[login],
			[password]
			);
		res.json(newUser.rows[person_id - 1]);
	} catch(err) {
		console.error(err.message);
		res.status(404);
	}
});


app.listen(port, function() {
	console.log('Server is running on localhost:' + port);
})