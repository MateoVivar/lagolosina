const { Router } = require('express');
var express = require('express');
var router = express.Router();

const cliente = require('../mysql/connection');

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    cliente.connect(async function(error){
        if(error){
            console.log('Cliente fallo en conectarse')
        }else{
            console.log('Se ha conectado correctamente')
            const insertar = `insert into usuarios(
                email,
                nombre,
                apellido,
                telefono,
                contrasena,
                cedula,
                tipodocumento
            
            ) values('${req.body.cliente_email_reg}', '${req.body.cliente_nombre_reg}', '${req.body.cliente_apellido_reg}', '${req.body.cliente_telefono_reg}', '${req.body.cliente_clave_1_reg}', '${req.body.cliente_numero_documento_reg}', '${req.body.cliente_tipo_documento_reg}')`

            cliente.query(insertar,  function(error, respuesta){
                if(error){
                    console.log('Ya existe este usuario');
                    return res.redirect('/registro')
                }else{
                    console.log('Se ha ingresado de una forma correcta al usuario')
                    return res.redirect('/inicio')
                }
            })
      }
    })

});

module.exports = router;