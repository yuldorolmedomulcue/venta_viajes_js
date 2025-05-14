//====================================conversiones de datos
// es el proceso de convertir un tipo de dato a otro



//string a number
let a = Number('Luis');
console.log(a);
console.log(typeof a);

//entero
let b = parseInt('32.60');
console.log( b);

//flotante
let c = parseFloat('32.60');
console.log( c);

//numero en html + variable
let d = +'32.60';
console.log( d);


//number a string
let e = String(32.60);
console.log(e);
console.log(typeof e);

//to estring
let f = 1;
let g = f.toString();
console.log(g);
console.log(typeof g);

// Date a numbers
let h = new Date();
let i = Number(h);

console.log(i);
console.log(typeof i);

// Date a string
let j = String(h);
console.log(j);
console.log(typeof j);

// Number a Boolean
let k = Boolean(0);
let l = Boolean(1); // 1,2... true

console.log(k);
console.log(typeof k);

let ricardo = 0;
if (ricardo && ricardo === 0) {  //0 es false, condiciona saldra false
    console.log('Ricardo es dato');
} else{
    console.log('Ricardo es null ');
}

// Boolean a string
let m = String(true);
let n = true.toString();
console.log(m);
