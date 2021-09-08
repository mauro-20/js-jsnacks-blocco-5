// Crea 10 oggetti che rappresentano una zucchina.;
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.;

const zucchine = [
  {
    'varieta': 'varieta 1',
    'peso': 120,
    'lunghezza': 12
  },
  {
    'varieta': 'varieta 2',
    'peso': 150,
    'lunghezza': 16
  },
  {
    'varieta': 'varieta 3',
    'peso': 200,
    'lunghezza': 30
  },
  {
    'varieta': 'varieta 4',
    'peso': 175,
    'lunghezza': 22
  },
  {
    'varieta': 'varieta 5',
    'peso': 80,
    'lunghezza': 10
  },
  {
    'varieta': 'varieta 6',
    'peso': 134,
    'lunghezza': 17
  },
  {
    'varieta': 'varieta 7',
    'peso': 157,
    'lunghezza': 22
  },
  {
    'varieta': 'varieta 8',
    'peso': 163,
    'lunghezza': 32
  },
  {
    'varieta': 'varieta 9',
    'peso': 323,
    'lunghezza': 34
  },
  {
    'varieta': 'varieta 10',
    'peso': 138,
    'lunghezza': 23
  },
];


let zucchineCorte = [];
let zucchineLunghe = [];
let zucchineCortePeso = 0;
let zucchineLunghePeso = 0;

for (var i = 0; i < zucchine.length; i++) {
  if (zucchine[i].lunghezza <= 15) {
    zucchineCorte.push(zucchine[i]);
    zucchineCortePeso += zucchine[i].peso
  } else {
    zucchineLunghe.push(zucchine[i]);
    zucchineLunghePeso += zucchine[i].peso
  }
}



console.log(zucchineCorte);
console.log(`peso zucchine corte: ${zucchineCortePeso}`);
console.log(zucchineLunghe);
console.log(`peso zucchine lunghe: ${zucchineLunghePeso}`);
