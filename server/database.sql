CREATE TABLE Users (
	Person_ID int,
    Login varchar(255),
    Password varchar(255),
	ROLE varchar(255)
);

create sequence person_id_seq
   owned by users.person_id;

alter table users
   alter column person_id set default nextval('person_id_seq');

commit;

INSERT INTO users ("login", "password", "role")
VALUES ('user', 'user', 'user');

INSERT INTO users ("login", "password", "role")
VALUES ('doc', 'doc', 'doctor');

SELECT * FROM users;

DELETE FROM users
WHERE person_id > 2;


