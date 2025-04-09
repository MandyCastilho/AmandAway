// Inicialização do AOS (animações ao rolar)
AOS.init();

// Alternância de tema claro/escuro
const temaToggle = document.getElementById("temaToggle");

// Verifica se o botão existe antes de adicionar o evento
if (temaToggle) {
  // Aplica o tema salvo no localStorage ao carregar a página
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    document.body.classList.add("escuro");
  }

  // Evento de clique para alternar o tema
  temaToggle.addEventListener("click", () => {
    document.body.classList.toggle("escuro");

    // Atualiza o tema no localStorage
    const temaAtual = document.body.classList.contains("escuro") ? "escuro" : "claro";
    localStorage.setItem("tema", temaAtual);
  });
}

// Manipulação do formulário de inscrição
const form = document.getElementById("formInscricao");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const destino = document.getElementById("destino")?.value;

    // Verificação simples 
    if (!nome || !email || !destino) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const inscricao = {
      nome,
      email,
      destino,
      data: new Date().toLocaleDateString("pt-BR") // Formato BR
    };

    // Salvar no localStorage
    const inscricoesSalvas = JSON.parse(localStorage.getItem("inscricoes")) || [];
    inscricoesSalvas.push(inscricao);
    localStorage.setItem("inscricoes", JSON.stringify(inscricoesSalvas));

    const mensagem = document.getElementById("mensagem");
    if (mensagem) {
      mensagem.textContent = "Inscrição realizada com sucesso!";
      mensagem.style.color = "green";
      mensagem.style.fontWeight = "bold";

      // Esconde a mensagem após 5 segundos
      setTimeout(() => {
        mensagem.textContent = "";
      }, 5000);
    }

    // Limpa o formulário
    form.reset();
  });
}

