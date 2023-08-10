let btn = document.querySelector("#enviar");

btn.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector("#form1");
    let tabela = document.querySelector(".tbody");
    let tr = obtemDadosForm(form);
    let createTr = montaTr(tr);

    let nome_produto = document.querySelector("#nome_produto").value;
    let cod_prod = document.querySelector("#cod_prod").value;
    let preco = toString(document.querySelector("#preco").value);
    let qtn = document.querySelector("#qtn").value;

    let cor = document.getElementById('cor');
    let valueCor = cor.options[cor.selectedIndex].value;

    let produtos = document.getElementById('produtos');
    let valueProdutos = produtos.options[produtos.selectedIndex].value;

    let descricao = document.querySelector("#descricao").value;
    let materiais = document.querySelector("#materiais").value;
    
    let cam = document.querySelector("input[name='opcao1']:checked").value;
    let pe = document.querySelector("input[name='opcao2']:checked").value;


    if(nome_produto.length != 0 && cod_prod.length != 0 && preco.length != 0 && qtn.length != 0 && valueCor.length != 0 && valueProdutos.length != 0 && descricao.length != 0 && materiais.length != 0 && cam.length != null && pe.length != null) {
        tabela.appendChild(createTr);
        form.reset();
        alert("Produto cadastrado com Sucesso!");
    } else {
        alert("Campo(s) vazio(s) ou incorreto(s), favor preencher todos corretamente!");
    };

});

function obtemDadosForm(form) {
    let cor = document.getElementById('cor');
    let valueCor = cor.options[cor.selectedIndex].value;

    let produtos = document.getElementById('produtos');
    let valueProdutos = produtos.options[produtos.selectedIndex].value;

    let cam = document.querySelector("input[name='opcao1']:checked").value;
    let pe = document.querySelector("input[name='opcao2']:checked").value;

    let dados = {
        nome_produto: form.nome_produto.value,
        cod_prod: form.cod_prod.value,
        preco: "R$ " + form.preco.value,
        qtd: form.qtn.value + " Unid.",
        valueCor: valueCor,
        valueProdutos: valueProdutos,
        cam: cam,
        pe: pe,
        descricao: form.descricao.value,
        materiais: form.materiais.value
               
    }

    return dados;
}

function montaTr(dados) {
    let createTr = document.createElement("tr");
    createTr.classList.add("tr");

    createTr.appendChild(montaTd(dados.nome_produto, "td-nomeProd"));
    createTr.appendChild(montaTd(dados.cod_prod, "td-CodProd"));
    createTr.appendChild(montaTd(dados.preco, "td-preco"));
    createTr.appendChild(montaTd(dados.qtd, "td-qtn"));
    createTr.appendChild(montaTd(dados.valueCor, "td-cor"));
    createTr.appendChild(montaTd(dados.valueProdutos, "td-tipo"));
    createTr.appendChild(montaTd(dados.cam, "td-tamRoupa"));
    createTr.appendChild(montaTd(dados.pe, "td-tamCalcado"));
    createTr.appendChild(montaTd(dados.descricao, "td-descProd"));
    createTr.appendChild(montaTd(dados.materiais, "td-matProd"));
    createTr.appendChild(montaTd(dados.selectedRadio, "td-nivel"));


    return createTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}