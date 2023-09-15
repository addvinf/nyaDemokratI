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