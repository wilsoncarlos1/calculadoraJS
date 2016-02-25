var valor1 = 0;
var valro2 =0;
var total =0;
var operacao=0;

function button(btnvalor){
	//console.log(btnvalor)
	document.getElementById('texto').value += btnvalor;
	document.getElementById('texto').innerHTML =" ";
}


function enter(){

	valor2 = +document.getElementById('texto').value ;
	/*if(!valor2 ){
		return false;
		console.log('valor2 aqui '+valor2)
	}*/

	if(operacao== 1){
		total = valor1 + valor2;
	}

	else if(operacao== 2){
		 subtracao()
	}
	else if(operacao==3){
		total = valor1 * valor2;

	}
	else if(operacao==4){
		total = valor1 / valor2;
	}

	
	document.getElementById('texto').value = total;
	document.getElementById('texto').valor1 ="";

}

function soma(){
	operacao = 1;
	valor1 += +document.getElementById('texto').value ;
	document.getElementById('texto').value = "";
	console.log(valor1)
}


function subtracao(){
	operacao =2; 
	valor1 = +document.getElementById('texto').value;
	if(total != 0){
	total = total-valor1;
	}
	else{
		total = valor1;
	}	
	document.getElementById('texto').value = "";
	console.log(valor1+'valor1')
	console.log(total+'total')	
}

function multiplicacao(){

	operacao = 3;
	valor1 = +document.getElementById('texto').value;
	total = total * valor1;
	document.getElementById('texto').value = "";
	console.log(valor1)
	console.log(total)
}

function divisao(){
	operacao = 4;
	valor1 = +document.getElementById('texto').value;
	total = total / valor1;
	document.getElementById('texto').value = "";
	console.log(valor1)

}

function zerar(){

	valor1 =0;
	valro2 =0;
	total =0;
	total = document.getElementById('texto').value = 0;
	total = document.getElementById('texto').value = "";
	console.log(total)


}
