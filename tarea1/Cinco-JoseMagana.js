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