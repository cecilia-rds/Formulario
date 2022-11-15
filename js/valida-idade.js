export default function maior18Anos(input) {
    const dataNasc = new Date(input.value);
    if (!validaIdade(dataNasc)){
        input.setCustomValidity('O usuário não é maior de idade')
    }
    console.log(validaIdade(dataNasc))
}
function validaIdade(data) {
    const dataAtual = new Date();
    const dataMaior18 = new Date(data.getUTCFullYear() + 18,  data.getUTCMonth(), data.getUTCDate()) 

    return dataAtual >= dataMaior18;
}