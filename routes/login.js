var express = require('express');
var router = express.Router();
const path = require('path');
const {Client}= require('pg');

const cliente = require('../mysql/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  const email = req.query.login_email_cliente;
  const contrasena = req.query.login_clave_cliente;
  


  cliente.connect(async function(error){
        if(error){
            console.log('Cliente fallo en conectarse') 
            console.log(error)
        }else{ 
            const buscarUsuario = `select * from usuarios where email = '${email}' and contrasena = '${contrasena}'`
            cliente.query(buscarUsuario,  function(error, respuesta){
                if(error){
                    console.log(error);
                    console.log('Error mientras se busca el Usuario');
                    res.redirect('/inicio')
                }else{
                    console.log(respuesta.rows)
                    if(respuesta.rows.length > 0){
                        console.log(respuesta.rows);
                        console.log('Existe al menos un usuario')
                        const usuario = respuesta.rows[0];
                        req.session.user = {
                            nombre: usuario.nombre,
                            cedula: usuario.cedula,
                            email: usuario.email,
                            apellido: usuario.apellido,
                        };
                        //Se pone la sesion al usuario
                        res.redirect('/menu')
                    }else{
                        console.log('No existe ningun Usuario')
                        res.redirect('/registro')
                    }
                    cliente.end()
                }
            })
        }
   })
});

router.get("/logout", function(req, res, next){
   console.log("Me estoy saliendo");
   req.session.destroy();
   res.redirect('/inicio')
});
module.exports = router;