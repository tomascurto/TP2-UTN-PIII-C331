const {Sequelize} = require ("sequelize")

/* REEMPLAZAR 
"music_db","root","",{
    host : "localhost",
    dialect:"mysql",
    port: 3306}

por

nombre de la base de datos, user,contraseña,{
    host : "localhost",
    dialect:"mysql",
    port: puerto}

    */
   
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