const dado = document.getElementById("gerar-conselho");
const numeroConselho = document.getElementById("numero-conselho");
const texto = document.querySelector(".carregando");
dado.addEventListener("click", function(){
    gerarConselho();
});
async function gerarConselho(){
    const url =  await fetch("https://api.adviceslip.com/advice")
    const conselho = await url.json();
    const id = `Conselho #${conselho.slip.id}`;
    const frase = `"${conselho.slip.advice}"`;

    numeroConselho.innerHTML = id;
    texto.innerHTML = frase;
}

// document.getElementById('gerar-conselho').addEventListener('click', ()=>{
//     conselhoAleatorio()
// })

// async function gerarConselho(){
//     const url = `https://api.adviceslip.com/advice`
//     const conselho = await fetch(url);
//     return await conselho.json();
// }

// async function conselhoAleatorio(){
//     const conselho = await gerarConselho()
// }
