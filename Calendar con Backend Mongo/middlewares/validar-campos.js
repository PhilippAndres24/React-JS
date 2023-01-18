const {response} = require('express');
const {validationResult} = require('express-validator')


const validarCampos = (req, res = response , next) => {

     //manejo de errores
     const errors = validationResult( req );
     if ( !errors.isEmpty()) {             //el isEmpty dice si no hay en errors hay errores entonces. pero en este caso queremos considerar los errores si existen y le agregamos antes un "!"
         return res.status(400).json({
             ok: false,
             errors: errors.mapped()
         });
     }

    next();

};

module.exports = {
    validarCampos
}