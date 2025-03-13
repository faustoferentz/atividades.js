
function validarCPF(cpf) {
    
    cpf = cpf.replace(/[^\d]+/g, '');  

    
    if (cpf.length !== 11) return false;

    
    let numeros = cpf.split('').map(Number);

    
    let somatorio1 = 0;
    let somatorio2 = 0;

    
    for (let i = 0; i < 9; i++) {
        somatorio1 += numeros[i] * (10 - i);
    }

    for (let i = 0; i < 10; i++) {
        somatorio2 += numeros[i] * (11 - i);
    }

    
    let digito1 = (somatorio1 % 11 < 2) ? 0 : 11 - (somatorio1 % 11);
    let digito2 = (somatorio2 % 11 < 2) ? 0 : 11 - (somatorio2 % 11);

   
    if (numeros[9] === digito1 && numeros[10] === digito2) {
        return true; 
    } else {
        return false; 
    }
}


let cpfTest = "123.456.789-09"; 
if (validarCPF(cpfTest)) {
    console.log("CPF válido!");
} else {
    console.log("CPF inválido!");
}
