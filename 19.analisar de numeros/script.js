let num = window.document.querySelector('input#txtnum');
let lista = window.document.querySelector('select#adicionados');
let res = window.document.querySelector('div#result');
let valores = []


function nalista(n , lista){
    if(lista.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}
function onumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function adicionar(){
   if(onumero(num.value) && !nalista(num.value, valores)){
       valores.push(Number(num.value));
       let item = document.createElement('option')
       item.text = `valor ${num.value} adicionado.`
       lista.appendChild(item) 
       res.innerHTML = '' // Se acaso for adiconado outro valor após já tem selecionado o botão finalizar o sistema tem que apagar o resultado mostrado pois terá que recalcular os números inseridos na lista.
   }else{
       alert('Valor invalido ou existente na lista!')
   }

   num.value = '' // limpa a caixa que adicionar o número.
   num.focus()    // e coloca o curso posicionado dentro dela, deixando esse campo mais interativo para o usuario.
}

function resultado(){
    if(valores.length == 0){  // verificando se tem valores adicionados no vetor  para mostrar resultado .
        window.alert(`Adicione valores antes de finalizar!`)
    }else{       
        let tot = valores.length // tot recebe a quantidade de números dentro do vetor.        
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0
        let media = 0

        for(let pos in valores){      
            soma += valores[pos]      
            if(valores[pos] > maior)
                maior = valores[pos]            
            if(valores[pos] < menor)
                menor = valores[pos]            
        } 
        media = soma / tot
        
        // mostrar os resultado no navegador!
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior número cadastrado na lista é o ${maior}.</p>`    
        res.innerHTML += `<p> O menor número cadastrado na lista é o ${menor}.</p>`
        res.innerHTML += `<p> A soma de todos os valores é  ${soma}.</p>`
        res.innerHTML += `<p> A media de todos os valores é  ${media}.</p>`
    }
}
