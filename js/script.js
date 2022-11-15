import verificaCpf from "./valida-cpf.js";
const inputsForm = document.querySelectorAll('[required]'); /* pega todos os compos com required*/

inputsForm.forEach((input) => { /* cada campo será chamado de input*/
    input.addEventListener("blur", () => verificaInput(input));   /* vai verificaar o sempre que o campo sair de foco */
});

function verificaInput(input) {
    if (input.name == "cpf" && input.value.length >= 11) {
        verificaCpf(input);
        
    } 
}