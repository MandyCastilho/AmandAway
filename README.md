# 🌍 AmandAway — Plataforma de Excursões

A **AmandAway** é uma aplicação web **front-end** desenvolvida para a divulgação e gerenciamento de inscrições em excursões turísticas pelo Brasil.  
O projeto combina **design moderno**, **interatividade**, **boa experiência do usuário (UX/UI)** e **persistência de dados no navegador**, sendo ideal como projeto de **portfólio acadêmico e profissional**.

---

## ✨ Funcionalidades

- ✔️ Apresentação institucional da marca  
- ✔️ Lista de excursões com **cards visuais**
- ✔️ Botão de contato direto via **WhatsApp**
- ✔️ Formulário de inscrição com **validação**
- ✔️ Salvamento das inscrições no navegador
- ✔️ Página exclusiva **“Minhas Inscrições”**
- ✔️ Alternância de tema **claro 🌞 / escuro 🌙**
- ✔️ Persistência do tema escolhido
- ✔️ Animações suaves ao rolar a página (**AOS.js**)
- ✔️ Layout **responsivo** (mobile, tablet e desktop)

---

## 🧭 Estrutura de Páginas

### 📄 `index.html`
- Header fixo com navegação  
- Hero section com identidade visual  
- Cards de destinos turísticos  
- Formulário de inscrição  
- Footer institucional  

### 📄 `inscricoes.html`
- Lista dinâmica de inscrições  
- Dados carregados do `localStorage`  
- Alternância de tema  
- Navegação simples e objetiva  

---

## 🎨 Estilização (CSS)

O projeto utiliza **CSS moderno**, organizado e escalável, com foco em **UX/UI**, acessibilidade, modo escuro e responsividade.

### 🔹 Destaques do CSS
- Variáveis CSS (`:root`) para padronização de cores  
- Gradientes modernos  
- Cards com imagens de fundo e overlay  
- Scrollbar personalizada  
- Efeitos de hover e microinterações  
- Modo escuro completo  
- Media Queries para diferentes tamanhos de tela  

---

## ⚙️ Lógica e Interatividade (JavaScript)

O **JavaScript** é responsável por toda a interatividade, persistência de dados e comportamento dinâmico da aplicação.

---

### 🌙 Alternância de Tema (Claro / Escuro)

- O botão de tema alterna a classe `escuro` no `<body>`
- O tema escolhido é salvo no `localStorage`
- O tema permanece mesmo após fechar ou recarregar a página
- Ícone do botão muda automaticamente (**🌞 / 🌙**)

📌 Implementado tanto na página principal quanto na página de inscrições.

---

## 📝 Formulário de Inscrição

### Captura:
- Nome  
- E-mail  
- Destino escolhido  

### Validação:
- Verificação simples para campos vazios  

### Estrutura do objeto de inscrição:
- Nome  
- E-mail  
- Destino  
- Data da inscrição (formato brasileiro)  

---

## 💾 Persistência com `localStorage`

- As inscrições são armazenadas localmente no navegador  
- Utiliza `JSON.stringify()` e `JSON.parse()`  
- Permite múltiplas inscrições  
- Os dados permanecem salvos mesmo após recarregar a página  

---

## 📋 Página “Minhas Inscrições”

- Leitura dos dados salvos no `localStorage`
- Exibição dinâmica das inscrições em lista
- Caso não haja inscrições:
  - Exibe mensagem amigável ao usuário
- Utiliza criação dinâmica de elementos (`createElement`)

---

## 🎬 Animações com AOS.js

- Animações ativadas ao rolar a página  
- Inicialização simples:
  ```js
  AOS.init();
- Melhora a experiência visual sem comprometer a performance

  ---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **AOS.js**
- **LocalStorage**
- **WhatsApp API**

---

## 🎯 Objetivo do Projeto

- Praticar desenvolvimento **front-end**
- Aplicar **JavaScript na prática**
- Trabalhar conceitos de **UX/UI**
- Simular um sistema real de inscrições
- Criar um projeto sólido para **portfólio acadêmico e profissional**

---

## 🧑‍💻 Autora

**Amanda Ramos Castilho**  
🎓 Formada em Análise e Desenvolvimento de Sistemas 

✨ Projeto desenvolvido para aprendizado e evolução contínua.

---

## 🔮 Possíveis Melhorias Futuras

- Modal de confirmação
- Filtro por destino
- Edição de inscrições
- Integração com API real
- Autenticação de usuários
- Versão **PWA**

---

## ✅ Status do Projeto

🚀 **Finalizado** — Projeto completo e funcional


