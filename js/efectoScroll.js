/*===============================================================
=            Objeto con propiedades de efecto scroll            =
===============================================================*/

var pscroll = {

	posicion: window.pageYOffset,
	scroll_suave: document.getElementsByClassName('scroll-suave'),
	volver_arriba: document.getElementsByClassName('volver-arriba'),
	seccion_distancia: null,
	destino: null,
	intervalo: null

}


/*===============================================================
=            Objeto con métodos de efecto scroll            =
===============================================================*/

var mscroll = {

	inicio: function () {

		for (var i = 0; i < pscroll.scroll_suave.length; i++) {
			pscroll.scroll_suave[i].addEventListener('click', mscroll.moverse);
		}

		for (var i = 0; i < pscroll.volver_arriba.length; i++) {
			pscroll.volver_arriba[i].addEventListener('click', mscroll.subir);
		}

	},

	moverse: function (e) {
		e.preventDefault();
		pscroll.destino = this.getAttribute('href');
		pscroll.seccion_distancia = document.querySelector(pscroll.destino).offsetTop - 94;
		
		clearInterval(pscroll.intervalo);
		pscroll.posicion = window.pageYOffset;
		pscroll.intervalo = setInterval(function() {

			if (pscroll.posicion < pscroll.seccion_distancia) {

				pscroll.posicion+= 30;

				if (pscroll.posicion >= pscroll.seccion_distancia) {
					clearInterval(pscroll.intervalo);
				}

			} else{

				pscroll.posicion-= 30;

				if (pscroll.posicion <= pscroll.seccion_distancia) {
					clearInterval(pscroll.intervalo);
				}

			}
			
			window.scrollTo(0, pscroll.posicion);
			
		}, 15);
		
	},

	subir: function (e) {
		e.preventDefault();
		clearInterval(pscroll.intervalo);
		pscroll.posicion = window.pageYOffset;
		pscroll.intervalo = setInterval(function() {

			if (pscroll.posicion > 0) {

				pscroll.posicion-= 30;

				if (pscroll.posicion <= 0) {
					clearInterval(pscroll.intervalo);
				}

			} else{
				return;
			}
			
			window.scrollTo(0, pscroll.posicion);
			
		}, 15);
	}

}

mscroll.inicio();