class Clientes {

    idade = 22;
    email;
    nome;

    constructor(nome, email, senha) {
        console.log(this.idade);
        this.nome = nome;
        this.email = email;
        console.log(this.nome);
    }

    adicionar() {
        const dadosCliente = this.buscar(this.email);
        console.log(dadosCliente);
    }

    editar() {
        this
    }
    
    excluir() {

    }

    buscar(email) {
        //verificar se o email existe
        return {nome: 'Beatriz', email: 'beatrizschmitz@gmail.com'}
    }
}

const clientes = new Clientes('Beatriz', 'beatrizschmitz@gmail.com', '12345678');

//clientes.adicionar();

// Quando coloca o 'this' está se referindo a classe