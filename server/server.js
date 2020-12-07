const express = require('express');

var port = process.env.PORT || 4000;
const app = express();
const pool = require("./db.js");
const cors = require('cors');

app.use(express.json());
app.use(cors());



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
		const {username, password} = req.body;
		const newUser = await pool.query("INSERT INTO users(login, password, role) VALUES ($1, $2, $3) RETURNING *",
			[username],
			[password],
			"user"
			);
		res.json(newUser.rows[person_id - 1]);
		console.log("success");
	} catch(err) {
		console.error(err.message);
		res.status(404);
	}
});


app.listen(port, function() {
	console.log('Server is running on localhost:' + port);
})