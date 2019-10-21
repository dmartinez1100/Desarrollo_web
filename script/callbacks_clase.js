// Los callbacks son funciones que se llaman como argumentos dentro de otras funciones
// Ejemplo 1: Auto llamado sin parámetros

function ejemplo1(fn) {
    fn();
}
// Uso:
ejemplo1(function () {
    console.log("Saludo");
});

// Ejemplo 2: Autollamado con parámetros

function ejemplo2(fn) {
    var usuario = "nombre_usuario"; // Se asigna el nombre de usuario
    fn(usuario);
}
// Uso:
ejemplo2(function (nom) {
    console.log("hola " + nom); // Se crea una función anónima que imprime el nombre de usuario
});


// Ejemplo 3: Autollamado con parámetros

function ejemplo3(fn, usuario) {
    fn(usuario); // Se pone como parametro de la funcion, el parámetro de la funcion global
}

// Uso:
ejemplo3(function (nom) {
    console.log("hola " + nom); // Se crea una función anónima que imprime el nombre de usuario
}, "nombre_usuario");

// Ejercicio 1
// Crear una función que haga lo mismo que array.map() basado en callbacks

function mapear(array, funcion) {
    // Código
}

// Uso
var array1 = mapear([1, 2, 3], function (a) {
    return a * 2;
});
//resultado esperado: [2, 4, 6]

///////////////////  OPERACIONES ASÍNCRONAS ///////////////////

//forma 1

function imprimir() {
    console.log("Hola 8 seg después!");
}

setTimeout(imprimir, 8000);


// Forma 2
setTimeout(function () {
    console.log("Hola 8 seg después!");
}, 0)
console.log(2+2)
// Forma 3

//setTimeout(() => {
//    console.log("Hola 8 seg después!");
//}, 8000)


// Ejemplo 2

const games = [
    { id: 1, nombre: "killer instinct", casa_desarrollo: "Rare", tipo_id: 1 },
    { id: 2, nombre: "Mortal Kombat XI", casa_desarrollo: "NetherRealm", tipo_id: 1 },
    { id: 3, nombre: "Watch Dogs", casa_desarrollo: "Ubisoft", tipo_id: 2 }
]

const tipo = {
    1: "Lucha",
    2: "Acción/Aventura"
}


function getGames(callback) {// Este callback se va a invocar cuándo se carguen los juegos de la base de datos
    setTimeout(() => { // Espera que transcurra una cantidad determinada de milisegundos antes de ejecutar una función
        callback(null, games); // Se invoca el callback que pasamos como parámetro en los juegos. En general, el primer parámetro es un error, si no hay error es null.
    }, 2000);
}

// Ejercicio 1

function getGames(callback) {
    setTimeout(() => {
        callback(null, games); // null, en general se colocan parametros para poder retornar cosas especificas en caso de tener un error
    }, 200);
}

getGames((err, games) => console.log(games)) // Uso del callback anterior

// Ejercicio 2 ¿Qué hace esta linea de código?

id_busqueda = 1
// filtra el juego que tenga el id como id_busqueda
// Recorre todos los usuarios y cuándo encuentra el usuario con el id especifico lo recibe

// Ejercicio 3
// Crear un método que retorne un tipo de juego especifico con un retraso de 1 seg usando callbacks

// Borrar //
function getGame(id, callback) {
    let game2 = games.filter((game) => game.id === id_busqueda)[0];
    setTimeout(()=>{callback(null,game2)},1000);
    // Codigo
    return game2
}

getGame(1, (err,games) => {console.log(games)}) // Para obtener el juego con id 1

// Ejercicio 4
// Esta función obetiene la información de un tipo de juego especifico
function getTipo(id, callback) {
    // Código 
    setTimeout(()=>{callback(null,getGame())})
}

getTipo(1, (err, game) => console.log(games.filter((game) => game.id === err)[0])) // Para obtener el juego con id 1


// Queremos saber el tipo de Mortal Kombat 

// Pasos:

// Pedir todos los juegos
// Con el id de Mortal, lo pedimos individualmente
// Luego, pedirmos su tipo

//getGames((err, games) => {
  //  let Mortal_id = games[1].id;

  //  getGame(Mortal_id, (game) => {
   //     let tipoId = game.tipo_id;

    //    getTipo(tipoId, (err, tipo) => {
   //         console.log("El tipo de Mortal Kombat es: " + tipo);
  //      })
 //   })
//})

function mapear(array,funcion){
    for(let i=0;i< array.length;i++){
        array[i]=funcion(array[i]);
    }
    return array;
}
console.log("holaa");

var funcion = (var1) => {return var1+2};

var array= [1,34,3];
console.log(array)
