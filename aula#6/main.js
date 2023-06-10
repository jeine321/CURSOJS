
        const janeiro = new Mes("janeiro");
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

        const fevereiro = new Mes("fevereiro");       
        fevereiro.adicionarLancamento (new Lancamento( "salario", "receita",  3000 )); 
        fevereiro.adicionarLancamento (new Lancamento( "aluguel", "despesa",  1200 )); 
        fevereiro.adicionarLancamento (new Lancamento( "conta de luz", "despesa",  250 )); 
        fevereiro.adicionarLancamento (new Lancamento( "conta de agua ", "despesa",  100 )); 
        fevereiro.adicionarLancamento (new Lancamento( "internet", "despesa",  100 )); 
        fevereiro.adicionarLancamento (new Lancamento( "transporte", "despesa",  500 ));  
        fevereiro.adicionarLancamento (new Lancamento( "alimentaçao", "despesa",  1000 ));
        fevereiro.adicionarLancamento (new Lancamento( "condominio", "despesa",  400 ));   

        const marco = new Mes("marco");
        marco.adicionarLancamento (new Lancamento( "salario", "receita",  4000 )); 
        marco.adicionarLancamento (new Lancamento( "aluguel", "despesa",  1200 )); 
        marco.adicionarLancamento (new Lancamento( "conta de luz", "despesa",  200 )); 
        marco.adicionarLancamento (new Lancamento( "conta de agua", "despesa",  100 )); 
        marco.adicionarLancamento (new Lancamento( "internet", "despesa",  200 )); 
        marco.adicionarLancamento (new Lancamento( "transporte", "despesa",  500 )); 
        marco.adicionarLancamento (new Lancamento( "lazer", "despesa",  800 )); 
        marco.adicionarLancamento (new Lancamento( "alimentaçao", "despesa",  1000 )); 
        marco.adicionarLancamento (new Lancamento( "condominio", "despesa",  400 )); 

        const abril = new Mes("abril");
        abril.adicionarLancamento(new Lancamento("salario", "receita", 4000));

        const ano = new Ano();
        ano.adicionarMes(janeiro);
        ano.adicionarMes(fevereiro);
        ano.adicionarMes(marco);
        ano.adicionarMes(abril);
        ano.calcularSaldo();

        janeiro.adicionarLancamento(new Lancamento("Escola", "despesa", 500));
        fevereiro.adicionarLancamento(new Lancamento("Escola", "despesa", 400));
        marco.adicionarLancamento(new Lancamento("Escola", "despesa", 500));
        ano.calcularSaldo();

        console.log(ano.meses);

        function addElement (parent, elementType, text) {
            const element = document.createElement(elementType);
            if (text !=="" && text !== undefined && text !== null) {
                element.innerText = text;
            }
            
            parent.appendChild(element);      
        }
  
        function renderizar () {
            const app = document.getElementById("app");
            if (app.firstChild) {
                app.firstChild.remove();
            } 
            const painel = document.createElement("div");
            for (const mes of ano.meses) {
                addElement(painel, "h3", mes.nome);              
                for (const lancamento of mes.lancamentos) { 
                    const detalhesLancamento = lancamento.tipo + " " + lancamento.categoria + " " + lancamento.valor;                    
                    addElement(painel, "p", detalhesLancamento);
                }
                addElement(painel, "h4", mes.totalizador.saldo);
                addElement(painel, "hr");
        }
        app.appendChild(painel);

    }

    renderizar();

    function adicionarLancamento () {
        const  mes = document.getElementById("mes");
        const categoria = document.getElementById("categoria");
        const tipo = document.getElementById("tipo");
        const valor = document.getElementById("valor");
        ano.adicionarLancamento(mes.value, new Lancamento(categoria.value, tipo.value, parseFloat(valor.value)));
        ano.calcularSaldo();
        renderizar();
        mes.value="";
        categoria.value="";
        tipo.value="";
        valor.value="";
        
        
    }    
    const botao = document.getElementById("botao");
    botao.addEventListener("click",  adicionarLancamento)


           
        
          