Ej 1:

let arr = ["This", "is", "a", "sentence."];

function printOutString(arr) {
	let texto = "";
    for (let i = 0; i < arr.length; i++) {
        texto += " " + arr[i];
    }
    return texto.substring(1);
}

function printOutString2(arr) {
    let texto = "";
    for (let i = 0; i < arr.length; i++) {
        if (i != 0) {
            texto += " "
        };
        texto += arr[i];
    }
    return texto;
}

function printOutString3(arr) {
	let texto = arr[0];
    for (let i = 1; i < arr.length; i++) {
        texto += " " + arr[i];
    }
    return texto;
}

//Usando la sugerencia join()
function printOutStringJoin(arr) {
	return arr.join(" ");
}

console.log(printOutString(arr));
console.log(printOutString2(arr));
console.log(printOutString3(arr));
console.log(printOutStringJoin(arr));


=======

Ej 2:

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

=======

Ej 3:

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

========

Ej 4

let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

function iguales(a, b) {
    let interseccion = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                interseccion.push(a[i]);
            }
        }
    }
    return interseccion;
}

//Usando la sugerencia filter() e include()
function igualesSugerido(a, b) {
    return a.filter(x => b.includes(x));
}

console.log(iguales(student1Courses, student2Courses));
console.log(igualesSugerido(student1Courses, student2Courses));

======

Ej 5:

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);
people.splice(people.indexOf("Dani"), 1);
people.splice(people.indexOf("Juan"), 1);
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);
people.push("Jose");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] == "Maria") {
        break;
    }
}
console.log(people.indexOf("Maria"));
console.log(people);
console.log(people.length);

======

Ej 6:

let ejemplo = [3, 6, 12, 5, 100, 1];

function ordenar(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(ordenar(ejemplo));
