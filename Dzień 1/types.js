console.log("Podłączenie prawidłowe");


//typy proste
let courseName = "Kurs programowania w JS"; // typ String
let numberOfPeople = 2.1; // typ number
let female = false; // typ boolean;
let onlyDeclaredNotInicialized; // typ undefined


//obiekty
let task = null; // typ OBIEKT;
let arrayList = [5, 3, 2]; // tablica OBIEKT;
let myOnlyFunction = function () {}; // funkcja
let myObject = {}; // Obiekt

console.log("ile w liscie: " + arrayList.length);

let sum = 0;

for (let i = 0; i < arrayList.length; i++) {
    console.log(i + 1 + ". " + arrayList[i]);
    sum += arrayList[i];
}
console.log(sum);




console.log("1-sza czesc: " + courseName, numberOfPeople, female);
console.log("2-ga czesc: " + onlyDeclaredNotInicialized, task, arrayList, myOnlyFunction, myObject);

let newNumber = numberOfPeople + 1000;
console.log(newNumber);

console.log(courseName, typeof courseName);
console.log(numberOfPeople, typeof numberOfPeople);
console.log(female, typeof female);
console.log(arrayList, typeof arrayList);
console.log(myOnlyFunction, typeof myOnlyFunction);
console.log(myObject, typeof myObject);
console.log(onlyDeclaredNotInicialized, typeof onlyDeclaredNotInicialized);
console.log(task, typeof task);