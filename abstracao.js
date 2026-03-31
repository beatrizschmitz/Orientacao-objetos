class Carro {
    #motor;
    #combustivel;
    #sistemaEletrico;

    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
        this.ligado = false;
        this.velocidade = 0;

        this.#motor = {cilindros: 4, potencia: 150, temperatura: 0};
        this.#combustivel = {nivel: 100, tipo: 'gasolina'};
        this.#sistemaEletrico = {bateria: 100, alternador: 'ok'};
    }

    ligar() {
        if (this.ligado) {

            this.#verificarBateria();
            this.#iniciarIgnicao();
            this.#esquentarMotor();
            this.ligado = true;

            console.log(`${this.modelo} ligado com sucesso!`);

        } else {
            console.log ('Carro ligado');
        }  
    }

    desligar() {
        if (!this.ligado) {
            this.#pararMotor();
            this.ligado = false;
            this.velocidade = 0;

            console.log(`${this.modelo} desligado com sucesso!`);
        } else {
            console.log('Carro desligado'); 
        }
    }

    acelerar(intensidade) {
        if (this.ligado) {
            console.log('Não é possível acelerar o carro quando ele estiver desligado.');
            return;
        }

        if (this.#combustivel.nivel <= 0) {
            console.log('Combustível insuficiente para acelerar.');
            return;
        }

        this.#injetarCombustivel(intensidade);
        this.#aumentarRotacaoMotor(intensidade);
        
    }

    #aumentarRotacaoMotor(intensidade) {

    }

    #injetarCombustivel(intensidade) {

    }

    #pararMotor() {
        console.log('Desligando sistemas...');
        this.#motor.temperatura = 0;
    }
    
    #verificarBateria() {
        console.log('Verificando bateria...');
    }

    #iniciarIgnicao() {
        console.log('Iniciando ignição...');
    }

    #esquentarMotor() {
        console.log('Esquentando motor...');
        this.#motor.temperatura = 90;
    }
}    

const carro = new Carro('Berlingo', 'prata');
