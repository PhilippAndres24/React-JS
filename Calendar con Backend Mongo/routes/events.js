/*
    Events Routes
    /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router();


//TODAS TIENEN QUE PASAR POR LA VALIDACION JWT
router.use(validarJWT);




// OBTENER EVENTOS
router.get('/', getEventos);




//crear un nuevo evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento
);



// actualizar evento

router.put('/:id', actualizarEvento);


// borrar even
router.delete('/:id', eliminarEvento);


module.exports = router;