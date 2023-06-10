
        const janeiro = new Mes("janeiro");
        janeiro.adicionarLancamento (new Lancamento( "salario", "receita",  3000 )); 
        janeiro.adicionarLancamento (new Lancamento( "aluguel", "despesa",  1000 )); 
        janeiro.adicionarLancamento (new Lancamento( "connta de luz", "despesa",  200 )); 
        janeiro.adicionarLancamento (new Lancamento( "conta de agua", "despesa",  100 )); 
        janeiro.adicionarLancamento (new Lancamento( "internet", "despesa",  100 )); 
        const fevereiro = new Mes("fevereiro");       
        fevereiro.adicionarLancamento (new Lancamento( "salario", "receita",  3000 )); 
        fevereiro.adicionarLancamento (new Lancamento( "aluguel", "despesa",  1200 )); 
        fevereiro.adicionarLancamento (new Lancamento( "conta de luz", "despesa",  250 )); 
        fevereiro.adicionarLancamento (new Lancamento( "conta de agua ", "despesa",  100 )); 
        fevereiro.adicionarLancamento (new Lancamento( "internet", "despesa",  100 )); 
        const marco = new Mes("marco");
        marco.adicionarLancamento (new Lancamento( "salario", "receita",  4000 )); 
        marco.adicionarLancamento (new Lancamento( "aluguel", "despesa",  1200 )); 
        marco.adicionarLancamento (new Lancamento( "conta de luz", "despesa",  200 )); 
        marco.adicionarLancamento (new Lancamento( "conta de agua", "despesa",  100 )); 
        marco.adicionarLancamento (new Lancamento( "internet", "despesa",  200 ));    
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
            const cores = ["red", "yellow", "green", "blue"];
            const grafico = document.createElement("div");
            grafico.className = "grafico";
            for (const mes of ano.meses) {
                const coluna = document.createElement("div");
                coluna.className = "grafico-coluna";
                const cor = document.createElement("div");
                cor.style.height = (mes.totalizador.saldo*100)/10000;
                cor.style.background = cores.pop();
                coluna.appendChild(cor);
                const nomeDoMes = document.createElement("div");
                nomeDoMes.className = "grafico-coluna-texto";
                nomeDoMes.innerText = mes.nome;             
                coluna.appendChild(cor);
                coluna.appendChild(nomeDoMes);
                grafico.appendChild(coluna);
            }
            painel.appendChild(grafico);

            
            for (const mes of ano.meses) {
                addElement(painel, "h4", mes.nome);   
                const tabelaLancamentos = document.createElement("table");
                tabelaLancamentos.className = "tabela-lancamentos"   
                const linhaTitulo = document.createElement("tr");
                addElement(linhaTitulo, "th", "categoria");   
                addElement(linhaTitulo, "th", "valor");
                tabelaLancamentos.appendChild(linhaTitulo);       
                for (const lancamento of mes.lancamentos) { 
                    const linhaLancamento = document.createElement("tr");   
                    addElement(linhaLancamento, "td", lancamento.categoria);
                    addElement(linhaLancamento, "td", formatarDinheiro(lancamento.getValorString()));
                    tabelaLancamentos.appendChild(linhaLancamento);                
                }
                const linhajuros = document.createElement("tr");
                addElement(linhajuros, "th", "juros");
                addElement(linhajuros, "th", formatarDinheiro(mes.totalizador.juros));
                tabelaLancamentos.appendChild(linhajuros); 
                const linharendimentos = document.createElement("tr");
                addElement(linharendimentos, "th", "trndimrntos");   
                addElement(linharendimentos, "th", formatarDinheiro(mes.totalizador.rendimentos));
                tabelaLancamentos.appendChild(linharendimentos); 
                const linhasaldo = document.createElement("tr");
                addElement(linhasaldo, "th", "total");   
                addElement(linhasaldo, "th", formatarDinheiro(mes.totalizador.saldo));
                tabelaLancamentos.appendChild(linhasaldo); 
                painel.appendChild(tabelaLancamentos);
       
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
        mes.value = ano.meses[0].nome;
        categoria.value="";
        tipo.value="receita";
        valor.value="";
        
        
    }    
    const botao = document.getElementById("botao");
    botao.addEventListener("click",  adicionarLancamento)

    const mesSelect = document.getElementById("mes");
    for( const mes of ano.meses ) {
        const option = document.createElement("option")
        option.text = mes.nome;
        mesSelect.add(option);
    }


           
        
          