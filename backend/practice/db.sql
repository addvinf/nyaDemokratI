CREATE DATABASE sm_users;

CREATE TABLE users  (
    email VARCHAR(255) PRIMARY KEY NOT NULL,
    hashed_email VARCHAR(255) NOT NULL,
    name VARCHAR(255)
);

INSERT INTO users (email, hashed_email, name) VALUES ('desaulty@kth.se', 3395952, 'Mats Desaulty');