function multiplicarNumero (array_base, array_multiplicaco){
    let soma =0
    for (let i = 0; i<array_base.length; i++){
        soma += array_base[i] * array_multiplicaco[i]
    }
     
    let resto = soma % 11
    let digito1
    if (resto < 2){
        digito1 = 0 
    } else {
        digito1 = 11 - resto
    }
    console.log(digito1)
       return digito1
 }


function gerarCNPJ (){
        
    let numero_base = Math.floor(Math.random() * 100000000)
    numero_base = numero_base.toString() + '0001'
    let array_base = numero_base.split('')
    let array_multiplicaco = [5,4,3,2,9,8,7,6,5,4,3,2]
    let digito1 = multiplicarNumero(array_base,array_multiplicaco) // vai me retornar o digito1
    array_base.push(digito1.toString())// pegar o digito 1, acrecentar no array_base
    array_multiplicaco.unshift(6)// acrecentar um valor no array multiplicação
    let digito2 = multiplicarNumero(array_base, array_multiplicaco)// aqui vai me retornar o digito 2 
    array_base.push(digito2.toString())
return array_base.join('')
}
    let cnpj = gerarCNPJ()
    console.log(cnpj)