function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoBusca = document.getElementById("campoBusca").value.trim().toLowerCase();  // Valor do campo de busca em minúsculas
    let resultados = "";

    // Verifica se o campo de busca está vazio
    if (campoBusca === "") {
        alert("Por favor, digite um termo de busca.");
        return;
    }

    // Para cada dado dentro da lista de dados (assumindo que 'dados' vem de 'dados.js')
    let encontrado = false;
    for (let dado of dados) {
        // Verifica se o título ou a descrição contém o termo de busca (case-insensitive)
        if (dado.titulo.toLowerCase().includes(campoBusca) || dado.descricao.toLowerCase().includes(campoBusca)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descriçao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Saiba mais sobre IA</a>
                </div>
            `;
            encontrado = true;  // Marcador para saber se algo foi encontrado
        }
    }

    // Se algum resultado foi encontrado, exibe, senão mostra mensagem de "nenhum resultado"
    if (encontrado) {
        section.innerHTML = resultados;
        section.style.display = "block";  // Mostra a seção de resultados
    } else {
        section.innerHTML = "<p>Nenhum resultado encontrado para a sua busca.</p>";
        section.style.display = "block";
    }
}
