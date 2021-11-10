function somar(){
    var string1 = window.document.getElementById('txtn1')
    var string2 = window.document.querySelector('input#txtn2')
    var result = window.document.querySelector('div#res')

    var valor1 = Number(string1.value) // conversão do primeiro valor do tipo string para numero.
    var valor2 = Number(string2.value) //  conversão do segundo valor do tipo string para numero.

    var soma = valor1 + valor2 // soma dos valores

    result.innerHTML = `A soma entre ${valor1} e ${valor2} é igual a <strong>${soma}</strong> .`
}