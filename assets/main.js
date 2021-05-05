//CON BONUS
/*
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

//Il computer deve generare 16 numeri casuali tra 1 e 100. 
//I numeri non possono essere duplicati
var level = Number(prompt("Scegli il livello di difficoltà: 0, 1 o 2"));

var bombe = [];

if (level == 0){
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    for (i=0; i<16; i++){
        var numero = randomNum(1, 100);
        
        if (!bombe.includes(numero)){
            bombe.push(numero);
        }
    }

} else if (level == 1) {
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    for (i=0; i<16; i++){
        var numero = randomNum(1, 80);
        
        if (!bombe.includes(numero)){
            bombe.push(numero);
        }
    }
} else if (level == 2){
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    for (i=0; i<16; i++){
        var numero = randomNum(1, 50);
        
        if (!bombe.includes(numero)){
            bombe.push(numero);
        }
    }
}

console.log(bombe);
//Il pc deve chiedere all'utente (100-16) volte di inserire un numero, uno alla volta, sempre compreso tra 1 e 100
//L'utente non può inserire un numero più di una volta
//Se: il numero utente corrisponde a uno dei numeri pc, 
//oppure l'utente raggiunge il massimo di numeri inseriti
//la partita termina
//altrimenti si continua chiedendo all'utente un altro numero
//al termine, il pc deve comunicare il punteggio = quante volte l'utente ha inserito un numero "sicuro"


if (level == 0){
    var punteggio = [];
    var lista_utente = [];
    while (lista_utente.length < 84){
        var numUtente = Number(prompt("Inserisci un numero intero da 1 a 100:"));

        if (lista_utente.includes(numUtente)) {
            alert("Numero già presente!");
        } else if (bombe.includes(numUtente)){
            alert("Numero bomba!");
            punteggio = Number(punteggio + 1 - 1);
            document.getElementById("win").innerHTML = "Hai inserito un numero bomba!"; 
            document.getElementById("points").innerHTML = "Il tuo punteggio è " + punteggio;
            document.getElementById("again").innerHTML = "Ricarica la pagina per giocare di nuovo";
            break;
        } else {
            lista_utente.push(numUtente);
            punteggio = Number(punteggio + 1);
            document.getElementById("win").innerHTML = "Hai vinto!";
            document.getElementById("points").innerHTML = "Il tuo punteggio è " + punteggio;
        }
    }
} else if (level == 1) {
    var punteggio = [];
    var lista_utente = [];
    while (lista_utente.length < 64){
        var numUtente = Number(prompt("Inserisci un numero intero da 1 a 80:"));

        if (lista_utente.includes(numUtente)) {
            alert("Numero già presente!");
        } else if (bombe.includes(numUtente)){
            alert("Numero bomba!");
            punteggio = Number(punteggio + 1 - 1);
            document.getElementById("win").innerHTML = "Hai inserito un numero bomba!"; 
            document.getElementById("points").innerHTML = "Il tuo punteggio è " + punteggio;
            document.getElementById("again").innerHTML = "Ricarica la pagina per giocare di nuovo";
            break;
        } else {
            lista_utente.push(numUtente);
            punteggio = Number(punteggio + 1);
            document.getElementById("win").innerHTML = "Hai vinto!";
            document.getElementById("points").innerHTML = "Il tuo punteggio è " + punteggio;
        }
    }
} else if (level == 2){
    var punteggio = [];
    var lista_utente = [];
    while (lista_utente.length < 34){
        var numUtente = Number(prompt("Inserisci un numero intero da 1 a 50:"));

        if (lista_utente.includes(numUtente)) {
            alert("Numero già presente!");
        } else if (bombe.includes(numUtente)){
            alert("Numero bomba!");
            punteggio = Number(punteggio + 1 - 1);
            document.getElementById("win").innerHTML = "Hai inserito un numero bomba!"; 
            document.getElementById("points").innerHTML = "Il tuo punteggio è " + punteggio;
            document.getElementById("again").innerHTML = "Ricarica la pagina per giocare di nuovo";
            break;
        } else {
            lista_utente.push(numUtente);
            punteggio = Number(punteggio + 1);
            document.getElementById("win").innerHTML = "Hai vinto!";
            document.getElementById("points").innerHTML = "Il tuo punteggio è " + punteggio;
        }
    }
}


console.log(lista_utente);
console.log(punteggio);



