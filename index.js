import { Cliente } from "./Cliente.js"; 
import {contaCorrente} from "./ContaCorrente.js";


// cada vez que dou um new estou criando um objeto
const cliente1 = new Cliente(); // new é uma instância da minha classe molde
cliente1.nome = "Rodrigues";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Germano";
cliente2.cpf = 88822233309;

const contaCorrenteRodrigues = new contaCorrente();
contaCorrenteRodrigues.agencia = 1001;
contaCorrenteRodrigues.cliente = cliente1;
contaCorrenteRodrigues.depositar(500);
console.log(contaCorrenteRodrigues._saldo);

const conta2 = new contaCorrente();
conta2.cliente = cliente1;
// conta2.cliente.nome = "Germano";
// conta2.cliente.cpf = 88822233309;
conta2.agencia = 102;


let valor = 200; // o valor mesmo que na área de transferir esteja 20 ele não muda será sempre 200
contaCorrenteRodrigues.transferir(valor, conta2);

console.log("valor ", valor);
console.log(conta2.cliente);


// contaCorrenteRodrigues.transferir(200, conta2);
// console.log(conta2);
// console.log(contaCorrenteRodrigues);
// contaCorrenteRodrigues.depositar(-100);
// contaCorrenteRodrigues.depositar(100);
// contaCorrenteRodrigues.depositar(100);

//const valorSacado = contaCorrenteRodrigues.sacar(50);
//console.log(valorSacado);


//console.log(contaCorrenteRodrigues);
//console.log(cliente1);  // node .index.js - pra chamar o cliente
//console.log(cliente2);