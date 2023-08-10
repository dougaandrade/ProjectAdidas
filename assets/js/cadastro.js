let btn = document.querySelector("#enviar");

btn.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector("#form1");
    let tabela = document.querySelector(".tbody");
    let tr = obtemDadosForm(form);
    let createTr = montaTr(tr);

    let nome = document.querySelector("#nome").value;
    let cpf = document.querySelector("#cpf").value;
    let nome_usuario = document.querySelector("#nome_usuario").value;
    let telefone = document.querySelector("#telefone").value;
    let endereco = document.querySelector("#endereco").value;
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    let senhaRepeat = document.querySelector("#senhaRepeat").value;
    let nvl = document.querySelector("input[name='opcao']:checked").value;


    if (senha != senhaRepeat) {
        alert("As senhas não conferem.");
    } else {
        if(nome.length != 0 && cpf.length == 11 && nome_usuario.length != 0 && telefone.length == 16 && endereco.length != 0 && email.length != 0 && senha.length > 7 && nvl.length != 0) {
            tabela.appendChild(createTr);
            form.reset();
            alert("Cadastro Feito com Sucesso!");
        } else {
            /*alert("Campo(s) vazio(s) ou incorreto(s), favor preencher todos corretamente!");*/
            
            if(cpf.length != 11){
                alert("CPF Inválido, Insira apenas números!");
    
            }
    
            if(telefone.length != 16){
                alert("Campo(s) vazio(s) ou incorreto(s) insira um numero Válido!");
    
            }
            if(nome.length == 0){
                alert("Campo(s) vazio(s) ou incorreto(s) insira um nome Válido!");
    
            }
            if(nome_usuario.length == 0){
                alert("Campo(s) vazio(s) ou incorreto(s) insira um usuário Válido!");
    
            }
            if(endereco.length == 0){
                alert("Campo(s) vazio(s) ou incorreto(s) insira um endereço Válido!");
    
            }
            if(email.length == 0){
                alert("Campo(s) vazio(s) ou incorreto(s) insira um e-mail Válido!");
    
            }
            if(senha.length <= 7 ){
                alert("Campo(s) vazio(s) ou incorreto(s) insira uma senha Válido!");
    
            }
            if(senha.length == 0){
                alert("Campo(s) vazio(s) ou incorreto(s) insira um Nivel Válido!");
            }
        };

    }
        
        

});

function obtemDadosForm(form) {
    let nvl = document.querySelector("input[name='opcao']:checked").value;
    let dados = {
        nome: form.nome.value,
        cpf:form.cpf.value,
        nome_usuario: form.nome_usuario.value,
        telefone: form.telefone.value,
        endereco: form.endereco.value,
        email: form.email.value,
        senha: form.senha.value,
        nvl: nvl
    }

    return dados;
}

function montaTr(dados) {
    let createTr = document.createElement("tr");
    createTr.classList.add("tr");

    createTr.appendChild(montaTd(dados.nome, "td-nome"));
    createTr.appendChild(montaTd(dados.cpf, "td-cpf"));
    createTr.appendChild(montaTd(dados.nome_usuario, "td-username"));
    createTr.appendChild(montaTd(dados.telefone, "td-tel"));
    createTr.appendChild(montaTd(dados.endereco, "td-endereco"));
    createTr.appendChild(montaTd(dados.email, "td-email"));
    createTr.appendChild(montaTd(dados.senha, "td-password"));
    createTr.appendChild(montaTd(dados.nvl, "td-nivel"));

    return createTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}