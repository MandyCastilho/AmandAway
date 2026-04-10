export function iniciarTema() {
  const temaToggle = document.getElementById("temaToggle");

  if (!temaToggle) return;

  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "escuro") {
    document.body.classList.add("escuro");
    temaToggle.textContent = "🌙";
  } else {
    document.body.classList.remove("escuro");
    temaToggle.textContent = "🌞";
    localStorage.setItem("tema", "claro");
  }

  temaToggle.addEventListener("click", () => {
    const estaEscuro = document.body.classList.toggle("escuro");
    localStorage.setItem("tema", estaEscuro ? "escuro" : "claro");
    temaToggle.textContent = estaEscuro ? "🌙" : "🌞";
  });
}