import { Cliente } from "./Cliente.js"; 
import {contaCorrente} from "./ContaCorrente.js";

// cada vez que dou um new estou criando um objeto
const cliente1 = new Cliente("Rodrigues", 11122233309); // new é uma instância da minha classe molde

const cliente2 = new Cliente("Germano", 88822233309);

const contaCorrenteRodrigues = new contaCorrente(1001, cliente1);
contaCorrenteRodrigues.depositar(500);
const conta2 = new contaCorrente(102, cliente2);

let valor = 200; // o valor mesmo que na área de transferir esteja 20 ele não muda será sempre 200
contaCorrenteRodrigues.transferir(valor, conta2);
// node .index.js - pra chamar o cliente