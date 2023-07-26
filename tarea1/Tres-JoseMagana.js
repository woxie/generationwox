let ejemplo = [1, 2, 3, 4];

function sumarArray(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

function multiplicarArray(arr) {
    let mult = 1;
    for (let i = 0; i < arr.length; i++) {
        mult *= arr[i];
    }
    return mult;
}

//Usando la sugerencia reduce()
function sumarArrayReduce(arr) {
    return arr.reduce((a,b) => a+b);
}

//Usando la sugerencia reduce()
function multiplicarArrayReduce(arr) {
    return arr.reduce((a,b) => a*b);
}

console.log(`Dado el arreglo ${ejemplo}: La suma es ${sumarArray(ejemplo)}. El producto es ${multiplicarArray(ejemplo)}.`);
console.log(`Dado el arreglo ${ejemplo}: La suma es ${sumarArrayReduce(ejemplo)}. El producto es ${multiplicarArrayReduce(ejemplo)}.`)