const Sequelize = require('sequelize');
const config = require('../config');

const sequelize  = new Sequelize(config.db.database, config.db.user, config.db.pwd, {
    host: config.db.host,
    port: config.db.port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 3000
    }
});

sequelize 
  .authenticate()
  .then(() => {
    console.log('MySQL connected successfully.');
  })
  .catch(err => {
     console.error('Unable to connect to the database:', err);
  });

// sequelize .sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

const Url = sequelize .define('urls', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    url:Sequelize.STRING(255),
    expireAt: Sequelize.DATE
}
, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
});



module.exports = { Url }