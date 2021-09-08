// Scrivi una funzione che fonda due array(aventi lo stesso numero di
// elementi) prendendo alternativamente gli elementi da uno e dall’altro;
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].;


function joinArray(arr1, arr2) {
  if (arr1.length != arr2.length){
    return undefined
  } else {
    let arrJoint = []
    for (let i = 0; i < arr1.length; i++) {
      arrJoint.push(arr1[i]);
      arrJoint.push(arr2[i])
    }
    return arrJoint
  }
}

let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];

console.log(joinArray(arr1, arr2));
