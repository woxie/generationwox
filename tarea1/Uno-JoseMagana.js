// Escribí 3 formas de resolverlo, pero no sé cuál sea la más apropiada. Me podrían explicar cuál de las 3 es mejor y por qué por favor? :)

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