// Using for loop
let a = 6;
let fac = 1;

for (let i = 1; i <= a; i++) {
    fac *= i;
}

console.log("Factorial using loop:", fac);


// Using reduce()
const n = 6;
const arr = Array.from({ length: n }, (_, i) => i + 1);

const factorial2 = arr.reduce((acc, val) => acc * val, 1);

console.log("Factorial using reduce:", factorial2);
