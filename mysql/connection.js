
const {Pool}= require('pg');


let credenciales = {}

process.env.SERVER = 'asdas';

if(!!process.env.SERVER){ //Si es que se ejecuta en heroku
    console.log('hola');
    credenciales['user'] = 'zvnrtyxbdyxnbs';
    credenciales['host'] = 'ec2-54-160-109-68.compute-1.amazonaws.com';
    credenciales['database'] = 'dadahv2ag11893';
    credenciales['password'] = '76b686feac17c15c1fa8d0aa4e59dc6b635d396ae13578fefbaa312261ea08b5';
    credenciales['port'] = 5432;
    credenciales['ssl']= true;
}else{  //Si es que se ejecuta en mi compu
    console.log('hola 2');
    credenciales['user'] = 'postgres';
    credenciales['host'] = 'localhost';
    credenciales['database'] = 'lga';
    credenciales['password'] = 'hola123';
    credenciales['port'] = 5432;
}

const cliente = new Pool(credenciales);

module.exports = cliente;
