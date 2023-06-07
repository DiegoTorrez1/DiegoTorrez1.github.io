(function(){
	var formulario = document.formulario_contacto,
		elementos = formulario.elements;


	function validarInputs(e){

		for (var i = 0; i < elementos.length; i++) {
			if (elementos[i].value == '') {
				e.preventDefault();
				if (elementos[i].parentElement.children.length < 3) {
					var error = document.createElement('p');
					var textoError = document.createTextNode('Por favor llena el campo con tu ' + elementos[i].name);
					error.className = 'error';
					error.appendChild(textoError);
					elementos[i].parentElement.appendChild(error);
				}
				
			} else{
				if (elementos[i].parentElement.children.length >= 3){
					var error = elementos[i].parentElement.getElementsByTagName('p')[0];
					elementos[i].parentElement.removeChild(error);
				}
			}
		}	

	}

	//Funciones blur y focus

	function focusInput(){
		this.parentElement.children[1].className = 'label active';
	}
	function blurInput(){
		if (this.value <= 0 ) {
			this.parentElement.children[1].className = 'label';
		}
	}
	//Eventos
	for(var i = 0; i<elementos.length; i++){
		if ( elementos[i].type == 'text' || elementos[i].type == 'email' || elementos[i].nodeName.toLowerCase() == 'textarea' ) {
		elementos[i].addEventListener('focus', focusInput);
		elementos[i].addEventListener('blur', blurInput);
		}
	}

	formulario.addEventListener('submit', validarInputs);	

}())