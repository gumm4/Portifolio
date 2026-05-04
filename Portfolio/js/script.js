

const botao = document.getElementById("modoClaroEscuro");
const body = document.body;

botao.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

} );

// Acima é criado as constantes do botão que irá mudar a cor tema da página, usando o id criado no arquivo HTML //
// E temos a constante body, que pega diretamente da tag HTML, para fazer a transição de tema //

//----------------------------------------------------------------------------------------------------//

const NOME = "Luiz Gustavo";
let tituloProfissional = "Garoto de Programa/ Faço de Tudo";
let minhaBios = "Bacana demais. Prorrogamar é bom dms" + "Antes eu Sofria. Agora sou cria"
let anoFormaturas = 2026;
let mesFormatura = 12;
let dia = 31;
let anoIngresso = 2025;
let mesIngresso = 2;
let diaIngresso = 10;
let hoje = new Date(); //Dia Atual
let mesAtual = hoje.getmonth() + 1; //Mês Atual
let anoAtual = hoje.getFullYear(); // Ano Atual
let diaAtual = hoje.getDate(); //Dia Atual
let indefinido;
let nulo = null;
let curso = {
    nome: "Análise e Desenvolvimento de Sistemas",
    ano:2026,
    displinaAtual:"Linguagens de Programação"
}




console.log(typeof anoFormatura);
console.log(typeof NOME);
console.log(typeof tituloProfissional);
console.log(typeof minhaBio);
console.log(typeof anoIngresso);
console.log(typeof indefinido);
console.log(typeof nulo),
console.log(typeof curso);
console.log(typeof anoRestante);
console.log(typeof mesRestante);
console.log(typeof diaRestante);


document.getElementById("meuNome").innerText = NOME;
document.getElementById("titulo").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBios;
document.getElementById("anoFormatura").innerText = anoFormaturas;
document.getElementById("tempoRestante").innerText = `Tempo restante para formatura: ${anoFormaturas - anoAtual} anos `;
