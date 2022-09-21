/* Crea una lista con los siguientes elementos:

- Tu nombre (string)
- Tu apellido (string)
- Tu edad (number)
- ¿Eres desarrollador de aplicaciones web? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
- Tu pasatiempos favoritos (Array)
- Declara una funcion miActividadFavorita la cual retorne un string con la accion que mas te guste realizar */


let c = console.log
var nombre = 'juan david'
var apellido = 'serrano herrera'
var edad = 31
let valorLogico = new Boolean('¿eres desarrollador de aplicaciones web?');
let fechaNacimiento =  new Date('09/22/1990');
var obj = {
titulo: "don quijote de la mancha",
autor:"miguel de cervantes saavedra",
fecha:1605,
URL:"https://www.donquijote.org/es/lengua-espanola/literatura-quijote-resumen/"
}

var array = ['leer','video juegos','programar']

function actividadFavorita(hobbie ='programar'){
    console.log('mi actividad favorita es ' + hobbie)
}
actividadFavorita()
