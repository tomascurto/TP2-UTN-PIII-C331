CREATE DATABASE music_db;

USE music_db;

CREATE TABLE cantantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE album (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cantante INT NOT NULL,
    nombre_album VARCHAR(255) NOT NULL,
    año_lanzamiento INT NOT NULL,
    genero VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_cantante) REFERENCES cantantes(id)
);

INSERT INTO cantantes (nombre, apellido) VALUES 
('Daniel', 'Agostini'),
('Brian', 'Adams'),
('Elton', 'John'),
('Marshall', 'Mathers'),
('Mercedes', 'Sosa'),
('Gustavo', 'Cerati'),
('Freddy', 'Mercury'),
('Marilyn', 'Manson'),
('Cristian', 'Castro'),
('Luis', 'Miguel'),
('James', 'Hetfield'),
('Bon', 'Scott'),
('Taylor', 'Swift'),
('Kanye', 'West');

-- Daniel Agostini
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(1, 'Amor Prohibido', 1995, 'Balada'),
(1, 'El Secreto', 1998, 'Cumbia'),
(1, 'Todo El Amor', 2000, 'Cumbia'),
(1, 'Lo Mejor de Daniel', 2005, 'Balada');

-- Brian Adams
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(2, 'Reckless', 1984, 'Rock'),
(2, 'Into the Fire', 1987, 'Rock'),
(2, 'Waking Up the Neighbours', 1991, 'Rock'),
(2, '11', 2008, 'Rock');

-- Elton John
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(3, 'Goodbye Yellow Brick Road', 1973, 'Rock'),
(3, 'The One', 1992, 'Pop'),
(3, 'Elton John', 1970, 'Rock'),
(3, 'Songs from the West Coast', 2001, 'Rock');

-- Marshall Mathers (Eminem)
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(4, 'The Marshall Mathers LP', 2000, 'Rap'),
(4, 'The Eminem Show', 2002, 'Rap'),
(4, 'Recovery', 2010, 'Rap'),
(4, 'Music to Be Murdered By', 2020, 'Rap');

-- Mercedes Sosa
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(5, 'Gracias a la Vida', 1972, 'Folklore'),
(5, 'La Voz de América Latina', 1993, 'Folklore'),
(5, 'Misa Criolla', 1967, 'Folklore'),
(5, 'Mercedes Sosa en Vivo', 2009, 'Folklore');

-- Gustavo Cerati
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(6, 'Canción Animal', 1990, 'Rock'),
(6, 'Doble Vida', 1988, 'Rock'),
(6, 'Ahí Vamos', 2006, 'Rock'),
(6, 'Bocanada', 1999, 'Rock');

-- Freddy Mercury
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(7, 'Mr. Bad Guy', 1985, 'Pop'),
(7, 'Barcelona', 1988, 'Opera'),
(7, 'The Solo Collection', 2000, 'Pop'),
(7, 'Freddie Mercury: Never Boring', 2019, 'Pop');

-- Marilyn Manson
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(8, 'Antichrist Superstar', 1996, 'Industrial Rock'),
(8, 'Mechanical Animals', 1998, 'Industrial Rock'),
(8, 'Hollywood', 2000, 'Industrial Rock'),
(8, 'The Golden Age of Grotesque', 2003, 'Industrial Rock');

-- Cristian Castro
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(9, 'El Sentimiento', 1996, 'Balada'),
(9, 'Mi Amigo El Prieto', 2001, 'Balada'),
(9, 'Verdad Acertada', 2005, 'Pop'),
(9, 'México en la Piel', 2007, 'Ranchera');

-- Luis Miguel
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(10, 'Romance', 1991, 'Balada'),
(10, 'Segundo Romance', 1994, 'Balada'),
(10, 'Navidad con Luis Miguel', 2006, 'Pop'),
(10, 'México en la Piel', 2004, 'Ranchera');

-- James Hetfield (Metallica)
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(11, 'Metallica', 1991, 'Metal'),
(11, 'Master of Puppets', 1986, 'Metal'),
(11, 'Ride the Lightning', 1984, 'Metal'),
(11, 'And Justice for All', 1988, 'Metal');

-- Bon Scott (AC/DC)
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(12, 'High Voltage', 1975, 'Rock'),
(12, 'Highway to Hell', 1979, 'Rock'),
(12, 'Let There Be Rock', 1977, 'Rock'),
(12, 'Powerage', 1978, 'Rock');

-- Taylor Swift
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(13, 'Fearless', 2008, 'Country'),
(13, '1989', 2014, 'Pop'),
(13, 'Red', 2012, 'Pop'),
(13, 'Lover', 2019, 'Pop');

-- Kanye West
INSERT INTO album (id_cantante, nombre_album, año_lanzamiento, genero) VALUES 
(14, 'The College Dropout', 2004, 'Hip Hop'),
(14, 'Late Registration', 2005, 'Hip Hop'),
(14, 'Graduation', 2007, 'Hip Hop'),
(14, 'My Beautiful Dark Twisted Fantasy', 2010, 'Hip Hop');