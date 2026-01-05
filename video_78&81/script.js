const messages = [
  "Initializing Hacking",
  "Reading your Files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up"
];

const terminal = document.getElementById("terminal");

function getRandomTimeMS() {
  return (Math.floor(Math.random() * 7) + 1) * 1000;
}

let index = 0;

function addStep() {
  if (index < messages.length) {
    const line = document.createElement("div");
    line.className = "loading";
    line.innerText = messages[index];
    terminal.appendChild(line);

    let delay = getRandomTimeMS();
    index++;

    setTimeout(() => {
      line.classList.remove("loading"); // dots stop
      addStep();
    }, delay);

  } else {
    const done = document.createElement("div");
    done.innerText = "Hack Completed ✔";
    terminal.appendChild(done);
  }
}

addStep();
