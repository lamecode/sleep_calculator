const express = require('express');

var port = process.env.PORT || 4000;
const app = express();
const pool = require("./db.js");
const path = require('path');


app.use(express.json());
const cors = require('cors');
app.use(cors({
	origin: "http://localhost:3000",
	credentials: true
}));



app.get('/', function(req, res) {
	res.send('SOBAKA');
});

app.get('/user/:id', async (req, res) => {
	try {
		var id = req.params.id;
		const users = await pool.query(
			"SELECT * FROM users WHERE person_id= $1",
			[id]
			);
		res.status(200).json(users.rows[0]);
	} catch(err) {
		console.error(err.message);
		res.status(404);
	}
});

app.post('/register', async (req, res) => {
	try {
		const {username, password} = req.body;
		const newUser = await pool.query("INSERT INTO users(\"login\", \"password\", \"role\") VALUES ($1, $2, $3) RETURNING *",
			[username, password, "user"]
			);
		var person_id = newUser.rows[0].person_id;
		res.setHeader('Content-Type', 'application/json');
        res.status(201).json({ url: '/user/${person_id}'});
	} catch(err) {
		console.error(err.message);
		res.status(404);
	}
});

app.post('/user/result', async (req, res) => {
	try {
		const {id, date, result} = req.body;
		const newUser = await pool.query("INSERT INTO users VALUES ($1, $2, $3) RETURNING *",
			[id, date, result]
			);
		response.writeHead(201, {
             'Content-Type': 'application/json',
        });
        res.json({ url: '/user/:id/result'});
	} catch(err) {
		console.error(err.message);
		res.status(404);
	}
});


app.listen(port, function() {
	console.log('Server is running on localhost:' + port);
})