class ContaBancaria {

    #saldo;

    constructor(titular) {
        this.titular = titular;
        this.#saldo = 0;
        console.log(this.#saldo)
    }

    despositar(valor) {
        this.#saldo = this.#saldo + valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo = this.#saldo - valor;
            return true;
        }
        return false;
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const contaBancaria = new ContaBancaria("Beatriz");
contaBancaria.despositar(1000);

console.log(contaBancaria.consultarSaldo()); // 1000

// preciso privar o saldo para que não seja possível acessar diretamente, ou seja, contaBancaria.saldo = 1000; não deve ser permitido. Para isso, utilizamos o símbolo # antes do nome da variável, indicando que ela é privada e só pode ser acessada dentro da classe.