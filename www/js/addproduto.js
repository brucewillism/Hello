var lista_itens = {
    person: [{
        "pedidosId": 4,
        "clientesId": 1,
        "totalPedido": 14380,
        "itens": [{
                "produtoId": 1
            },
            {
                "produtoId": 2
            }
        ]

    }]
};

function salvarItens() {
    var itens = document.getElementById("itens").value;

    // Pega a lista já cadastrada, se não houver vira um array vazio
    var lista_itens = JSON.parse(localStorage.getItem('lista-itens') || '[]');
    // Adiciona pessoa ao cadastro
    lista_itens.push({
        itens: itens,

    });

    // Salva a lista alterada
    localStorage.setItem("lista-itens", JSON.stringify(lista_itens));

    console.log('Salva com sucesso.');
}