/*
<-----ESERCIZIO----->
- Scegli il nome dell'hamburger -> se è vuoto non puoi calcolare
- seleziona 1 o più condimenti -> il costo dei condimenti di deve sommare al totale
- se inserisci un discount c'è uno sconto del 20%
*/


/*
- Creo le mie variabili
- stampo il risultato pulito senza ingredienti
creo un listener che quando clicco esegue:
- creo il reset del prezzo
- creo il reset del counter
- ciclo gl'ingredienti per controllare se sono più di due e per salvarmi il totale.
- un if per controllare le tre condizioni che mi sevono ( titolo + ingredienti, solo titolo, solo ingredienti)
- Nell'else eseguo il resto del codice
- all'interno dell'elso faccio verifica su discount
- stampo il risultato
*/


//Le mie variabili:
var yourPrice = 50;
var elements = document.getElementsByClassName('ingredients-container')[0].getElementsByTagName('input');
var burgerName = document.getElementById('burger-name');
var discountCodes = ['pippo', 'jonh', 'pdor', 'kmer'];
var inputDiscount = document.getElementById('input-discount');
var percDiscount = 0.20;
var discountApply = false;
var elementsCounter = 0;
var totalText = document.getElementById('total-insert');

//print del totale senza ingredienti
totalText.innerText = (yourPrice.toFixed(2));


//ho creato il listener il quale al click attiva tutte le istruzioni che voglio eseguire
document.getElementById("button-submit").addEventListener("click", function() {


// eseguo un reset dei 'contatori' che utilizzerò
  yourPrice = 50;
  elementsCounter = 0;

// eseguo un ciclo degli ingredienti per salvarmi l'elemento di validazione e il totale del costo
// così da poterli riutilizzare dopo
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked === true ) {
      elementsCounter += + 1;
      yourPrice += parseInt(elements[i].value);
    }
  }

// eseguo le verifiche
  if (elementsCounter < 2 && burgerName.value.length === 0) {
    alert ('ALERT!!!\n- Devi prima dare un nome al tuo hamburger; \n- Devi scegliere almeno due ingredienti.');
  } else if (burgerName.value.length === 0 ) {
    alert ('ALERT!!!\n- Devi prima dare un nome al tuo hamburger.')
  } else if (elementsCounter < 2) {
    alert ('ALERT!!!\n- Devi selezionare almeno due ingredienti.')
  } else{
    // ciclo lo sconto per controllare se è applicabile
    for (var i = 0; i < discountCodes.length; i++) {
      if (discountCodes[i] === inputDiscount.value) {
        discountApply = true
        yourPrice -= yourPrice * percDiscount;
      }
      // stampo il totale finale
      totalText.innerText = (yourPrice.toFixed(2));
    }
  }
});
