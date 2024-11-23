// controllers/albumesController.js
const Album = require('../models/albumesModels');
const Cantante = require('../models/cantantesModels');

// Crear un álbum
const crearAlbum = async (req, res) => {
  try {
    const { id_cantante, nombre_album, año_lanzamiento, genero } = req.body;
    await Album.create({ id_cantante, nombre_album, año_lanzamiento, genero });
    res.json("Álbum creado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Obtener todos los álbumes con los detalles del cantante
const traerAlbums = async (req, res) => {
  try {
    const album = await Album.findAll({
      include: {
        model: Cantante,
        as: 'cantante',  // Asegúrate de usar el alias definido en la asociación
        attributes: ['nombre', 'apellido'],  // Campos que quieres obtener del cantante
      },
    });
    res.json(album);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Obtener un álbum por ID con los detalles del cantante
const traerAlbum = async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.id, {
      include: {
        model: Cantante,
        as: 'cantante',
        attributes: ['nombre', 'apellido'] // Incluye nombre y apellido del cantante
      }
    });
    res.json(album);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Borrar un álbum por ID
const borrarAlbum = async (req, res) => {
  try {
    await Album.destroy({ where: { id: req.params.id } });
    res.json("Álbum eliminado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Actualizar un álbum por ID
const actualizarAlbum = async (req, res) => {
  try {
    await Album.update(req.body, { where: { id: req.params.id } });
    res.json("Álbum actualizado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { crearAlbum, traerAlbums, traerAlbum, borrarAlbum, actualizarAlbum };
