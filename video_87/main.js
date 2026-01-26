const { error } = require("console");
const fs = require("fs")

console.log(fs);
console.log("starting");

// fs.writeFileSync("ROshan.txt" , "Roshan is a Good Boy .... You no na ...!!!")

fs.writeFile("ROshan.txt", "Roshan -- is a Good Boy .... You no na ...!!!--------", () => {
	console.log("Done ");
	fs.readFile("ROshan.txt", (error, data) => {
		console.log(error, data.toString());

	})

})
fs.appendFile("ROshan.txt", "Roshan bhai again ", (e, d) => {
	console.log(d);

})
console.log("ending");
