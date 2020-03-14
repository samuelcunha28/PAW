// for each com objeto
const myObject = {a: 1, b: 2, c: 3};
for (const property in myObject) {
 console.log(property);
}
// neste pedaço de código, o ciclo irá imprimir as propriedades do objeto
console.log("");
// for each com array
const myArray = [1,2,3];
for (const property in myArray) {
 console.log(property);
}
// neste pedaço de código, o ciclo irá imprimir as posições que estão contidas no array
console.log("");
const object = {a: 1, b: 2, c: 3};
for (const property in object) {
 console.log("Propriedade: "+property+" Objeto: "+object[property]);
}
// neste pedaço de código, o ciclo irá imprimir as propriedades e os objetos de cada posição
console.log("");
const array = [1,2,3];
for (const property in array) {
 console.log(""+property+" "+array[property+""]);
}
// neste pedaço de código, o ciclo irá imprimir a propriedade e o objeto contido no array
console.log("");
// for of com arrays
//const object1 = {a: 1, b: 2, c: 3};
//for (const element of object1) {
// console.log(element);
//}
// não irá executar
// for of com arrays
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
 console.log(element);
}
// neste pedaço de código, o ciclo irá imprimir o elemento de cada posição do array
