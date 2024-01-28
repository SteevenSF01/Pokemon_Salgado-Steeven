import * as CLASS from "./class.js";
import * as INSTANCE from "./instance.js";
import * as FUNCTION from "./function.js";

FUNCTION.startGame();

console.log(INSTANCE.carapuce);
console.log(INSTANCE.salameche);
console.log(INSTANCE.carapuce);


// let metodosDeAtaque = Object.getOwnPropertyNames(Object.getPrototypeOf(INSTANCE.bulbizarre)).filter(function (property) {
//     return typeof INSTANCE.bulbizarre[property] === 'function' && property !== 'constructor';
// });
// metodosDeAtaque.forEach(function (metodo) {
//     console.log(metodo);
// });
// console.log(methodeAttaqueAdv);


// let test = {
//     vie : 1000
// }
// INSTANCE.bulbizarre.methodes.fouet_Lianes(test)
