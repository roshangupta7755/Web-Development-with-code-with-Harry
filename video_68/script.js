console.log("hello world")

// let boxs = document.getElementsByClassName("box")
// console.log(boxs)

// boxs[2].style.backgroundColor = "red"
 
// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "red"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e  => {
	e.style.backgroundColor = "red"
});

console.log(document.getElementsByTagName("div"))
