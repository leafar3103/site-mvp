const elemento = document.getElementById("texto-digitado");
const texto = "JOGA \n COM\n ALEGRIA!";
let index = 0;

function digitar() {
  if (index < texto.length) {
    elemento.textContent += texto.charAt(index);
    index++;
    setTimeout(digitar, 100); // 100ms é a velocidade da digitação
  }
  else {
    // OPCIONAL: Remove o cursor 2 segundos após terminar de digitar
    setTimeout(() => {
      elemento.classList.add("cursor-parado");
    }, 3000);
  }
}

// Inicia a função ao carregar a página
// window.onload = digitar;
setTimeout(digitar, 1000); // Inicia a digitação após 1 segundo de atraso
