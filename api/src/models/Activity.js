const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('activity',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING,
            unique:true
        },
        dificulty:{
            type: DataTypes.ENUM("1","2","3","4","5")
        },
        duration:{
            type:DataTypes.STRING
        },
        season:{
            type: DataTypes.ENUM("Otoño", "Invierno", "Verano", "Primavera")
        }
    })
}