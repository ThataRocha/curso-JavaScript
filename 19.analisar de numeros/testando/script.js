let data = Date();
let hora = Date.
hora(data);

if(hora > 0  && hora <6){
	console.log (`Boa madrugada!`);
}else if(hora<=12){
	Console.log (`Bom dia!`);
}else if(hora<=18){
	Console.log(`Boa Tarde!`);
}else{
	Console.log(`Boa noite!`);
}
