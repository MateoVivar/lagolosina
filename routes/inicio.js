var express = require('express');
var router = express.Router();
const path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('Hola inicio')
    // console.log(req.session);
    console.log('--------------');
    console.log(req.session.user);
    console.log('--------------');
    // res.render(path.join(__dirname,'../views/index.html'))
    
    const hayUsuarioEnviar = !!req.session.user;
    let nombreApellidoEnviar = '';
    if(!!req.session.user){
      nombreApellidoEnviar = req.session.user.nombre + " " + req.session.user.apellido
    }
    res.render('details', {hayUsuario: hayUsuarioEnviar, nombreApellido: nombreApellidoEnviar})
});

module.exports = router;
