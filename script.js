async function buscaEndereco(cep) {
  try {
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let consultaCepConvertida = await consultaCEP.json();
    if (consultaCepConvertida.erro) {
      throw Error("CEP não existente!");
    }

    var cidade = document.getElementById("cidade");
    var logradouro = document.getElementById("endereco");
    var estado = document.getElementById("estado");
    var bairro = document.getElementById("bairro");

    cidade.value = consultaCepConvertida.localidade;
    logradouro.value = consultaCepConvertida.logradouro;
    estado.value = consultaCepConvertida.uf;
    bairro.value = consultaCepConvertida.bairro;

    console.log(consultaCepConvertida);
    return consultaCepConvertida;
  } catch (erro) {
    console.log(erro);
  }
}

var cep = document.querySelector("#cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
