const formula = require('./FormulaModule.js');
let panjang = Math.floor (Math.random()* 15) +1;
let lebar = Math.floor (Math.random()* 15) +1;


console.log("panjang = " + panjang);
console.log("lebar = " + lebar);
console.log("============================");

console.log("Keliling dari segi empat tersebut adalah " + formula.keliling(panjang, lebar) + " satuan panjang");
console.log("Luas dari segi empat tersebut adalah " + formula.luas(panjang, lebar) + " satuan panjang");