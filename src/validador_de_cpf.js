function valida(numero) {
    var soma;
    var resto;
    soma = 0;

    //testa tipo do parametro
    if (typeof numero !== "string") return false

    //remove simbolos
    numero = numero.replace(/[\s.-]*/igm, '')

    //exclui caso invalidos que passam no validador
    if (
        !numero ||
        numero.length != 11 ||
        numero == "00000000000" ||
        numero == "11111111111" ||
        numero == "22222222222" ||
        numero == "33333333333" ||
        numero == "44444444444" ||
        numero == "55555555555" ||
        numero == "66666666666" ||
        numero == "77777777777" ||
        numero == "88888888888" ||
        numero == "99999999999"
    ) {
        return false
    }

    //verifica primeiro digito verificador
    for (i=1; i<=9; i++) soma = soma + parseInt(numero.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(numero.substring(9, 10)) ) return false;

    soma = 0;
    //verifica segundo digito verificador
    for (i = 1; i <= 10; i++) soma = soma + parseInt(numero.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(numero.substring(10, 11) ) ) return false;

    return true;
}

module.exports = valida;

