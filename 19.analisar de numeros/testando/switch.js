
exibirPrimo('15');

function exibirPrimo(numero){
    
    for(let c =2; c<= numero; c++){
        let ehPrimo = true;    
        for(let i=2 ; i < c; i++){
            if(c%i === 0){
                ehPrimo = false;
                break;
            }            
        }
        if(ehPrimo) console.log(c);
    }
}