// Sintaxis
//new promise(/*Funcion ejecutora*/ function (resolved, reject) { })

//promise.prototype.then() // Qué hacer en caso de exito
//promise.prototype.catch()// Qué hacer en caso de fracaso

    //.then(onFulfillment)

// Pasar de Callbacks a funciones

// Obtener los juegos
//function getGames(callback) {
//    setTimeout(() => {
//        callback(null, games);
 //   }, 200);
//}
const games = [
    { id: 1, nombre: "killer instinct", casa_desarrollo: "Rare", tipo_id: 1 },
    { id: 2, nombre: "Mortal Kombat XI", casa_desarrollo: "NetherRealm", tipo_id: 1 },
    { id: 3, nombre: "Watch Dogs", casa_desarrollo: "Ubisoft", tipo_id: 2 }
]

const tipo = {
    1: "Lucha",
    2: "Acción/Aventura"
}

function getGames() {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(games); // Se retorna una promesa
        }, 200);
    })
}

// Uso
getGames().then((juegos) => console.log(juegos))

// Obtener un juego

function getGame(id) {
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            resolved(
                getGames().then((games) => games.filter((game) => game.id === id)[0])
                )
        }
        ,200)
    })
    // Código
}
// Uso
getGame(1).then((juego) => console.log(juego))


// Ejercicio: Hacer una promesa para retornar el tipo del juego

function getTipo(id) {
    // Código
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            resolved(
                getGame(id).then((game)=>{
                    tipo[game.tipo_id]
                }
                )
            )
        }
        )
    })
}

// Uso:
getTipo(1).then((some) => console.log(some))

// Consultar el tipo de Mortal Kombat

getGames()
    .then((games) => getGame(games[1].id))
    .then((game) => getTipo(game.tipo_id))
    .then((tipo) => console.log("El tipo de Mortal Kombat es ", tipo))

// Ejemplo: Imprimir el primer y segundo tipo de Video Juego usando promesas

getTipo(1)
    .then((tipo) => console.log(tipo))
    .then(() => getTipo(2))
    .then((tipo) => console.log(tipo))

Promise.all([getTipo(1), getTipo(2)])
    .then((tipo) => console.log(tipo))


// Promise.race

var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "uno");
});

var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "dos");
});

Promise.race([p1, p2]).then(value => {
    console.log(value); // "dos"
    // Ambas se resuelven, pero la p2 antes.
});


// Ejemplo con un resolve y un reject en el mismo método race.
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "tres");
});
var p4 = new Promise((resolve, reject) => {
    setTimeout(reject, 500, "cuatro");
});

Promise.race([p3, p4]).then(value => {
    console.log(value); // "tres"
    // p3 es mas rápida, así que se resuelve el race
}, reason => {
    // No es llamado
});



var p5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "cinoc");
});
var p6 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "seis");
});

Promise.race([p5, p6]).then(value => {
    // No es llamado
}, reason => {
    console.log(reason); // "seis"
    // p6 es mas rápida, así que se rechaza
});