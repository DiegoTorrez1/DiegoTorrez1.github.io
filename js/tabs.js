(function () {
	
/*=====================================================
=            Objeto con propiedades de Tab            =
=====================================================*/

var ptab = {

	primer_encabezado: document.getElementById('encabezado_menu').firstElementChild,
	primer_contenido: document.getElementById('contenido_menu').firstElementChild,
	enlaces_encabezado: document.querySelectorAll('#encabezado_menu li a'),
	li_encabezados: document.querySelectorAll('#encabezado_menu li'),
	divs_contenido: document.querySelectorAll('#contenido_menu > div'),
	contenido_activo: null

}

/*=====================================================
=            Objeto con métodos de Tab            =
=====================================================*/

var mtab = {

	inicio: function () {
		ptab.primer_encabezado.className = 'active';
		ptab.primer_contenido.className = 'active';
		for (var i = 0; i < ptab.enlaces_encabezado.length; i++) {
			ptab.enlaces_encabezado[i].addEventListener('click', mtab.evento);
		}
	},

	evento: function(e){
		e.preventDefault();
		for (var i = 0; i < ptab.li_encabezados.length; i++) {
			ptab.li_encabezados[i].className = '';
		}

		for (var i = 0; i < ptab.divs_contenido.length; i++) {
			ptab.divs_contenido[i].className = '';
		}

		this.parentElement.className = 'active';
		ptab.contenido_activo = this.getAttribute('href');
		document.querySelector(ptab.contenido_activo).className = 'active';
		document.querySelector(ptab.contenido_activo).style.opacity = 0;
		setTimeout(function() {
			document.querySelector(ptab.contenido_activo).style.opacity = 1;
		}, 100);
	}

}

mtab.inicio();
	
}())