const { Op } = require('sequelize');
const { Activity,Country } = require('../db');

async function PostCountries(req, res, next){
    try {
        
        let { id,name,dificulty,duration, season,countries } = req.body;

        let [newActivity, created] = await Activity.findOrCreate({
            where:{name},
            defaults:{
                id,
                dificulty,
                duration,
                season
            }
        });

        for(const i of countries){
            const count= await Country.findOne({
                where:{
                    name: i,
                }
            });

            newActivity.addCountry(count)
        }

        res.status(200).json({created:created, newActivity});

    } catch (error) {
        next(error)
    }
}

module.exports={
    PostCountries
}