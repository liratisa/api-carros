const url = "http://localhost:6070/api/carros";
const div = document.querySelector(".mostrar");
const btn = document.querySelector(".btn");
const ul = document.createElement("ul");

async function mostraCarros() {
  const awaitUrl = await fetch(url);
  const json = await awaitUrl.json();

  const result = json.result;
  console.log(result);

  for (let i = 0; i < result.length; i++) {
    cod.innerHTML = `${result[i].codigo}`;
    desc.innerHTML = `${result[i].descricao}`;
    placa.innerHTML = `${result[i].placa}`;
  }

  //   result.forEach((item) => {
  //     cod.innerHTML = `${item.codigo}`;
  //     desc.innerHTML = `${item.descricao}`;
  //     placa.innerHTML = `${item.placa}`;
  //   });
}

mostraCarros();

btn.addEventListener("click", mostraCarros);
