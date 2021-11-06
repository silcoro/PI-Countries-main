const {Country, Activity} = require('../db.js');
const axios = require('axios');
const { Op } = require('sequelize');

//funcion donde traigo mis datos de la api y lo precargo en mi base de datos
async function preCharge(){
    try {        
        let All_countries = (await axios.get(`https://restcountries.com/v3/all`)).data;

        let countries = All_countries.map(e => {
            if (e !== undefined) {
                    return {
                        id:e.cca3,
                        name: e.name.common,
                        flags:e.flags?.[1],
                        continents:e.continents?.[0],
                        capital: e.capital?.[0]?e.capital?.[0]:"No Tiene Capital",
                        subregion:e.subregion?e.subregion:"No Tiene Subregion",
                        area: e.area,
                        population: e.population
                    }               
            }
        });

    Promise.all(countries.map(e=> Country.findOrCreate({
        where:{id:e.id},
        defaults:{
            name: e.name,
            flags:e.flags,
            continents:e.continents,
            capital: e.capital,
            subregion:e.subregion,
            area: e.area,
            population: e.population
        }
    })))

    return "countries cargados exitosamente";
    } catch (error) {
        console.log(`error`, error)
    }
}

/**obtengo mis countries de mi bd */
function getDbCountries(req, res, next){
    return Country.findAll({
        include:{
            model:Activity,
            attributes:{
                exclude:["createdAt","updatedAt"]
            }
        },
        attributes:{
            exclude:["createdAt","updatedAt"]
        }
    })
    .then((result) => {
        return result;
    }).catch((err) => {
        next(err)
    });
}

/**obtengo mis countries por name */
function BDcountriesByname(name){
    return Country.findAll({
        where:{
            name:{
                [Op.iLike]:`%${name}%`
            }
        },
        include:[{
            model:Activity,
            attributes:{
                exclude:["createdAt","updatedAt"]
            }
        }]
    })
    .then((result) => {
        return result
    }).catch((err) => {
        console.log(`err`, err)
    });
}

async function getCountries(req, res, next){
    try {

        let {name} =  req.query;
        if (name) {
            let DBcountries = await BDcountriesByname(name);
            // console.log(`DBcountries`, DBcountries)
            let t = (DBcountries.length !==0)?DBcountries:"No Existe  Pais"
            res.json(t)

        } else {
            let db = await getDbCountries();
            res.json(db)
        }
        
    } catch (error) {
        next(error)
    }
}

async function getByID(req,res,next){
    try {
        let { idcountrie } = req.params;
        
        let u = await Country.findByPk(idcountrie,{include:Activity})
     
        let uu = u!==null?u:"No Existe ID de Pais"
            res.json(uu)

    } catch (error) {
        next(error)
    }
}

module.exports={
    preCharge,
    getCountries,
    getByID
}
//imagen, nombre, id y continente