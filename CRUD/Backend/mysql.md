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