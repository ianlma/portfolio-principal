const textArr = [
    "Estudante de ADS na FMU", 
    "Desenvolvedor Java & C++", 
    "Operador de atendimento na Hapvida",
    "Buscando Vaga Remota"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === textArr.length) {
        count = 0;
    }
    currentText = textArr[count];
    letter = currentText.slice(0, ++index);

    const typewriterElement = document.getElementById("typewriter");
    if (typewriterElement) {
        typewriterElement.textContent = letter;
    }
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2500); 
    } else {
        setTimeout(type, 100); 
    }
}

document.addEventListener("DOMContentLoaded", type);
