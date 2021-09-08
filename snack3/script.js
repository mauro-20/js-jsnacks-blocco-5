// Scrivi una funzione che accetti una stringa come argomento e la ritorni;
// girata(es.Ciao -> oaiC);

function reverse(str) {

  let strReverse = ''
  for (let i = str.length -1; i >= 0; i--){
    strReverse += str[i]
  }
  return strReverse
  
}

console.log(reverse('ciao'));