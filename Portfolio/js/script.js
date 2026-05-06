

const botao = document.getElementById("modoClaroEscuro");
const body = document.body;

botao.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    } );

    // Acima é criado as constantes do botão que irá mudar a cor tema da página, usando o id criado no arquivo HTML //
    // E temos a constante body, que pega diretamente da tag HTML, para fazer a transição de tema //

    //----------------------------------------------------------------------------------------------------//

    const NOME = "Luiz Gustavo";
    let tituloProfissional = "Desenvolvedor Iniciante";
    let introducao = "Olá, seja bem vindo ao meu site pessoal, me chamo Luiz, tenho 18 anos e aqui nesse site, você pode conhecer um pouco mais sobre mim, um pouco de minhas qualidades profissionais e também sobre meus gostos pessoais."
    let minhaBios = "Este é um projeto que trabalhei usando a linguagem Python, junto da biblioteca CustomTkInter, tendo como função principal gestão de vagas para estacionamentos. Durante esse projeto, tive algumas dificuldades, sendo uma delas o cálculo do valor a pagar, pois não sabia como seria feito o cálculo do valor da vaga, até que pensei em usar o horário em que o cliente entra no estacionamento, subtrai-la pelo horário em que ele sai e em seguida multiplicar pelo valor da hora. Outra dificuldade foi numa função de relatório em que mostrava-mos os 5 clientes que mais usaram o estacionamento, a primeira forma que pensei para fazer com que funcionasse, era criar uma variável que contasse cada vez que o cliente entrou no estacionamento, usando como referência, a placa do cliente, porém, conversando com meu professor, eu deixei que o próprio Sqlite fizesse essa contagem, e apenas coloquei a quantidade de vezes no relatório, sem precisar criar uma nova variável que tivesse apenas a função de contagem";
    let anoFormatura = 2026;
    let mesFormatura = 12;
    let diaFormatura = 31;
    let anoIngresso = 2025;
    let mesIngresso = 2;
    let diaIngresso = 10;
    let hoje = new Date(); //Dia Atual
    let mesAtual = hoje.getMonth() + 1; //Mês Atual
    let anoAtual = hoje.getFullYear(); // Ano Atual
    let diaAtual = hoje.getDate(); //Dia Atual
    let indefinido;
    let nulo = null;
    let curso = {nome: "Análise e Desenvolvimento de Sistemas", ano:2026,displinaAtual:"Linguagens de Programação"};
    
 


    document.getElementById("meuNome").innerText = NOME;
    document.getElementById("titulo").innerText = tituloProfissional;
    document.getElementById("minhaIntroducao").innerText = introducao;
    document.getElementById("minhaBio").innerText = minhaBios;
    document.getElementById("anoFormatura").innerText = anoFormatura;
    document.getElementById("tempoRestante").innerText = `Tempo restante para formatura: ${anoAtual - anoIngresso} Ano, ${mesFormatura - mesAtual} Meses e ${diaIngresso - diaAtual} Dias `;
                
    //Estrutura de condicionais, onde cada uma mostrará uma mensagem com base no resultado do cálculo de tempo restante para finalizar o curso//

    //Nesse if teremos que para 
    if (anoFormatura - anoAtual <=0) {

        document.getElementById("tempoRestante").innerText = ` Tempo restante para formatura: ${mesFormatura - mesAtual} Meses e ${diaIngresso - diaAtual} Dias `;

    }   else if (anoFormatura - anoAtual === 1) {

        document.getElementById("tempoRestante").innerText =`Tempo restante para formatura: ${anoAtual - anoIngresso} Ano, ${mesFormatura - mesAtual} Meses e ${diaIngresso - diaAtual} Dias`;

    } else {
        document.getElementById("tempoRestante").innerText = `Tempo restante para formatura: ${anoAtual - anoIngresso} Anos, ${mesFormatura - mesAtual} Meses e ${diaIngresso - diaAtual} Dias`;
    }

    let diasRestantes = diaFormatura - diaAtual;
    let mesesRestantes = mesFormatura - mesAtual;
    let anosRestantes = anoFormatura - anoAtual;

    if (diasRestantes <=0 && mesesRestantes <=0 && anosRestantes <= 0) {

            document.getElementById("tempoRestante").innerText = `Curso Concluído!`;

    }

    let nota = 8;
    let aprovado = (nota >=6)? "Aprovado" : "Reprovado";

    document.write(`<p> Nota: ${nota} - ${aprovado} </p>`);

    let diaSemana = hoje.getDay() + 1;

    let diaEscrito;

    
    switch (diaSemana) {
        case 1:  diaEscrito = "Domingo"; break;
        case 2:  diaEscrito ="Segunda-Feira"; break;
        case 3:  diaEscrito ="Terça-Feira"; break;
        case 4:  diaEscrito ="Quarta-Feira"; break;
        case 5:  diaEscrito ="Quinta-Feira"; break;
        case 6:  diaEscrito ="Sexta-Feira"; break;
        case 7:  diaEscrito ="Sábado"; break;
        default: diaEscrito ="Dia Inválido";
    }

    document.write(`<p> Hoje é: ${diaEscrito} </p>`);
