// O ato de exportar é o modulo

// é como se fosse o molde no caso a criação de classe
export class Cliente{
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome,cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}