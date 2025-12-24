let a = 6;

// Method 1: Array + reduce se factorial
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys());
    let c = arr.slice(1).reduce((a, b) => a * b);
    return c;
}

// Method 2: for loop se factorial
function facFor(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index;
    }
    return fac;
}

// Output
console.log(factorial(a)); // 720
console.log(facFor(a));    // 720
