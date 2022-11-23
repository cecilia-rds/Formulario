import verificaCpf from "./valida-cpf.js";
import maior18Anos from "./valida-idade.js";
const inputsForm = document.querySelectorAll('[required]'); 
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (e) => { 
    e.preventDefault();
    
    const listaRespostas = { 
        "nome": e.target.elements ["nome"].value,
        "sobrenome": e.target.elements ["sobrenome"].value,
        "email": e.target.elements ["email"].value,
        "cpf": e.target.elements ["cpf"].value,
        "nascimento": e.target.elements ["nascimento"].value,
    }
    
        localStorage.setItem("cadastro", JSON.stringify(listaRespostas))
    
        window.location.href = './cadastro_concluido.html'
    
    })
                            

inputsForm.forEach((input) => { 
    input.addEventListener("blur", () => verificaInput(input));   
    
    input.addEventListener("invalid", evento => evento.preventDefault()) 
    
});

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismathch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    sobrenome: {
        valueMissing: "O campo sobrenome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    cpf: {
        valueMissing: 'O campo CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    nascimento: {
        valueMissing: 'O campo data de nascimento não pode estar vazio.',
        customError: 'Você deve 18 anos ou mais para se cadastrar.'
    },
    senha: {
        valueMissing: 'O campo senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
    }
}

function verificaInput(input) {
    let mensagem = "";
    input.setCustomValidity('') 
    if (input.name == "cpf" && input.value.length >= 11) {
        verificaCpf(input);
    } 
    if (input.name == "nascimento" && input.value != "" ){  
        
        maior18Anos(input);
    }
    tiposDeErro.forEach(erro => {  
        if (input.validity[erro]) {     
            mensagem = mensagens[input.name][erro]; 
            
            
        }
    })
    const mensagemErro = input.parentNode.querySelector('.input-mensagem-erro'); 

    const validadorDeInput = input.checkValidity(); 

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
   
}

