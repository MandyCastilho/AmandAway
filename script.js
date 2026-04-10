import { iniciarTema } from "./tema.js";
iniciarTema();

AOS.init();

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

     if (!email.includes("@") || !email.includes(".")) {
    alert("Email inválido!");
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

