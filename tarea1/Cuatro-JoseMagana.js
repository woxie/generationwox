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