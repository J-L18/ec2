/**
 * "variable.length" 
 * en base a una lista de textos indique en que posicion( index) se encuentra el texto mas grande en javascript
 * ejemplo:
 * ["texto","es","grande","pero","no","precisamente"]
 * resultado:
 * 5
 */


function IndiceLargo(listaDeTextos) {
    let longitudMaxima = 0;
    let indicemasLargo = -1;

    for (let i = 0; i < listaDeTextos.length; i++) {
     
        if (listaDeTextos[i].length > longitudMaxima) {
            longitudMaxima = listaDeTextos[i].length;
            indicemasLargo = i;
        }
    }

    return indicemasLargo;
}

const textos = ["texto", "es", "grande", "pero", "no", "precisamente"];

const resultado = IndiceLargo(textos);

console.log("indice del texto mas largo:", resultado);



/** en base a una lista de numero devuelve la suma total de que tine la lita
 * y el numero mas grande
 * 
 * ejemplo:
 * [1,3,5,10,22,12]
 * resultado
 * 52 suma total
 * 22 numero mayor
 * 
 */


function calcular(listaDeNumeros) {
    
    const sumaTotal = listaDeNumeros.reduce((acumular, actual) => {
        return acumular + actual;
    }, 0)
    const numeroMayor = Math.max(...listaDeNumeros);
    return {
        suma: sumaTotal,
        mayor: numeroMayor
    };
}

const Lista = [1, 3, 5, 10, 22, 12];
const resultados = calcular(Lista);

console.log(`Suma total: ${resultados.suma}`);     
console.log(`Numero mas grande: ${resultados.mayor}`); 