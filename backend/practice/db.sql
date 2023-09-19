CREATE DATABASE sm_users;

CREATE TABLE users  (
    email VARCHAR(255) PRIMARY KEY NOT NULL,
    hashed_email VARCHAR(255) NOT NULL,
    name VARCHAR(255)
);

INSERT INTO users (email, hashed_email, name) VALUES ('desaulty@kth.se', 3395952, 'Mats Desaulty');

CREATE TABLE election_data
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL,
    candidates text[] NOT NULL
    
);

INSERT INTO election_data (name, status, candidates) VALUES ('Presidentval', 'open', '{"Mats Desaulty", "Edvin", "Pelle Svanslös"}');

SELECT * FROM election_data;

CREATE TABLE votes (
    user_email VARCHAR(255) NOT NULL PRIMARY KEY,
    vote_option VARCHAR(255) NOT NULL,
    vote_date TIMESTAMP DEFAULT NOW(),
    CONSTRAINT unique_vote_per_user UNIQUE (user_email)
);

SELECT * FROM votes;

//clear TABLE

DELETE FROM votes;

DROP TABLE votes;

INSERT INTO votes (user_email, vote_option) SELECT $1, $2 WHERE EXISTS ( SELECT 1 FROM users WHERE email = $1);

add column status to table users

ALTER TABLE users ADD COLUMN status VARCHAR(50) NOT NULL DEFAULT 'offline';

