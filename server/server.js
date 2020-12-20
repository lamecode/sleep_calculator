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
	var id = req.params.id;
		const users = await pool.query(
			"SELECT * FROM users WHERE person_id= $1",
			[id]
			);
		res.status(200).json(users.rows[0]);
});

app.get('/user/:id/result', async (req, res) => {
	const id = req.params.id;
		const date = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).toISOString().split("T")[0];
		const newUser = await pool.query("SELECT person_id, date, result FROM results WHERE person_id= $1 AND date= $2",
			[id, date]
			);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(newUser.rows[0]);
});

app.get('/user/:id/advice', async (req, res) => {
	const id = req.params.id;
		const date = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).toISOString().split("T")[0];
		const newUser = await pool.query("SELECT person_id, date, advice FROM results WHERE person_id= $1 AND date= $2",
			[id, date]
			);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(newUser.rows[0]);
});

app.get('/login', async (req, res) => {
	const {username, password} = req.body;
		const newUser = await pool.query("SELECT * FROM users WHERE login= $1 AND password= $2",
			[username, password]
			);
		res.setHeader('Content-Type', 'application/json');
        res.status(200).json(newUser.rows[0]);
});

app.post('/register', async (req, res) => {
	const {username, password} = req.body;
		const newUser = await pool.query("INSERT INTO users(\"login\", \"password\", \"role\") VALUES ($1, $2, $3) RETURNING *",
			[username, password, "user"]
			);
		var person_id = newUser.rows[0].person_id;
		res.setHeader('Content-Type', 'application/json');
        res.status(201).json({ url: '/user/${person_id}'});
});


app.post('/user/:id/result', async (req, res) => {
	const id = req.params.id;
	const {date, result} = req.body;
		const checkIfExist = await pool.query("SELECT * FROM results WHERE person_id= $1 AND date= $2",
			[id, date]
			);
		if (checkIfExist.rows.length != 0) {
			const updateValue = await pool.query("UPDATE results SET result = $3 WHERE person_id= $1 AND date= $2;",
			[id, date, result]
			);
		} else {
			const newUser = await pool.query("INSERT INTO results (person_id, date, result) VALUES ($1, $2, $3) RETURNING *",
			[id, date, result]
			);
		}
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json({ url: '/user/${id}/result'});
});

app.post('/user/:id/advice', async (req, res) => {
	const id = req.params.id;
	const {date, advice} = req.body;
		const checkIfExist = await pool.query("SELECT * FROM results WHERE person_id= $1 AND date= $2",
			[id, date]
			);
		if (checkIfExist.rows.length != 0) {
			const updateValue = await pool.query("UPDATE results SET advice = $3 WHERE person_id= $1 AND date= $2;",
			[id, date, advice]
			);
		} else {
			const newUser = await pool.query("INSERT INTO results (person_id, date, advice) VALUES ($1, $2, $3) RETURNING *",
			[id, date, advice]
			);
		}
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json({ url: '/user/${id}/advice'});
});


app.listen(port, function() {
	console.log('Server is running on localhost:' + port);
})