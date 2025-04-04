// Alternância de tema claro/escuro
const temaToggle = document.getElementById("temaToggle");

if (temaToggle) {
  temaToggle.addEventListener("click", () => {
    document.body.classList.toggle("escuro");

    // Salva o tema no localStorage
    const temaAtual = document.body.classList.contains("escuro") ? "escuro" : "claro";
    localStorage.setItem("tema", temaAtual);
  });

  // Aplica o tema salvo ao carregar a página
  if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("escuro");
  }
}

// Lista de inscrições
const ul = document.getElementById("inscricoesUl");
const inscricoes = JSON.parse(localStorage.getItem("inscricoes")) || [];

if (ul) {
  if (inscricoes.length === 0) {
    ul.innerHTML = "<li>Nenhuma inscrição feita ainda.</li>";
  } else {
    inscricoes.forEach((item) => {
      const li = document.createElement("li");

      // Aqui estava o erro: faltava usar crase (template string)
      li.textContent = `${item.nome} - ${item.destino} (${item.data})`;

      ul.appendChild(li);
    });
  }
}
