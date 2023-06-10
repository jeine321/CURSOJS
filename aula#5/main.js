const saldoInicial = 0
        const janeiro = new Mes("janeiro", saldoInicial);
        janeiro.adicionarLancamento (new Lancamento( "salario", "receita",  3000 )); 
        janeiro.adicionarLancamento (new Lancamento( "aluguel", "despesa",  1000 )); 
        janeiro.adicionarLancamento (new Lancamento( "connta de luz", "despesa",  200 )); 
        janeiro.adicionarLancamento (new Lancamento( "conta de agua", "despesa",  100 )); 
        janeiro.adicionarLancamento (new Lancamento( "internet", "despesa",  100 )); 
        janeiro.adicionarLancamento (new Lancamento( "trasnporte", "despesa",  300 )); 
        janeiro.adicionarLancamento (new Lancamento( "lazer", "despesa",  300 )); 
        janeiro.adicionarLancamento (new Lancamento( "alimentaçao", "despesa",  500 ));
        janeiro.adicionarLancamento (new Lancamento( "condominio", "despesa",  300 ));
        janeiro.adicionarLancamento (new Lancamento( "farmacia", "despesa",  100 ));      
        janeiro.calcularSaldo();
        console.log(janeiro)

        const fevereiro = new Mes("fevereiro", janeiro.totalizador.saldo);       
        fevereiro.adicionarLancamento (new Lancamento( "salario", "receita",  3000 )); 
        fevereiro.adicionarLancamento (new Lancamento( "aluguel", "despesa",  1200 )); 
        fevereiro.adicionarLancamento (new Lancamento( "conta de luz", "despesa",  250 )); 
        fevereiro.adicionarLancamento (new Lancamento( "conta de agua ", "despesa",  100 )); 
        fevereiro.adicionarLancamento (new Lancamento( "internet", "despesa",  100 )); 
        fevereiro.adicionarLancamento (new Lancamento( "transporte", "despesa",  500 ));  
        fevereiro.adicionarLancamento (new Lancamento( "alimentaçao", "despesa",  1000 ));
        fevereiro.adicionarLancamento (new Lancamento( "condominio", "despesa",  400 ));   
        fevereiro.calcularSaldo();
        console.log(fevereiro) 

        const marco = new Mes("marco", fevereiro.totalizador.saldo);
        marco.adicionarLancamento (new Lancamento( "salario", "receita",  4000 )); 
        marco.adicionarLancamento (new Lancamento( "aluguel", "despesa",  1200 )); 
        marco.adicionarLancamento (new Lancamento( "conta de luz", "despesa",  200 )); 
        marco.adicionarLancamento (new Lancamento( "conta de agua", "despesa",  100 )); 
        marco.adicionarLancamento (new Lancamento( "internet", "despesa",  200 )); 
        marco.adicionarLancamento (new Lancamento( "transporte", "despesa",  500 )); 
        marco.adicionarLancamento (new Lancamento( "lazer", "despesa",  800 )); 
        marco.adicionarLancamento (new Lancamento( "alimentaçao", "despesa",  1000 )); 
        marco.adicionarLancamento (new Lancamento( "condominio", "despesa",  400 )); 
        marco.calcularSaldo();
        console.log(marco); 