class Lancamento {

    constructor(categoria, tipo, valor) {
        if (tipo !== "receita" && tipo !== "despesa") {
            throw new Error("Lancamento Invalido: o tipo deve ser receita ou despesa");
        }
        if (valor <= 0) {
            throw new Error("Lancamento Invalido: valor deve ser maior que zero");
        }
        if (categoria === "") {
            console.log("Lancamento Invalido: A Categoria é obrigatoria" );
        }
        this.categoria = categoria
        this.tipo = tipo
        this.valor = valor
    }    
}