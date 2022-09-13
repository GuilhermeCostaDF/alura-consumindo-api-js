async function buscaEndereco() {
  let consultaCEP = await fetch("https://viacep.com.br/ws/71916500/json/");
  let consultaCepConvertida = await consultaCEP.json();
  console.log(consultaCepConvertida);
}

buscaEndereco();
