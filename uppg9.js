

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
function sort(siffror){
    for (let siffra of siffror){
        if (siffra %2 === 0){
            console.log(siffra + " jämt");
        } else {
            console.log(siffra + " udda");
        }
    }
}
  sort ([1, 15, 12, 22, 34, 35, 40, 41]);
}

module.exports = { uppg9 };