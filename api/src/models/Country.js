const { DataTypes } = require('sequelize');

module.exports = sequelize => {

  sequelize.define('country',{
    id:{
      type:DataTypes.STRING,
      primaryKey:true,
      allowNull: false
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    flags:{
      type:DataTypes.STRING,
      allowNull:false
    },
    continents:{
      type:DataTypes.STRING,
      allowNull:false
    },
    capital:{
      type: DataTypes.STRING,
      allowNull:false
    },
    subregion:{
      type:DataTypes.STRING,
      allowNull:false
    },
    area:{
      type:DataTypes.DOUBLE,
      allowNull:false
    },
    population:{
      type:DataTypes.DOUBLE,
      allowNull:false
    }
  })
}