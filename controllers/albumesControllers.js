// controllers/albumesController.js
const Album = require('../models/albumesModels');
const Cantante = require('../models/cantantesModels');

// Crear un álbum
const crearAlbum = async (req, res) => {
  try {
    const { id_cantante, nombre_album, año_lanzamiento, genero, status } = req.body;
    await Album.create({ id_cantante, nombre_album, año_lanzamiento, genero, status: status || 'active', });
    res.json("Álbum creado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Obtener todos los álbumes con los detalles del cantante
const traerAlbums = async (req, res) => {
  try {
    // Obtener parámetros de la consulta
    const { page = 1, limit, sort = 'ASC', genero, status } = req.query;

    // Convertir los valores a los tipos correctos
    const order = [['createdAt', sort.toUpperCase() === 'DESC' ? 'DESC' : 'ASC']];

    // Filtros
    const where = {};
    if (genero) where.genero = genero;
    if (status) where.status = status;

    // Si no se especifica un límite, devolver todos los álbumes sin paginación
    const queryOptions = {
      where: where,
      include: {
        model: Cantante,
        as: 'cantante',  // Asegúrate de usar el alias definido en la asociación
        attributes: ['nombre', 'apellido'],  // Campos que quieres obtener del cantante
      },
      order: order,  // Ordenar por createdAt
    };

    if (limit) {
      const offset = (page - 1) * limit;
      queryOptions.limit = parseInt(limit);  // Limitar la cantidad de resultados por página
      queryOptions.offset = offset;          // Desplazamiento para la paginación
    }

    // Buscar álbumes con los filtros y paginación si aplica
    const albums = await Album.findAndCountAll(queryOptions);

    // Si se especifica paginación, calcular el total de páginas
    if (limit) {
      const totalPages = Math.ceil(albums.count / limit);

      // Responder con los álbumes y metadatos de paginación
      return res.json({
        data: albums.rows,
        pagination: {
          totalItems: albums.count,
          totalPages: totalPages,
          currentPage: parseInt(page),
          itemsPerPage: parseInt(limit),
        },
      });
    } else {
      // Si no se especifica límite, devolver solo los resultados sin paginación
      return res.json({
        data: albums.rows,
      });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
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
