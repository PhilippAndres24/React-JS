/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router }  = require('express');
const router = Router();

const { newUSer, loginUser, renewToken } = require('../controllers/auth');


router.post('/new', newUSer );

router.post('/', loginUser );

router.get('/renew', renewToken );




module.exports = router;