console.log("===== ORIGINAL ARRAY =====");
let arr = [5, 2, 9, 1, 7];
console.log(arr);


// 1. sort()
console.log("\n===== sort() =====");
let sortedArr = [...arr].sort((a, b) => a - b);  
console.log(sortedArr);


// 2. concat()
console.log("\n===== concat() =====");
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);


// 3. delete
console.log("\n===== delete =====");
let delArr = [10, 20, 30];
delete delArr[1];
console.log(delArr); // leaves empty item


// 4. unshift()
console.log("\n===== unshift() =====");
let uArr = [2, 3, 4];
uArr.unshift(1);
console.log(uArr);


// 5. shift()
console.log("\n===== shift() =====");
let shArr = [10, 20, 30];
shArr.shift();
console.log(shArr);


// 6. pop()
console.log("\n===== pop() =====");
let pArr = [1, 2, 3];
pArr.pop();
console.log(pArr);


// 7. push()
console.log("\n===== push() =====");
let puArr = [1, 2];
puArr.push(3);
console.log(puArr);


// 8. join()
console.log("\n===== join() =====");
let jArr = [1, 2, 3];
console.log(jArr.join(" and "));


// 9. toString()
console.log("\n===== toString() =====");
let tArr = [10, 20, 30];
console.log(tArr.toString());


// 10. splice()
console.log("\n===== splice() =====");
let spArr = [1, 2, 3, 4, 5];
spArr.splice(1, 2); 
console.log("Remove:", spArr);

spArr.splice(1, 0, 222);
console.log("Add:", spArr);

spArr.splice(1, 2, 333, 444);
console.log("Replace:", spArr);


// 11. slice()
console.log("\n===== slice() =====");
let slArr = [10, 20, 30, 40];
let sliced = slArr.slice(1, 3);
console.log(sliced);


// 12. reverse()
console.log("\n===== reverse() =====");
let rArr = [1, 2, 3];
rArr.reverse();
console.log(rArr);
