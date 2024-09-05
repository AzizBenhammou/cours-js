let a = 2;
a = a - 1;
a++;

let b = 8;
b += 2;

let c = a + b * b;
let d = a * b + b;
let e = a * (b + b);
let f = a * b / a;
let g = b / a * a;


document.write(`<p>a = ${a}</p>`);
document.write(`<p>b = ${b}</p>`);
document.write(`<p>c = ${c}</p>`);
document.write(`<p>d = ${d}</p>`);
document.write(`<p>e = ${e}</p>`);
document.write(`<p>f = ${f}</p>`);
document.write(`<p>g = ${g}</p>`);


console.log(`a = ${a}`)
console.log(`b = ${b}`)
console.log(`c = ${c}`)
console.log(`d = ${d}`)
console.log(`e = ${e}`)
console.log(`f = ${f}`)
console.log(`g = ${g}`)

