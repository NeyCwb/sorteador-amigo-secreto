let listaDeAmigos = [];
const msgErro = document.getElementById("mensagemErro");
const lista = document.getElementById("listaAmigos");

//-------------------------------------------------------------------------
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (listaDeAmigos.includes(nome)) {
    msgErro.textContent =
      "Nome já registrado! Por favor insira um nome diferente.";
    return;
  } else {
    if (nome === "") {
      msgErro.textContent =
        "O nome não pode estar vazio! Por favor, insira um nome válido.";
      return;
    } else {
      msgErro.textContent = "";
      const li = document.createElement("li");
      li.textContent = nome;
      lista.appendChild(li);
      listaDeAmigos.push(nome);
      input.value = "";
    }
  }
}

//-----------------------------------------------------------------------------
function sortearAmigo() {
  if (listaDeAmigos.length < 2) {
    msgErro.textContent = "Adicione pelo menos dois nomes antes de sortear!";
    return;
  }

  lista.innerHTML = "";

  const sorteado =
    listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const li = document.createElement("li");
  li.textContent = `O amigo sorteado é: ${sorteado}`;
  resultado.appendChild(li);
}
