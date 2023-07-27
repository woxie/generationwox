let ejemplo = [1, 2, 4, 5];

function duplicarArray(arr) {
    let nuevoArray = [];
    for (let i = 0; i < arr.length; i++) {
        nuevoArray[i] = 2 * arr[i];
    }
    return nuevoArray;
}

//Usando la sugerencia map()
function duplicarArrayMap(arr) {
    return arr.map(a => 2 * a);
}

console.log(duplicarArray(ejemplo));
console.log(duplicarArrayMap(ejemplo));