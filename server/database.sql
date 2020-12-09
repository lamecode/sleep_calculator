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


