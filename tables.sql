CREATE TABLE users (
	userid SERIAL PRIMARY KEY,
	username TEXT UNIQUE,
	password TEXT
);

CREATE TABLE notes (
	notesid SERIAL PRIMARY KEY,
	userid INTEGER,
    username TEXT,
    title TEXT,
	content TEXT,
    link TEXT,
	tags TEXT [],
	postdate TIMESTAMP
);

CREATE TABLE category (
	id SERIAL PRIMARY KEY,
	tag TEXT
);

CREATE TABLE important (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	notes_id INTEGER
);