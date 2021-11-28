// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Romulo",
            "cidade": "Belo Horizonte",
            "regiao": "Central",
            "email": "romulo@.gmail.com",
            "telefone": "(31)999999999",
            "evento": "Carnaval 2021"
        },
        {
            "id": 2,
            "nome": "Mariano",
            "cidade": "Betim",
            "regiao": "Central",
            "email": "mariano.hotmail.net",
            "telefone": "(31)999999999",
            "evento": "Missa Finados 2021"
        },
        {
            "id": 3,
            "nome": "Maria José",
            "cidade": "Gov Valadares",
            "regiao": "Rio Doce",
            "email": "mzeze@gmail.com",
            "telefone": "(31)999999999",
            "evento": "Encontro com Jesus 2021"
        },
        {
            "id": 4,
            "nome": "Lourenço",
            "cidade": "Itaúna",
            "regiao": "Centro-Oeste de Minas",
            "email": "LouLou@hotmail.com",
            "telefone": "(31)999999999",
            "Evento": "Feira de Roupas Bebê 2021"
        },
       
    ]
}

// Caso os dados j� estejam no Local Storage, caso contr�rio, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do �ltimo c�digo existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "Região": contato.regiao,
        "evento": nome.evento,
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].regiao = contato.regiao,
    db.data[index].evento = nome.evento,

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}