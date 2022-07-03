import Veichle from "./veichle.js";
import Motorcycle from './motorcycle.js';

let hb20 = new Veichle('Gasolina/Etanol', 25.00);

console.debug(hb20.verifyFuel());
console.debug(hb20.autonomy(5.5));

let hornet = new Motorcycle();
