//Tworzenie klasy
class Workers {
    constructor(name) {
        this.name = name;
        this.addWorker = function () {
            console.log("Wywołanie z instancji");
        }
    }
    addWorker() {
        console.log("Wywołanie z prototypu");
    }
}

//Instancja
const kucharz = new Workers('jacek');
kucharz.addWorker();

//Nowa Klasa
class Family {
    constructor(members = 0, ...names) {
        this.members = members;
        this.names = names;
    }
    addMember(newMember) {
        this.names.push(newMember);
        this.members++;
        console.log(`Nowy członek rodziny ${newMember}. Rodzina liczy teraz ${this.members} osób`);
    }

    // Static dostępne tylko z klasy np. Family.newFamily();
    static newFamily(...cosTam) {
        return cosTam;
    }
}

//Instancja
const nowak = new Family(3, 'janek', 'ela', 'zosia');
const jablonscy = new Family();