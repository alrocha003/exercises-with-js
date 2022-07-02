const prompt = require('prompt-sync')({ sigint: true });

let time = parseInt(prompt('Número de entradas: '));
let listNum = [], i = 1;
let soma = (listNum) => listNum.reduce((partial, num) => partial + num);


function getEntry(time) {
    let num = Number(prompt(`Informe o número da ${i++} entrada: `));
    if (!isNaN(num)) {
        listNum.push(num);
        time--;
    }
    if (time == 0)
        return;

    getEntry(time);
}

getEntry(time);
console.debug(soma(listNum));