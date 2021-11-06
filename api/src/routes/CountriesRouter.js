const {Router} = require('express');
const{ getCountries,getByID } = require('../Controllers/CountryController.js');

const router = Router();

router.get("/",getCountries);
router.get("/:idcountrie",getByID)





module.exports = router;