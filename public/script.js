let numerosDisponiveis = [];
let numeroAtual = null;

// Função para iniciar o sorteio
function iniciarSorteio() {
  const qtd = prompt("Quantos números você deseja sortear? (Padrão: 90)");
  let quantidade = parseInt(qtd);

  if (!quantidade || quantidade <= 0 || isNaN(quantidade)) {
    quantidade = 90; // Padrão
  }

  // Reinicia
  numerosDisponiveis = Array.from({ length: quantidade }, (_, i) => i + 1);
  document.getElementById("listaSorteados").innerHTML = "";
  document.getElementById("numeroAtual").textContent = "-";
  document.getElementById("btnSortear").disabled = false;

  // Habilita o botão "Sortear"
  document.getElementById("btnSortear").disabled = false;
}

// Função para sortear um número
function sortearNumero() {
  if (numerosDisponiveis.length === 0) {
    alert("Todos os números foram sorteados!");
    return;
  }

  const numeroContainer = document.getElementById("numeroAtualContainer");
  numeroContainer.classList.add("embaralhando"); // Inicia animação

  // Simula o embaralhamento com uma animação
  const intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * numerosDisponiveis.length);
    document.getElementById("numeroAtual").textContent = numerosDisponiveis[randomIndex];
  }, 100);

  // Tempo de embaralhamento aleatório entre 5 e 10 segundos
  const embaralhamentoTempo = Math.random() * 5000 + 5000;

  setTimeout(() => {
    clearInterval(intervalId);

    // Escolhe um número aleatório final
    const index = Math.floor(Math.random() * numerosDisponiveis.length);
    const numero = numerosDisponiveis.splice(index, 1)[0];

    numeroAtual = numero;

    // Atualiza tela
    document.getElementById("numeroAtual").textContent = numero;
    const li = document.createElement("li");
    li.textContent = numero;
    document.getElementById("listaSorteados").appendChild(li);

    numeroContainer.classList.remove("embaralhando"); // Encerra animação
  }, embaralhamentoTempo);
}
