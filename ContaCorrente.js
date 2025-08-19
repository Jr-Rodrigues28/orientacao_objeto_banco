import { Cliente } from "./Cliente.js";

export class contaCorrente{
    static numeroDeContas = 0; // Conta o número de contas correntes que tenho
    agencia;
    _cliente;

     // #saldo = 0; é para privar
     _saldo = 0;


    /* ----- ACESSORES ----- */
    set cliente(novoValor) {       // aqui é do import 
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    // Para pegar o cliente criamos um acessor
    get cliente() {
        return this._cliente;
    }

    // Com essse acessor conseguimos pegar o valor mais não alterar 
    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        contaCorrente.numeroDeContas += 1; // Chama a conta corrente como um todo por isso não usa o this

    }



    /* ----- MÉTODOS ----- */
    // Função de saque
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if (valor <= 0) {
            return
        }

        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        //conta.cidade = "Bahia";  // Aqui consegue passar por ser referência, já que é um objeto a conta
        //valor = 20;  // já aqui não pq é uma cópia, então não consigo alterar e por ser um tipo primitivo
    }
}


// pra chamar o json:
// npm init / nome do pacote - bytebank / description: Projeto de bytebank para seus clientes
// ao final criar o "type": "module", abaixo do "license": "ISC",