/*

const btnVisual      = document.getElementById("btn-visual");
const btnLogica      = document.getElementById("btn-logica");
const resultadoQuiz  = document.getElementById("resultado-quiz");

    btnVisual.addEventListener("click", function() {
 
        resultadoQuiz.innerHTML = `
            <strong>🎨 Você tem perfil Front-End!</strong><br>
            Você curte criar interfaces, trabalhar com cores, layouts e a experiência do usuário.
            Tecnologias pra você: HTML, CSS, React, Vue.
        `;
        resultadoQuiz.style.backgroundColor = "#e8f4fd";
        resultadoQuiz.style.padding          = "12px";
        resultadoQuiz.style.borderRadius     = "8px";
        resultadoQuiz.style.marginTop        = "10px";
        resultadoQuiz.style.color             = "#333";
    });

    btnLogica.addEventListener("click", function() {
 
        resultadoQuiz.innerHTML = `
            <strong>⚙️ Você tem perfil Back-End!</strong><br>
            Você curte resolver problemas complexos, trabalhar com dados e fazer a mágica acontecer nos bastidores.
            Tecnologias pra você: Node.js, Python, bancos de dados.
        `;
        resultadoQuiz.style.backgroundColor = "#e8f8f0";
        resultadoQuiz.style.padding          = "12px";
        resultadoQuiz.style.borderRadius     = "8px";
        resultadoQuiz.style.marginTop        = "10px";
        resultadoQuiz.style.color             = "#333";
    });

let pontosFront  = 0;
let pontosBack   = 0;

    btnVisual.addEventListener("click", function() {
        pontosFront++;
        exibirPerfil();
    });

    btnLogica.addEventListener("click", function() {
        pontosBack++;
        exibirPerfil();
    });

    function exibirPerfil() {
        if (pontosFront > pontosBack) {
        resultadoQuiz.textContent = "🎨 Perfil Front-End!";
    } else if (pontosBack > pontosFront) {
        resultadoQuiz.textContent = "⚙️ Perfil Back-End!";
    } else {
        resultadoQuiz.textContent = "🔄 Perfil Full Stack — você é dos dois!";
    }
}*/ 

    console.log(typeof anoFormatura);
    console.log(typeof NOME);
    console.log(typeof tituloProfissional);
    console.log(typeof minhaBios);
    console.log(typeof anoIngresso);
    console.log(typeof indefinido);
    console.log(typeof nulo);
    console.log(typeof curso);
    console.log(typeof anosRestantes);
    console.log(typeof mesesRestantes);
    console.log(typeof diasRestantes);
    console.log(typeof introducao);

