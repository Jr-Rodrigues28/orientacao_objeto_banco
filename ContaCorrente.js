export class contaCorrente{
    agencia;
    cliente;
    // #saldo = 0; é para privar
    _saldo = 0;

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
    }
}


// pra chamar o json:
// npm init / nome do pacote - bytebank / description: Projeto de bytebank para seus clientes
// ao final criar o "type": "module", abaixo do "license": "ISC",