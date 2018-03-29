-- template below --
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE songs (
id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Song", "Grimes", "Synth-Pop");

INSERT INTO songs (title, artist, genre)
VALUES ("Song", "Nirvana", "Grunge");

INSERT INTO songs (title, artist, genre)
VALUES ("song", "Guns and Roses", "Rock");

// template below //
CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;
-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;
-- Create the burgers table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);




-- instructions below --
-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
