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

contaCorrenteRodrigues.depositar(100);
contaCorrenteRodrigues.depositar(100);
contaCorrenteRodrigues.depositar(100);

const valorSacado = contaCorrenteRodrigues.sacar(50);
console.log(valorSacado);


console.log(contaCorrenteRodrigues);
//console.log(cliente1);  // node .index.js - pra chamar o cliente
//console.log(cliente2);