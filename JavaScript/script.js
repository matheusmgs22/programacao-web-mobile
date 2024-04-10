let vetor = [];
let isPilha = true;

document.getElementById('addButton').addEventListener('click', function() {
  const numero = parseInt(document.getElementById('numberInput').value);
  if (!isNaN(numero)) {
    if (isPilha) {
      vetor.push(numero); // Adiciona na pilha
    } else {
      vetor.push(numero); // Adiciona na fila
    }
    console.log('Vetor:', vetor);
  } else {
    console.log('Por favor, insira um número válido.');
  }
});

document.getElementById('removeButton').addEventListener('click', function() {
  if (vetor.length > 0) {
    if (isPilha) {
      vetor.pop(); // Remove da pilha
    } else {
      vetor.shift(); // Remove da fila
    }
    console.log('Elemento removido.');
  } else {
    console.log('O vetor está vazio.');
  }
  console.log('Vetor:', vetor);
});

document.getElementById('clearButton').addEventListener('click', function() {
  vetor = []; // Limpa o vetor
  console.log('Vetor limpo.');
});

document.getElementById('pilha').addEventListener('click', function() {
  isPilha = true;
  vetor = []; // Limpa o vetor
  console.log('Modo alterado para: Pilha');
});

document.getElementById('fila').addEventListener('click', function() {
  isPilha = false;
  vetor = []; // Limpa o vetor
  console.log('Modo alterado para: Fila');
});
