// Capturando os elementos do DOM
const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const link = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");

// Adicionando texto ao h1 e ao link
titulo.innerText = "Manipulando o DOM com JavaScript";
link.innerText = "Visite o site da Proz Educação";

// Adicionando três itens à lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando três itens com links à lista ordenada
listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com" target="_blank">Google</a></li>
    <li><a href="https://www.github.com" target="_blank">GitHub</a></li>
    <li><a href="https://www.wikipedia.org" target="_blank">Wikipedia</a></li>
`;
