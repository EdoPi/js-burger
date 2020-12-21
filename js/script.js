/*
- Scegli il nome dell'hamburger -> se è vuoto non puoi calcolare
- seleziona 1 o più condimenti -> il costo dei condimenti di deve sommare al totale
- se inserisci un discount c'è uno sconto del 20%
*/

var yourPrice = 50;
var elements = document.getElementsByClassName('ingredients-container')[0].getElementsByTagName('input');
var burgerName = document.getElementById('burger-name');
var discountCodes = ['pippo', 'jonh', 'pdor', 'kmer'];
var percDiscount = 0.20;

/*
creo un listener che quando clicco esegue:
- creo il reset del prezzo
- un if per controllare se NON c'è il titolo -> alert
- un if per controllare se NON ci sono spunte -> alert
- un else per ciclare gl'ingredienti con un if per controllare se c'è il discount e quindi calcolarlo
OPPURE calcolare senza discount.
*/

document.getElementById("button-submit").addEventListener("click", function() {
  yourPrice = 50;

  if (burgerName.value === '') {
    alert ('Devi inserire il nome del tuo hamburger');
  } else {
    for (var i = 0; i < discountCodes.length; i++) {
      if (discountCodes[i] === discountCodes[i]) {


        for (var i = 0; i < elements.length; i++) {
          if (elements[i].checked === true) {
            console.log(elements[i]);
            yourPrice += parseInt(elements[i].value);
            console.log(yourPrice);

          }
        }

      }
    }

  }









});
