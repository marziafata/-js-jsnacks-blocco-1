// JSnack 6: Stampa le potenze di 2 fino a 1000
var base = 2;
// crea un ciclo for per gli esponenti
for (var esponente = 0; Math.pow(base, esponente) < 1000; esponente++) {

    var potenza = Math.pow(base, esponente);
    console.log(potenza);
}

// // metodo alternativo
// // JSnack 6: Stampa le potenze di 2 fino a 1000
// var base = 2;
// var potenza = 0;
// // crea un ciclo for per gli esponenti
// for (var esponente = 0; potenza < 1000; esponente++) {
//     console.log(potenza);
// questo va sopra perchè è vincolante l'ordine di ripetizione del ciclo.
//     var potenza = Math.pow(base, esponente);
//
// }

// dichiarazione variabile
// espressioneIniziale, se esiste, viene eseguita. L'espressione di solito inizializza uno o più indici, ma la sintassi permette di scrivere espressioni con diversi gradi di compessità. Questa espressione può anche dichiarare delle variabili.
// test
// La condizione viene verificata. Se il suo valore è true, l'espressione istruzione viene eseguita. Se invece condizione è false, il ciclo finisce. Se condizione è omessa, l'espressione si assume sia true.
// istruzione viene esguita. Per eseguire diverse istruzioni, è necessario usare il blocco ({ ... }) per raggrupparle.
// incremento
// Viene incrementata la l'espressione incremento, se esiste, eseguita, e il ciclo for va al passo successivo.
