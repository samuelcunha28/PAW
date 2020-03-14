// função com o objeto contacto com nome, numero, mail, idade e alcunha
function contacto(nome, numero, email, idade, alcunha) {

    // parametros não obrigatorios
    this.email = email;
    this.idade = idade;
    this.alcunha = alcunha;

    // Funções para lançar excecões
    function primeiraLetraExcecao(exceção) {
        this.exceção = exceção;
    }

    function parametroIndefinido(exceção) {
        this.exceção = exceção;
    }

    function numeroExcecao(exceção) {
        this.exceção = exceção;
    }

    // parametros de nome e numero obrigatorios
    // caso nao tenha nome ou numero, lançar uma exceção
    if (nome == undefined) {
        throw new parametroIndefinido("Não foi dado nenhum nome");
    } else if (numero == undefined) {
        throw new parametroIndefinido("Não foi dado nenhum número");
    }

    // garantir que a primeira letra do nome seja maiuscula 
    // caso não esteja com a primeira letra maiuscula, lançar exceção
    var letra = nome.charAt(0);
    if (letra == letra.toUpperCase()) {
        this.nome = nome;
    } else {
        throw new primeiraLetraExcecao("A primeira letra do nome não está em maiuscula");
    }

    // garantir que o numero de telefone tem 9 digitos
    if (numero.toString().length == 9) {
        this.numero = numero;
    } else {
        throw new numeroExcecao("O numero não tem 9 digitos");
    }
}


try {
    // testar varios contactos
    var contacto1 = new contacto("Samuel", 919156739);
    console.log("Contacto 1: ");
    console.log(contacto1);

    var contacto2 = new contacto("Jorge", 922145897);
    console.log("Contacto 2: ");
    console.log(contacto2);
    //console.log(contacto2.numero.toString());

    var contacto3 = new contacto("Samu", 967658391, "samuel@gmail.com", 21, "Cunha");
    console.log("Contacto 3: ");
    console.log(contacto3);

} catch (exceção) {
    console.log(exceção.mensagem);
}

// variavel global para o array de contactos
var arrayContacto = [];
// variavel global para contagem
var count = 0;
// função apra adicionar contacto
function add(contactoObject) {
    if (contactoObject == undefined) {
        console.log("Contacto vazio");
    }
    arrayContacto[count] = contactoObject;
    count++;
}

function contactoIndexExcecao(message) {
    this.message = message;
}

function remove(contacto_index) {
    if (contacto_index > count) {
        throw new contactoIndexExcecao("Contacto fora dos limites");
    }
    arrayContacto[contacto_index] = undefined;
    update(contacto_index);
    count--;
}


function update(contacto_index) {
    for (let i = contacto_index; i < arrayContacto.length; i++) {
        arrayContacto[i] = arrayContacto[i + 1];
    }
    arrayContacto.length--;
}

// adicionar contactos
add(contacto1);
add(contacto2);
add(contacto3);