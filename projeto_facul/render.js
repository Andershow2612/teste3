function fetchData() {
    fetch('https://apicontroledefrotas-production.up.railway.app/AndersonEstudo')
        .then(response => response.json())
        .then(data => renderizarRegistros(data.registros))
        .catch(error => console.error('Erro ao buscar os dados:', error));
}

// Função para renderizar os registros no HTML
function renderizarRegistros(registros) {
    const container = document.getElementById('registros-container');

    registros.forEach(registro => {
        const div = document.createElement('div');
        div.innerHTML = `
                <div class="infoproduto">
                    <p>ID: ${registro.id}</p>
                    <p>Nome do Produto: ${registro.nomeProduto}</p>
                    <p>Tamanho do Produto: ${registro.tamanhoProduto}</p>
                    <p>Potência do Produto: ${registro.potenciaProduto}</p>
                    <p>Marca do Produto: ${registro.marcaProduto}</p>
                </div>
                    <div><img class="asdasdss" src="${registro.imagemProduto}"/></div>
            `;
        container.appendChild(div);
    });
}

window.onload = fetchData;