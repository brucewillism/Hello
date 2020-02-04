var json = {
    person: [{
            "id": 1,
            "clientes": [{
                "id": 1,
                "nome": "PEDRO"
            }],
            "produtos": [{
                    "id": 1,
                    "descricao": "TECLADO",
                    "valor": 8190
                },
                {
                    "id": 2,
                    "descricao": "MOUSE",
                    "valor": 6190
                }
            ],
            "totalPedido": 14380
        },
        {
            "id": 2,
            "clientes": [{
                "id": 1,
                "nome": "PEDRO"
            }],
            "produtos": [{
                    "id": 1,
                    "descricao": "TECLADO",
                    "valor": 8190
                },
                {
                    "id": 2,
                    "descricao": "MOUSE",
                    "valor": 6190
                }
            ],
            "totalPedido": 14380
        },
        {
            "id": 3,
            "clientes": [{
                "id": 1,
                "nome": "PEDRO"
            }],
            "produtos": [{
                    "id": 1,
                    "descricao": "TECLADO",
                    "valor": 8190
                },
                {
                    "id": 2,
                    "descricao": "MOUSE",
                    "valor": 6190
                }
            ],
            "totalPedido": 14380
        }
    ]
};
//console.log(json);
for (var i = 0; i < json.person.length; i++) {
    var html = "<tr>";
    html += "<td>" + json.person[i].id + "</td>";
    html += "<td>" + json.person[i]['clientes'][0].id + "</td>";
    html += "<td>" + json.person[i]['clientes'][1] + "</td>";
    html += "<td>" + json.person[i]['produtos'][0].id + "</td>";
    html += "<td>" + json.person[i]['produtos'][1].descricao + "</td>";
    html += "<td>" + json.person[i]['produtos'][2].valor + "</td>";
    html += "<td>" + json.person[i].totalPedido + "</td>";
    html += "</tr>";
    $('table tbody').append(html);
}