/*som = 0
for (i=1;i<=3;i++){
    let getal = parseInt(prompt("Hoeveel bedraagd uw product?"))
    som = som + getal
}
console.log(`totale bedrag bedraagd ${som}`)
vraaag verkeerd begrepen
 */

let hvlgetallen = parseInt(prompt("Hoeveel getallen wil je ingeven?"))
let getal1 = parseInt(prompt("Voer getal 1 in"))
let getal2 = parseInt(prompt("Voer getal 2 in"))
let getal3 = parseInt(prompt("Voer getal 3 in"))

if (getal1 > getal2 && getal1 > getal3){
    console.log(`Het grootste getal van 3 getallen is ${getal1}`)
}else if (getal2 > getal1 && getal2 > getal3){
    console.log(`Het grootste getal van 3 getallen is ${getal2}`)
}else {
    console.log(`Het grootste getal van 3 getallen is ${getal3}`)
}