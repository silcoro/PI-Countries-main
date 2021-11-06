const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countries = require('./CountriesRouter')
const activity = require('./ActivityRouter')


const router = Router();

router.use("/countries",countries)
router.use("/activity",activity);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
