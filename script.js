async function buscaEndereco(cep) {
  try {
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let consultaCepConvertida = await consultaCEP.json();
    if (consultaCepConvertida.erro) {
      throw Error("CEP não existente!");
    }
    console.log(consultaCepConvertida);
    return consultaCepConvertida;
  } catch (erro) {
    console.log(erro);
  }
}
