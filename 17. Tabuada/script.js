function verificar(){

    let n = window.document.querySelector('input#txtnum')
    let res = window.document.querySelector('select#stab')
    
    if(n.value.length == 0){
        window.alert(`[ERRO] Informe um número!`)
    }else{
        let numero = Number(n.value)
        let i = 0
      
        res.innerHTML = `<strong>Tabuada do ${numero} </strong><br>`
        res.innerHTML = ''
        for( i = 1; i <= 10 ; i++){  
            let item = document.createElement('option')
            item.text = ` ${numero} X ${i} = ${numero*i}`
            item.value = `res${i}` // faz uso em outras linguagens para saber qual e o item selecionado
            res.appendChild(item)
        }
       
    }
}