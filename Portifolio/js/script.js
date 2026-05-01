const botao = document.getElementById("modoClaroEscuro");
const body = document.body;

botao.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

} );

// Acima é criado as constantes do botão que irá mudar a cor tema da página, usando o id criado no arquivo HTML //
// E temos a constante body, que pega diretamente da tag HTML, para fazer a transição de tema //

//----------------------------------------------------------------------------------------------------//
