const button = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Elwira", "Asia", "Ania", "Bogumiła", "Patrycja", "Justyna", "Kasia", "Ola"];
const prefixes = ["Uważam", "Wydaje mi się", "Moim zdaniem", "Sądzę"];

const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    const index_2 = Math.floor(Math.random() * prefixes.length);
    div.textContent = `${prefixes[index_2]}, że najlepsze imię dziecka to ${names[index]}.`;
}

button.addEventListener("click", nameGenerator);