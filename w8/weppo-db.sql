BEGIN;

DROP SEQUENCE IF EXISTS id_seq;
DROP TABLE IF EXISTS works CASCADE;
DROP TABLE IF EXISTS person CASCADE;
DROP TABLE IF EXISTS workplace CASCADE;

CREATE SEQUENCE id_seq;

CREATE TABLE workplace(
	id 		serial 			PRIMARY KEY,
	name	text			NOT NULL
);

CREATE TABLE person(
	id		serial	     	PRIMARY KEY, -- DEFAULT NEXTVAL('id_seq')
	name	varchar(30)  	NOT NULL,
	surname varchar(30) 	NOT NULL,
	male	boolean	 		NOT NULL DEFAULT TRUE
);

CREATE TABLE works(
	person_id		serial NOT NULL,
	work_id			serial PRIMARY KEY			
);

INSERT INTO workplace(name) VALUES('uni');
INSERT INTO workplace(name) VALUES('mafia');


INSERT INTO person(name, surname) 			VALUES('Oobah', 'Butler');
INSERT INTO person(name, surname) 			VALUES('Baba', 'Yaga');
INSERT INTO person(name, surname, male) 	VALUES('Karin', 'Karol', false);

INSERT INTO works(person_id, work_id) VALUES((SELECT id FROM person WHERE name='Baba'), (SELECT id FROM workplace WHERE name='mafia'));



COMMIT;
