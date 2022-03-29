var express = require('express');
var router = express.Router();
const path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile(path.join(__dirname,'../views/registration.html'))
  const hayUsuarioEnviar = !!req.session.user;
    let nombreApellidoEnviar = '';
    if(!!req.session.user){
      nombreApellidoEnviar = req.session.user.nombre + " " + req.session.user.apellido
    }
  res.render('registration', {hayUsuario: hayUsuarioEnviar, nombreApellido: nombreApellidoEnviar})
});

module.exports = router;