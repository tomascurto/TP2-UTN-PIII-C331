const {Sequelize} = require ("sequelize")

/* nombre de la db- user - contraseña - {donde esta alojada, lenguaje, puerto} */
const db = new Sequelize ("music_db","root","",{
    host : "localhost",
    dialect:"mysql",
    port: 3306
})

db.sync({ force: false }).then(() => {
    console.log('La base de datos ha sido sincronizada');
  }).catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
  });
  

module.exports = db