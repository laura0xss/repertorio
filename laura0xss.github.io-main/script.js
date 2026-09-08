const botaoSobre = document.getElementById("sobre");

botaoSobre.addEventListener("click", function () {
    console.log("O botão foi clicado!");
 });
 const titulo = document.querySelector("h1");
botaoSobre.addEventListener("click", function () {
    titulo.textContent = "Obrigada por visitar meu portfólio!";
});