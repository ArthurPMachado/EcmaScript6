const usuario = {
  nome: "Arthur",
  idade: 21,
  endereço: {
    cidade: "São Paulo",
    estado: "São Paulo"
  }
}

function mostrarNome({ nome, idade}) {
  console.log(nome, idade);
}

mostrarNome(usuario);