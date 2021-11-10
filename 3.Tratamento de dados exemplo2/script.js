/*
Opção 1 Inteiro
var numero0 = Number.parseInt(window.prompt('Digite um número:')) Solicitando um número para o usuário e já fazendo a conversão dele para inteiro.

Opção 2 Float
var numero1 = Number.parseFloat(window.prompt('Digite outro número:')) Solicitando um número para o usuário e já fazendo a conversão dele para inteiro.

Opção de todos o tipos numericos.
var numero0 = Number(window.prompt('Digite um número:')) Solicitando um número para o usuário e já fazendo a conversão dele para inteiro.

Opção1 String
window.alert('Convertendo de número para string ' + String(numero0))
ou 

Opção 2 String
window.alert('Convertendo de número para string ' + numero0.toString())
*/

var numero0 = Number(window.prompt('Digite um número:')) /*Solicitando um número para o usuário e já fazendo a conversão dele para inteiro.*/
var numero1 = Number(window.prompt('Digite outro número:')) /*Solicitando um número para o usuário e já fazendo a conversão dele para inteiro.*/

var soma = numero0 + numero1
/*
window.alert('A soma dos números é ' +soma+' !') //Trabalhando a informação recebida como uma mensagem.
*/6
2
window.alert(`A soma dos números ${numero0} e ${numero1} é ${soma}`) //Trabalhando a informação recebida como uma mensagem.