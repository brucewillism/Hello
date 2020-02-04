var json = {
    person: [{
            "id": 1,
            "nome": "PEDRO"
        },
        {
            "id": 2,
            "nome": "MARIA"
        },
        {
            "id": 3,
            "nome": "JOSE"
        },
        {
            "id": 4,
            "nome": "JOÃO",
        }
    ]
};

//console.log(json);
for (var i = 0; i < json.person.length; i++) {
    var html = "<tr>";
    html += "<td>" + json.person[i].id + "</td>";
    html += "<td>" + json.person[i].nome + "</td>";
    html += "</tr>";
    $('table tbody').append(html);
}