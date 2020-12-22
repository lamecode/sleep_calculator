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

app.get('/users/:id', async (req, res) => {
	var id = req.params.id;
		const users = await pool.query(
			"SELECT * FROM users WHERE person_id= $1",
			[id]
			);
		res.status(200).json(users.rows[0]);
});

app.get('/users/:id/result', async (req, res) => {
	const id = req.params.id;
		const date = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).toISOString().split("T")[0];
		const newUser = await pool.query("SELECT person_id, date, result FROM results WHERE person_id= $1 AND date= $2",
			[id, date]
			);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(newUser.rows[0]);
});

app.get('/users/:id/advice', async (req, res) => {
	const id = req.params.id;
		const date = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).toISOString().split("T")[0];
		const newUser = await pool.query("SELECT person_id, date, advice FROM results WHERE person_id= $1 AND date= $2",
			[id, date]
			);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(newUser.rows[0]);
});

app.get('/users/:id1/chat/:id2', async (req, res) => {
	const id1 = req.params.id1;
	const id2 = req.params.id2;
		const date = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).toISOString().split("T")[0];
		const messages = await pool.query("SELECT t1.login, message, date, time FROM messages JOIN users AS t1 ON t1.person_id=messages.sender_id WHERE ((sender_id=$1 AND receiver_id=$2) OR (sender_id=$2 AND receiver_id=$1))AND date=TO_CHAR(current_date, \'YYYY-MM-DD\')",
			                    [id1, id2]
			    );
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(messages.rows);
});

app.get('/user/clients', async (req, res) => {
	const clients_list = await pool.query("SELECT person_id FROM users WHERE role=\'user\'");
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(clients_list.rows);
});

app.post('/login', async (req, res) => {
	const {username, password} = req.body;
		const newUser = await pool.query("SELECT * FROM users WHERE login= $1 AND password= $2",
			[username, password]
			);
		var person_id = newUser.rows[0].person_id;
		res.setHeader('Content-Type', 'application/json');
        res.status(201).json({ url: '/users/${person_id}'});
});

app.post('/register', async (req, res) => {
	const {username, password} = req.body;
		const newUser = await pool.query("INSERT INTO users(\"login\", \"password\", \"role\") VALUES ($1, $2, $3) RETURNING *",
			[username, password, "user"]
			);
		var person_id = newUser.rows[0].person_id;
		res.setHeader('Content-Type', 'application/json');
        res.status(201).json({ url: '/users/${person_id}'});
});


app.post('/users/:id/result', async (req, res) => {
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
        res.status(201).json({ url: '/users/${id}/result'});
});

app.post('/users/:id/advice', async (req, res) => {
	const id = req.params.id;
	const advice = req.body.message;
	const date = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).toISOString().split("T")[0];
		const checkIfExist = await pool.query("SELECT * FROM results WHERE person_id= $1 AND date= $2",
			[id, date]
			);
		if (checkIfExist.rows.length != 0) {
			const updateValue = await pool.query("UPDATE results SET advice = $3 WHERE person_id= $1 AND date= $2;",
			[id, date, advice]
			);
		} else {
			const newUser = await pool.query("INSERT INTO results (person_id, date, advice) VALUES ($1, current_date, $2) RETURNING *",
			[id, advice]
			);
		}
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json({ url: '/users/${id}/advice'});
});

app.post('/users/:id1/chat/:id2', async (req, res) => {
	const id1 = req.params.id1;
	const id2 = req.params.id2;
	const text = req.body.message;
    const newMessage = await pool.query("INSERT INTO messages VALUES ($1, $2, $3, current_date, DATE_TRUNC('second', CURRENT_TIMESTAMP::timestamp)::time)",
			                                [id1, id2, text]
			                                );
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json({ url: '/users/${id1}/advice/${id2}'});
});


app.listen(port, function() {
	console.log('Server is running on localhost:' + port);
})