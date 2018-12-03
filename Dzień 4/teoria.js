// Łączenie tablic
const colorsCollection = ["redcolor", "bluecolor", "greencolor"];
const names = ["janek", "bartek", "stefan"];

let concast = colorsCollection.concat(names);

console.log(concast);
console.log(concast.slice(1, 3));

colorsCollection.push("maciek");

console.log(colorsCollection);


// Metody destrukcyjne
console.log(names);
console.log(names.splice(0, 1));
console.log(names.splice(0)); // zwraca elementy usnięte
console.log(names);

const names2 = ["janek", "bartek", "stefan"];
console.log(names2.join());

//Pętla for of
const colorsCollection2 = ["redcolor", "bluecolor", "greencolor"];

for (const i of colorsCollection2) {
    console.log(i);
}

//Funkcja
function addNumbers(number1, number2) {
    return number1 + number2;
}

console.log(addNumbers(2, 5));

const nazwaFunkcji = (number3, number4) => {
    return number3 - number4
}
console.log(nazwaFunkcji(5, 3));

const nazwaFukncji2 = liczba => liczba * 5;

console.log(nazwaFukncji2(3));

//Obiekty

const dog = {
    name: 'fafik',
    age: 2,
    barking() {
        console.log("hau hau")
    }
}

console.log(dog.name);
console.log(dog.age);
dog.barking();