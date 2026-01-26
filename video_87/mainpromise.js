import fs from "fs/promises";

let a = await fs.readFile("ROshan.txt");

let b = await fs.appendFile("ROshan.txt" , " \n \n \n \n \n Tis is a grete ... You can do ate bro ,,,,...")

console.log(a.toString() , b );
