AOS.init();

const temaToggle = document.getElementById("temaToggle");

if (temaToggle) {
  temaToggle.addEventListener("click", () => {
    document.body.classList.toggle("escuro");
    localStorage.setItem("tema", document.body.classList.contains("escuro") ? "escuro" : "claro");
  });

  if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("escuro");
  }
}

// Formulário de inscrição
const form = document.getElementById("formInscricao");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const destino = document.getElementById("destino").value;

    const inscricao = { nome, email, destino, data: new Date().toLocaleDateString() };

    let inscricoes = JSON.parse(localStorage.getItem("inscricoes")) || [];
    inscricoes.push(inscricao);
    localStorage.setItem("inscricoes", JSON.stringify(inscricoes));

    alert("Inscrição realizada com sucesso!");
    form.reset();
  });
}