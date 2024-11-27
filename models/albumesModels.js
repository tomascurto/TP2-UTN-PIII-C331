const db = require("../data/db.js");
const { Sequelize, DataTypes } = require('sequelize');

const Album = db.define('Album', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_cantante: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre_album: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    año_lanzamiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive'), // Campo status con valores restringidos
        allowNull: false,
        defaultValue: 'active', // Valor predeterminado es 'active'
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      onUpdate: Sequelize.NOW,
    },
    
  },{
    tableName: 'album', // Establece el nombre correcto de la tabla
  });



module.exports = Album;