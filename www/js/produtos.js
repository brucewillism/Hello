var json = {
    person: [{
            "id": 1,
            "descricao": "TECLADO",
            "valor": 8190
        },
        {
            "id": 2,
            "descricao": "MOUSE",
            "valor": 6190
        },
        {
            "id": 3,
            "descricao": "MONITOR",
            "valor": 75150
        },
        {
            "id": 4,
            "descricao": "CADEIRA",
            "valor": 70000
        },
        {
            "id": 5,
            "descricao": "NOTEBOOK",
            "valor": 650000
        }
    ]
};

//console.log(json);
for (var i = 0; i < json.person.length; i++) {
    var html = "<tr>";
    html += "<td>" + json.person[i].id + "</td>";
    html += "<td>" + json.person[i].descricao + "</td>";
    html += "<td>" + json.person[i].valor + "</td>";
    html += "</tr>";
    $('table tbody').append(html);
}