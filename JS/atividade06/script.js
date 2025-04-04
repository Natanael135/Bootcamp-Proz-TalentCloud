// MÉTODO SIMPLES: innerHTML para adicionar um título
document.body.innerHTML += `<h1 id="titulo">Loja Virtual</h1>`;

// MÉTODO COMPLEXO: createElement para criar um produto
const produto = document.createElement("div");

// Adicionando conteúdo ao produto
produto.innerHTML = `
    <h2>Fone de Ouvido Bluetooth</h2>
    <p>Ótima qualidade de som e bateria de longa duração.</p>
    <p><strong>Preço:</strong> R$ 199,90</p>
    <img src="https://via.placeholder.com/150" alt="Fone de Ouvido">
`;

// Estilizando o produto
produto.style.border = "1px solid #ccc";
produto.style.padding = "10px";
produto.style.marginTop = "10px";
produto.style.textAlign = "center";
produto.style.maxWidth = "300px";

// Adicionando o produto ao body
document.body.appendChild(produto);
