const Cantante = require('./cantantesModels');  // Importar el modelo Cantante
const Album = require('./albumesModels');      // Importar el modelo Album

// Definir las relaciones en este archivo

// Un cantante tiene muchos álbumes (Relación uno a muchos)
Cantante.hasMany(Album, {
  foreignKey: 'id_cantante',  // Clave foránea en la tabla 'Album'
  as: 'albumes',              // Alias para acceder a los álbumes del cantante
});

// Un álbum pertenece a un cantante (Relación muchos a uno)
Album.belongsTo(Cantante, {
  foreignKey: 'id_cantante',  // La clave foránea en la tabla 'Album'
  as: 'cantante',             // Alias para acceder al cantante de un álbum
});

module.exports = { Cantante, Album };  // Exportar los modelos relacionados