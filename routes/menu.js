var express = require('express');
var router = express.Router();
const path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('Hola menu')
  // res.sendFile(path.join(__dirname,'../views/menu.html'))
  const hayUsuarioEnviar = !!req.session.user;
    let nombreApellidoEnviar = '';
    let nombreEnviar = '';
    let apellidoEnviar = '';
    if(!!req.session.user){
      nombreApellidoEnviar = req.session.user.nombre + " " + req.session.user.apellido;
      nombreEnviar = req.session.user.nombre;
      apellidoEnviar = req.session.user.apellido;
    }
  res.render('menu', {hayUsuario: hayUsuarioEnviar, nombreApellido: nombreApellidoEnviar, nombre: nombreEnviar, apellido: apellidoEnviar})
});

module.exports = router;