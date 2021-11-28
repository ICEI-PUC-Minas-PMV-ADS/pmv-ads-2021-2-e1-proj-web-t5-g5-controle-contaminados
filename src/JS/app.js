// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Fernanda",
            "cidade": "Belo Horizonte",
            "regiao": "Central",
            "email": "fernanda@.gmail.org",
            "telefone": "(31)999999999",
            "website": "fernanda.org"
        },
        {
            "id": 2,
            "nome": "Luiz",
            "cidade": "Betim",
            "regiao": "Central",
            "email": "luiz@.hotmail.net",
            "telefone": "(31)999999999",
            "website": "luiz.net"
        },
        {
            "id": 3,
            "nome": "Clementine",
            "cidade": "Gov Valadares",
            "regiao": "Rio Doce",
            "email": "clecle@gmail.org",
            "telefone": "(31)999999999",
            "website": "clecle.org"
        },
        {
            "id": 4,
            "nome": "Patricia",
            "cidade": "Itaúna",
            "regiao": "Centro-Oeste de Minas",
            "email": "paty@hotmail.org",
            "telefone": "(31)999999999",
            "website": "paty.org"
        },
        {
            "id": 5,
            "nome": "Maurício",
            "cidade": "Almenara",
            "regiao": "Jequitinhonha/Mucuri",
            "email": "mauricinho@hotmail.com",
            "telefone": "(31)999999999",
            "website": "mauricinho.com"
        },
        {
            "id": 6,
            "nome": "Maria José",
            "cidade": "Paracatu",
            "regiao": "Noroeste de Minas",
            "email": "mjose@gmail.org",
            "telefone": "(31)999999999",
            "website": "mjose.org"
        },
        {
            "id": 7,
            "nome": "Fabiana",
            "cidade": "Montes Claros",
            "regiao": "Norte de Minas",
            "email": "fafa@gmail.org",
            "telefone": "(31)999999999",
            "website": "fafa.org"
        },
        {
            "id": 8,
            "nome": "Fernando",
            "cidade": "Uberlândia",
            "regiao": "Triângulo",
            "email": "nando@gmail.com",
            "telefone": "(31)999999999",
            "website": "nando.com"
        },
        {
            "id": 9,
            "nome": "Fabiane",
            "cidade": "Poços de Caldas",
            "regiao": "Sul de Minas",
            "email": "fabiane@hotmail.com",
            "telefone": "(31)999999999",
            "website": "fabiane.com"
        },
        {
            "id": 10,
            "nome": "Eduardo",
            "cidade": "Juiz de Fora",
            "regiao": "Zona da Mata",
            "email": "edu@yahoo.net",
            "telefone": "(31)999999999",
            "website": "edu.net"
        }
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
        "website": contato.website
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
    db.data[index].website = contato.website

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