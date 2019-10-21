const url_consulta = document.URL.toString();
const promesa = fetch(url_consulta);
promesa.then(result => console.log(result),
e=> console.log(`Error ${e}`))


fetch(document.URL.toString()).then(result => console.log(result),
e => console.log(`Error capturado: ${e}`));

fetch(document.URL.toString())
  .then(result => {
    console.log(result);
    return "Primer Then";
  },
    e => console.log(`Error capturado:  ${e}`))
  .then(result => console.log(`Segundo Then despues de ${result}: La página ya ha debido ser mostrada`),
    e => console.log(`Error capturado:  ${e}`));

// Promise.all

const p1 = fetch("www.urosario.edu.com")
const p2 = fetch("www.krunker.io")
const p3 = fetch("www.youtube.com")

Promise.all([p1, p2, p3])
  .then(resultArray => console.log(resultArray))
  .catch(e => console.log(`Error capturado: ${e}`));

Promise.race([p1, p2, p3])
  .then(winnerResult => console.log(winnerResult))
  .catch(e => console.log(`Error capturado:  ${e}`));

// Creación de una promesa

const checkServer = (url) => {
	return new Promise((resolve, reject) => { 
		fetch(url)
			.then(response => resolve(`Estado del Servidor: ${response.status === 200 ? "OK" : "NOT OK"}`))
			.catch(() => reject(`Error al localizar URL`));
	});
}

checkServer(document.URL.toString())
  .then(result => console.log(result))
  .catch(e => console.log(e));


