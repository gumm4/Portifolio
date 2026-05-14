

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

                
    //Estrutura de condicionais, onde cada uma mostrará uma mensagem com base no resultado do cálculo de tempo restante para finalizar o curso//

    function calculoRestante(){

        let anosRestantes = anoFormatura - anoAtual;
        let mesesRestantes = mesFormatura - mesAtual;
        let diasRestantes = diaFormatura - diaAtual;

        if (anosRestantes < 0  || (anosRestantes === 0 && mesesRestantes < 0) || (anosRestantes === 0 && mesesRestantes == 0 && diasRestantes <= 0)) {

            document.getElementById("tempoRestante").innerText = `Curso Concluído`;

        } else {

            document.getElementById("tempoRestante").innerText = `Tempo restante para a formatura: ${anosRestantes} ano(s), ${mesesRestantes} meses e ${diasRestantes} dias`;
        }

    };

    function notasAula() {

        let nota = 8;
        
        if (nota <0) {

            document.write(`<p> Reprovado</P>`)

        } else {

            document.write(`<p>Aprovado</p>`)

        }

    };

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


for (let i = 0; i<=20; i++) {
    let pares = (i % 2 === 0) ? "Par" : "Ímpar";
    console.log(`${i} é ${pares}`);
}

let object = {

    nome:"Luiz Gustavo",
    idade:"18",
    curso:"Análise e Desenvolvimento de Sistemas"
}

for (let chave in object) {
    document.write(`<p>${chave}: ${object[chave]}</p>`);
}

let aluno = ["Luiz","Lucas","Otávio","Maria","Felipe"];
for (let contem of aluno) {

    if (contem === "Luiz") {
        document.write(`<p>${contem} - Presente:</p>`);
    } else {
        document.write(`<p>${contem} - Ausente:</p>`);
    }

}

let num = parseInt(prompt("Digite um número par:"));
while (num % 2 !== 0) {
    num = parseInt(prompt("Esse número não é par. Tente Novamente:"));
};

do {
    num = prompt("Diga um número par:");
} while (num % 2 !== 0);


let objectt = {

    "Habilidades Tecnicas": ["HTML", "CSS", "JavaScript", "Python"],
    "Habilidades Interpessoais": ["Comunicação", "Resolução de Problemas", "Trabalho em Equipe"],
    "Habilidades de Aprendizado": ["Curiosidade", "Adaptabilidade","Autodidatismo"]

};

for (let categoria in objectt) {

    document.write(`<h3>${categoria}</h3>`);
    for (let habilidade of objectt[categoria])
        document.write(`<p>${habilidade}</p>`);
};

let projetos = [
        {
            nome: "Parking N' Space",
            descricao: "Sistema para gerenciar vagas de estacionamento, com controle de entrada e saída de veículos.",
            conhecimentos: ["GitHub", "Pip", "PyInstaller"],
            tecnologias: ["Python", "Sqlite", "Tkinter", "CustomTkinter", "FPDF", "Pip", "PyInstaller"]
        },
        {
            nome: "Controle de Aluguel de Quadras",
            descricao: "Sistema para gerenciar o aluguel de quadras esportivas, com controle de reservas e pagamentos.",
            conhecimentos: ["GitHub", "Pip", "PyInstaller"],
            tecnologias: ["Python", "Sqlite", "Tkinter", "CustomTkinter", "FPDF", "Pip", "PyInstaller"]
        },
        {
            nome:"Página Pessoal Baseada em Blue Lock",
            descricao: "Projeto de página pessoal inspirado na série de anime e mangá Blue Lock, onde o objetivo é criar uma página que reflita a personalidade e os interesses do criador, utilizando elementos visuais e temáticos relacionados à série.",
            conhecimentos: ["GitHub", "HTML", "CSS", "JavaScript"],
            tecnologias: ["HTML", "CSS", "JavaScript"]
        },
    ]


    projetos.forEach(function(projeto) { // - - Itera sobre cada projeto na lista
    document.write(`<h3>${projeto.nome}</h3>`); // - - Imprime o nome do projeto como título
    document.write(`<p>${projeto.descricao}</p>`); // - - Imprime a descrição do projeto em um parágrafo
    document.write(`<p><strong>Conhecimentos:</strong> ${projeto.conhecimentos.join(", ")}</p>`); // - - Imprime os conhecimentos necessários para o projeto
    document.write(`<p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>`); // - - Imprime as tecnologias utilizadas no projeto
    });

    // projetos que usam Python usando somente foreach e include:
    document.write(`<h2>Projetos que utilizam Python:</h2>`); // - - Título para a seção de projetos com Python 
    projetos.forEach(function(projeto) { // - - Itera sobre cada projeto na lista
        if (projeto.tecnologias.includes("Python")) { // - - Verifica se o projeto utiliza Python
            document.write(`<h3>${projeto.nome}</h3>`); // - - Imprime o nome do projeto como título
            document.write(`<p>${projeto.descricao}</p>`); // - - Imprime a descrição do projeto em um parágrafo
            document.write(`<p><strong>Conhecimentos:</strong> ${projeto.conhecimentos.join(", ")}</p>`); // - - Imprime os conhecimentos necessários para o projeto
            document.write(`<p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>`); // - - Imprime as tecnologias utilizadas no projeto
        }
    });

    document.write(`<h2>Projetos que utilizam html:</h2>`); // - - Título para a seção de projetos com html
    projetos.forEach(function(projeto) { // - - Itera sobre cada projeto na lista
        if (projeto.tecnologias.includes("HTML")) { // - - Verifica se o projeto utiliza HTML
            document.write(`<h3>${projeto.nome}</h3>`); // - - Imprime o nome do projeto como título
            document.write(`<p>${projeto.descricao}</p>`); // - - Imprime a descrição do projeto em um parágrafo
            document.write(`<p><strong>Conhecimentos:</strong> ${projeto.conhecimentos.join(", ")}</p>`); // - - Imprime os conhecimentos necessários para o projeto
            document.write(`<p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>`); // - - Imprime as tecnologias utilizadas no projeto -- . join transforma o array em uma string, separando os elementos por vírgula e espaço (", ")
        }
    });

    document.createElement("h2").innerText = projetos[0].nome; // - - Cria um elemento h2 e define seu texto como o nome do primeiro projeto
    console.log(projetos[0].descricao); // - - Imprime a descrição do primeiro projeto no console
    console.log(projetos[0].conhecimentos); // - - Imprime os conhecimentos necessários para o primeiro projeto no console
    console.log(projetos[0].tecnologias); // - - Imprime as tecnologias utilizadas no primeiro projeto no console

    calculoRestante()

