//funciones que tenemos definidas en auth.js de Routes.
const {response}  = require('express')


const newUSer = (req, res = response) => {
    console.log(req);
   

    res.json({
        ok: true,
        msg: 'Registro',
        user: req.body
    })

}

const loginUser = (req, res = response) => { 
   

    res.json({
        ok: true,
        msg: 'login',
        user:req.body
    })
}

const renewToken = (req, res) => {

    res.json({
        ok: true,
        msg: 'renew'
    })
}



module.exports = {
    newUSer,
    loginUser,
    renewToken,
};