function esPar(numero){
	
	if(numero%2===0){
		return numero+" es par";
	}else{
		return numero+" es impar";
	}
}


function esPalindromo(cadena){

	var posFinal = cadena.length-1;
	var resultado = true;
	for(var i=0; i<cadena.length;i++){

		if(cadena[i]!=" "){ //no tiene en cuenta los espacios

			if(cadena[i]!=cadena[posFinal]){
				resultado = false;
			}
			posFinal--;
		}
	}
	
	if(resultado){
		document.write("Es un palíndromo");
	} else{
		document.write("No es un palíndromo");
	}
} 


function comprobarBoton(botonPulsado){

	var respuesta = "El botón pulsado ha sido: ";
	if(botonPulsado.id==="boton1"){
		respuesta+="botón 1";
	} else if(botonPulsado.id==="boton2"){
		respuesta+="botón 2";
	}else if(botonPulsado.id==="boton3"){
		respuesta+="botón 3";
	}
	document.write(respuesta);
}

function mostrarMensaje(){
	alert("Introducido: "+document.getElementById("campoTexto").value);
}