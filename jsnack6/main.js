// JSnack 6: Stampa le potenze di 2 fino a 1000
var base = 2
// crea un ciclo for per gli esponenti
for (var esponente = 0; Math.pow(base, esponente) < 1000; esponente++) {

    var potenza = Math.pow(base, esponente);
    console.log(potenza);
}
