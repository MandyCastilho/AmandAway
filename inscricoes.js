// Alternância de tema claro/escuro
const temaToggle = document.getElementById("temaToggle");

// Verifica se o botão existe
if (temaToggle) {
  // Aplica o tema salvo ao carregar a página
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    document.body.classList.add("escuro");
  }

  // Alterna o tema ao clicar no botão
  temaToggle.addEventListener("click", () => {
    document.body.classList.toggle("escuro");

    const temaAtual = document.body.classList.contains("escuro") ? "escuro" : "claro";
    localStorage.setItem("tema", temaAtual);
  });
}

// Exibição da lista de inscrições salvas
const ul = document.getElementById("inscricoesUl");

// Garante que o localStorage tenha uma lista válida
const inscricoes = JSON.parse(localStorage.getItem("inscricoes")) || [];

if (ul) {
  // Limpa o conteúdo antes de adicionar (boa prática)
  ul.innerHTML = "";

  if (inscricoes.length === 0) {
    ul.innerHTML = "<li>Nenhuma inscrição feita ainda.</li>";
  } else {
    inscricoes.forEach((item) => {
      const li = document.createElement("li");

      // Usa template string com crase para facilitar leitura
      li.textContent = `${item.nome} - ${item.destino} (${item.data})`;

      ul.appendChild(li);
    });
  }
}

