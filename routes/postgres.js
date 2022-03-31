var express = require('express');
var router = express.Router();
const cliente = require('../mysql/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('Hola inicio')
  cliente.connect(async function(error){
      if(error){
          console.log('Cliente fallo en conectarse')
      }else{
          console.log('Se ha conectado correctamente')
          
          cliente.query('select * from usuarios', function(error, respuesta){
            if(error){
              console.log(error)
            }else{
              console.log(respuesta.rows)
            }
              
          })
    }
  })
});

router.get('/prueba', function(req, res, next){

  res.render("prueba");

})

module.exports = router
