class Contador {

    constructor() {
        this.valor = 0;
    }

    incrementar() {
        //this.valor++;
        this.valor = this.valor + 1;
        return this.valor;
    }    

    decrementar() {
        //this.valor--;
        this.valor = this.valor - 1;
        return this.valor;
    }

    getValor() {
        return this.valor;
    }

}

const contador1 = new Contador();
console.log(contador1.incrementar());
console.log(contador1.incrementar());
console.log(contador1.decrementar());

const contador2 = new Contador();