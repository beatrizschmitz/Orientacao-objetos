class Clientes {

    constructor(nome, email, senha) {
        console.log(nome, email, senha);
    }

    adicionar() {
        console.log("Sou um método da classe Clientes, eu adiciono clientes");
    }

    editar() {

    }
    
    excluir() {

    }

    buscar() {

    }
}

const clientes = new Clientes('Beatriz', 'beatrizschmitz@gmail.com', '12345678');

//clientes.adicionar();