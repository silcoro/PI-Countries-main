const {Router} = require('express');
const{ PostCountries} = require('../Controllers/ActivityController.js');

const router = Router();

router.post("/",PostCountries);
// router.get("/:idcountrie",getByID)


module.exports = router;