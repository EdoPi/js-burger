/*
- Scegli il nome dell'hamburger -> se è vuoto non puoi calcolare
- seleziona 1 o più condimenti -> il costo dei condimenti di deve sommare al totale
- se inserisci un discount c'è uno sconto del 20%
*/

var yourPrice = 50;
var elements = document.getElementsByClassName('ingredients-container')[0].getElementsByTagName('input');
var burgerName = document.getElementById('burger-name');
var discountCodes = ['pippo', 'jonh', 'pdor', 'kmer'];
var inputDiscount = document.getElementById('input-discount');
var percDiscount = 0.20;
var discountApply = false;
var elementsCounter = 0;
var totalText = document.getElementById('total-insert');
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
  elementsCounter = 0;

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked === true ) {
      elementsCounter += + 1;
      yourPrice += parseInt(elements[i].value);
    }
  }

  if (elementsCounter < 2 && burgerName.value === '') {
    alert ('devi prima dare un nome al tuo hamburger e scegliere almeno due ingredienti');
  } else if (burgerName.value === '' ) {
    alert (' devi inserire il nome del tuo hamburger')
  } else if (elementsCounter < 2) {
    alert ('devi selezionare almeno due ingredienti')
  } else{
    for (var i = 0; i < discountCodes.length; i++) {
      if (discountCodes[i] === inputDiscount.value) {
        discountApply = true
        yourPrice -= yourPrice * percDiscount;
        totalText.innerText = (yourPrice.toFixed(2));
      } else {
        totalText.innerText = (yourPrice.toFixed(2));
      }
    }
  }







});
/*for (var i = 0; i < discountCodes.length; i++) {
  if (discountCodes[i] === inputDiscount.value) {
    discountApply = true
  }
}*/

/*if (burgerName.value === '') {
  alert ('Devi inserire il nome del tuo hamburger');
}*/
