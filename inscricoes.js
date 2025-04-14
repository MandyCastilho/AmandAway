const temaToggle = document.getElementById("temaToggle");

if (temaToggle) {
  // Verifica se há um tema salvo no localStorage
  const temaSalvo = localStorage.getItem("tema");

  // Se não houver tema salvo, define o modo claro como padrão
  if (temaSalvo === "escuro") {
    document.body.classList.add("escuro");
    temaToggle.textContent = "🌙";  // Lua (modo escuro)
  } else {
    document.body.classList.remove("escuro");
    temaToggle.textContent = "🌞";  // Sol (modo claro)
    // Define o tema como claro se não houver nada salvo
    localStorage.setItem("tema", "claro");
  }

  temaToggle.addEventListener("click", () => {
    const body = document.body;
    const estaEscuro = body.classList.toggle("escuro");

    // Atualiza o tema no localStorage
    const temaAtual = estaEscuro ? "escuro" : "claro";
    localStorage.setItem("tema", temaAtual);

    // Atualiza o ícone do botão
    temaToggle.textContent = estaEscuro ? "🌙" : "🌞";
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

