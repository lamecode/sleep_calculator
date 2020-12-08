const express = require('express');

var port = process.env.PORT || 4000;
const app = express();
const pool = require("./db.js");


app.use(express.json());
const cors = require('cors');
app.use(cors({
	origin: "http://localhost:3000",
	credentials: true
}));



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
		console.log("a");
		const {username, password} = req.body;
		const newUser = await pool.query("INSERT INTO users(\"login\", \"password\", \"role\") VALUES ($1, $2, $3) RETURNING *",
			[username, password, "user"]
			);
		const credentials_id = await pool.query("SELECT MAX(person_id) FROM users");
		console.log(newUser.rows[0].person_id);
		res.json(newUser.rows[credentials_id]);
		console.log("success");
	} catch(err) {
		console.error(err.message);
		res.status(404);
	}
});


app.listen(port, function() {
	console.log('Server is running on localhost:' + port);
})