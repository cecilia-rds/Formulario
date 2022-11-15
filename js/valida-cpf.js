export default function verificaCpf(input) {
    const cpf = input.value.replace(/\.|-/g, ""); /* transforma pontos em espaço em branco */
    if (verificaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        console.log('CPF não existe')
    } else {
        console.log('existe')
    }
    console.log(verificaNumerosRepetidos(cpf));
}
function verificaNumerosRepetidos(cpf) {
    const numeroRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ]
    return numeroRepetidos.includes(cpf) /* verifica se o nimero digitado esta na lista  */

} 
/* validação cpf  */
function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }
    soma = (soma * 10) % 11;
    if (soma == 10 || soma ==1) {
        soma = 0;
    }
    return soma != cpf[9];

}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }
    soma = (soma * 10) % 11;
    if (soma == 10 || soma ==1) {
        soma = 0;
    }
    return soma != cpf[10];

}