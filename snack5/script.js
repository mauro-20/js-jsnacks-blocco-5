// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri(“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”


function cut(arr, start = 0, end = -1) {
  let newArr = [];

  if (end == -1 || end > arr.length) {
    end = arr.length
  }
  
  let arrLength = end - start;
  

  while (newArr.length < arrLength) {
    newArr.push(arr[start]);
    start++;
  }

  return newArr;
}


let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(cut(arr, 2));