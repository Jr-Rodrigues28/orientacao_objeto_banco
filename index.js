// é como se fosse o molde
class Cliente{
    nome;
    cpf;
}

class contaCorrente{
    agencia;

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
}

// cada vez que dou um new estou criando um objeto
const cliente1 = new Cliente(); // new é uma instância da minha classe molde
cliente1.nome = "Rodrigues";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Germano";
cliente2.cpf = 88822233309;

const contaCorrenteRodrigues = new contaCorrente();
contaCorrenteRodrigues.agencia = 1001;

contaCorrenteRodrigues.depositar(100);
contaCorrenteRodrigues.depositar(100);
contaCorrenteRodrigues.depositar(100);

const valorSacado = contaCorrenteRodrigues.sacar(50);
console.log(valorSacado);


console.log(contaCorrenteRodrigues);
//console.log(cliente1);  // node .index.js - pra chamar o cliente
//console.log(cliente2);