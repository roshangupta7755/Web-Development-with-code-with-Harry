let a = prompt("Enter first number")

let b = prompt("Enter second number")
if (isNaN(a)|| isNaN(b)) {
	throw SyntaxError("Sorry this is not allowe")
	
}
let sum = parseInt(a) + parseInt(b)
function main(){ 
	let x = 2
	try {
		console.log('Sum is ',sum *x);
		
	} catch (error) {
		console.log('Error a gya bhai jiiiii....');
		
	}
	finally{
		console.log('file are being close and db connetion is being close');
		
	}
}
 
main()