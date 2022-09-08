const nomes = [];
const idade = [];
const telefone = [];

function exibe() {
    let name = nomes[nomes.length - 1];
    let age = idade[idade.length - 1]
    let phone = telefone[telefone.length - 1]
        let card = "<div class='card'>" +
            "<ul><strong>Cadastro: " + nomes.length  +"</strong>" +
            "<li><strong>Nome:</strong> " + name + "</li >" +
            "<li><strong>Idade:</strong> " + age + "</li>" +
            "<li><strong>Telefone:</strong> " + phone + "</li>" +
            "</ul>" +
            "</div>"
    
    document.getElementById("cadastro").innerHTML += card;
}

function cadastraNome() {
    nomes.push(document.getElementById("nomeInput").value);
    document.getElementById("nomeInput").value = "";
    console.log(nomes);
}
function cadastraIdade() {
    idade.push(document.getElementById("idadetInput").value);
    document.getElementById("idadetInput").value = "";
    console.log(idade);
}
function cadastraTelefones() {
    telefone.push(document.getElementById("telInput").value);
    document.getElementById("telInput").value = "";
    console.log(telefone);
}

function cadastra() {
    let a = ""
    if (document.getElementById("nomeInput").value != a && document.getElementById("idadetInput").value != a && document.getElementById("telInput").value != a) {
        cadastraNome();
        cadastraIdade();
        cadastraTelefones();
        exibe();
    } else {
        alert("\t\t\t\t\t\t\t\t\t\t\t\t\t Atenção!!! \n Preencha todos os campos do formulário.");
    }
}