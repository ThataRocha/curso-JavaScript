
let amigo = { 
    nome: 'Jose',
    sexo: 'M', 
    peso: 75.2, 
    engordar(p){
        this.peso +=p

    }
}
amigo.engordar(2)
console.log(`Meu amigo ${amigo.nome}, está pesando ${amigo.peso} Kg` )