// JSnack 5: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente


// chiedi all'utente un numero casuale N
var N = parseInt(prompt('Scrivi un numero a caso'));

// crea un ciclo for di N ripetizioni
for (var i = 0; i <= N; i++) {
    // eleva al cubo le i
    var cubo = Math.pow(i, 3);
    // stampa la lista di numeri al cubo
    console.log('il cubo di ' + i + ' è ' + cubo);
}
