const Sequelize = require('sequelize')

const db = new Sequelize('ngrwssb', 'ngrusr', 'ngrpass', {
    dialect: 'sqlite',
    host: 'localhost',
    storage: './shortr.db'
})

const Url = db.define('url', {

    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    sourceUrl: {
        type: Sequelize.STRING(),
        allowNull: false,
    },

    shortrUrl: {
        type: Sequelize.STRING(6),
        allowNull: false
    }

})
db.sync().then(() => console.log("Database has been updated"))
    .catch((err) => console.error("Error updating database"))
    
exports = module.exports = {
    Url
}