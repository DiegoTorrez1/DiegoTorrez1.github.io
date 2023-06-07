(function () {

/*================================================================
=            Objeto con las propiedades de la galería            =
================================================================*/

var propiedadesLightbox = {

	imgContainer: document.querySelectorAll('#portada .lightbox'),
	imagen: null,
	cuerpoDom: document.querySelector('body'),
	imagenSrc: null,
	lightbox: null,
	modal: null,
	cerrarModal: null,
	animacion: 'fade'

}


/*================================================================
=            Objeto con los métodos de la galería            =
================================================================*/

var metodosLightbox = {

	inicio: function () {
		for (var i = 0; i < propiedadesLightbox.imgContainer.length; i++) {
			propiedadesLightbox.imgContainer[i].addEventListener('click', metodosLightbox.capturaImagen);
		}
	},

	capturaImagen: function(e){
		propiedadesLightbox.imagen = e.target.parentElement;
		metodosLightbox.lightbox(propiedadesLightbox.imagen);
	},

	lightbox: function (imagen) {
		propiedadesLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);

		propiedadesLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
		propiedadesLightbox.lightbox = document.getElementById('lightbox_container');

		propiedadesLightbox.lightbox.style.width = '100%';
		propiedadesLightbox.lightbox.style.height = '100%';
		propiedadesLightbox.lightbox.style.position = 'fixed';
		propiedadesLightbox.lightbox.style.zIndex = '1000';
		propiedadesLightbox.lightbox.style.background = 'rgba(0,0,0,0.8)';
		propiedadesLightbox.lightbox.style.top = 0;
		propiedadesLightbox.lightbox.style.left = 0;

		propiedadesLightbox.lightbox.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
		propiedadesLightbox.modal = document.getElementById('modal');
		propiedadesLightbox.modal.style.height = '100%';

		propiedadesLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propiedadesLightbox.imagenSrc);
		propiedadesLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');

		if (propiedadesLightbox.animacion == 'fade') {
			document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;
			setTimeout(function() {
				document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;
			}, 50);
		}

		propiedadesLightbox.modal.innerHTML += '<i id="cerrar_modal" class="fa fa-times" aria-hidden="true"></i>';
		propiedadesLightbox.cerrarModal = document.getElementById('cerrar_modal');
		propiedadesLightbox.cerrarModal.addEventListener('click', metodosLightbox.cerrarModal);


	},

	cerrarModal: function(){
		propiedadesLightbox.cuerpoDom.removeChild(propiedadesLightbox.lightbox);
	}

}

metodosLightbox.inicio();


}())