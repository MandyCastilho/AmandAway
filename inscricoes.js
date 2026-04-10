import { iniciarTema } from "./tema.js";
iniciarTema();

// Exibição da lista de inscrições salvas
const ul = document.getElementById("inscricoesUl");

// Garante que o localStorage tenha uma lista válida
const inscricoes = JSON.parse(localStorage.getItem("inscricoes")) || [];

// 👇 CRIA O BOTÃO
const btnLimpar = document.createElement("button");
btnLimpar.textContent = "Limpar inscrições";

// 👇 AÇÃO DO BOTÃO
btnLimpar.addEventListener("click", () => {
  localStorage.removeItem("inscricoes");
  location.reload();
});

// 👇 ADICIONA NA TELA
document.body.appendChild(btnLimpar);

if (ul) {
  // Limpa o conteúdo antes de adicionar (boa prática)
  ul.innerHTML = "";

  if (inscricoes.length === 0) {
    ul.innerHTML = "<li>Nenhuma inscrição feita ainda.</li>";
  } else {
inscricoes.forEach((item) => {
  const li = document.createElement("li");

  li.innerHTML = `
    ${item.nome} - ${item.destino} (${item.data})
    <button class="remover">❌</button>
  `;

  li.querySelector(".remover").addEventListener("click", () => {
    const novas = inscricoes.filter(i => i !== item);
    localStorage.setItem("inscricoes", JSON.stringify(novas));
    location.reload();
  });

  ul.appendChild(li);
});
}}

