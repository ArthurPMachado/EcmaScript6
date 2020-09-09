"use strict";

var usuario = {
  nome: "Arthur",
  idade: 21,
  endereço: {
    cidade: "São Paulo",
    estado: "São Paulo"
  }
};

function mostrarNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostrarNome(usuario);
