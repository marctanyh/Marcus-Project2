CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);

CREATE TABLE notes (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
    username TEXT,
    title TEXT,
	content TEXT,
    link TEXT
);