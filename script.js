const text = "Will you be my Valentine?";
const delay = 100; // Delay between each letter in milliseconds
const typewriter = document.getElementById("typewriter");

let index = 0;

function typeWriter() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, delay);
  }
}

typeWriter();
