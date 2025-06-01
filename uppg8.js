

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
let person = [
    {name: "Rabbiya", age: 36},
    {name: "Talha", age: 10},
    {name: "Sarah", age: 20},
    {name: "Shujat", age: 39},
    {name: "Zayd", age:4}
]
// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
function personerOver30(array){
    for (let person of array){
        if(person.age > 30){
            console.log(person.name);
        }
    }
}
// anropa funktionen och skicka med arrayen som argument
 personerOver30(person)

}

module.exports = { uppg8 };