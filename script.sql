create table usuarios(
    email varchar,
    nombre varchar,
    apellido varchar,
    telefono varchar,
    contrasena varchar,
    cedula varchar PRIMARY KEY,
    tipodocumento varchar
);

insert into usuarios(
    email,
    nombre,
    apellido,
    telefono,
    contrasena,
    cedula,
    tipodocumento

) values('hola@gmail.com', 'juan','Rios','459322', '1234', '0910919', 'Cedula');

insert into usuarios(
    email,
    nombre,
    apellido,
    telefono,
    contrasena,
    cedula,
    tipodocumento

) values('Resto@gmail.com', 'Pancho','Araba','9836', '1431', '2828979', 'Cedula');
