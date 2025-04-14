// Inicialização do AOS (animações ao rolar)
AOS.init();

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

