BEGIN;

CREATE SEQUENCE id_seq;

CREATE TABLE person(
	id	numeric	     	SERIAL PRIMARY KEY, -- DEFAULT NEXTVAL('id_seq')
	work_id numeric		REFERENCES workplace(id),
	name	varchar(30)  	NOT NULL,
	surname varchar(30) 	NOT NULL,
	male	boolean	 	NOT NULL DEFAULT TRUE,
);

CREATE TABLE workplace(
	id 	numeric 	SERIAL PRIMARY KEY,
	name	text		NOT_NULL,
);

INSERT INTO person(name, surname) VALUES('Oobah', 'Butler');
INSERT INTO person(name, surname) VALUES('Baba', 'Yaga');
INSERT INTO person(name, surname, male) VALUES('Karin', 'Karol', false);
INSERT INTO person(name, surname) VALUES('Kitty', 'Kat');


COMMIT;
