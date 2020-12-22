CREATE TABLE Users (
	Person_ID SERIAL,
    Login varchar(255),
    Password varchar(255),
	ROLE varchar(255)
);


INSERT INTO users ("login", "password", "role")
VALUES ('user', 'user', 'user');

INSERT INTO users ("login", "password", "role")
VALUES ('doc', 'doc', 'doctor');

SELECT * FROM users;

DELETE FROM users
WHERE person_id > 2;

ALTER TABLE results ADD COLUMN advice varchar(255);

SELECT * FROM results;

CREATE TABLE Messages (
	sender_ID int,
	receiver_ID int,
    Message varchar(255),
	Date varchar(255),
	Time varchar(255)
);

SELECT * FROM messages;

INSERT INTO messages VALUES (2, 1, 'Hi. What can I help you with?', 
		current_date, 
		DATE_TRUNC('second', CURRENT_TIMESTAMP::timestamp)::time)
		
SELECT t1.login, message, date, time FROM messages 
JOIN users AS t1 ON t1.person_id=messages.sender_id
WHERE 
((sender_id=1 AND receiver_id=2) OR (sender_id=2 AND receiver_id=1))
AND date=TO_CHAR(current_date, 'YYYY-MM-DD');

select * FROM messages;

SELECT person_id FROM users WHERE role='user'


