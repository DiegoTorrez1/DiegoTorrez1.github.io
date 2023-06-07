(function () {

/*==========================================================
=            Objeto con Propiedades de Parallax            =
==========================================================*/

var pparallax = {
	seccion: document.querySelector(".parallax"),
	recorrido: null,
	limite: null
}

/*==========================================================
=            Objeto con Métodos de Parallax            =
==========================================================*/

var mparallax = {
	inicio: function () {
		window.addEventListener('scroll', mparallax.scrollParallax);
	},

	scrollParallax: function () {
		pparallax.recorrido = window.pageYOffset;
		pparallax.limite = pparallax.seccion.offsetTop + pparallax.seccion.offsetHeight;

		if (pparallax.recorrido > pparallax.seccion.offsetTop - window.outerHeight && pparallax.recorrido <= pparallax.limite) {
			pparallax.seccion.style.backgroundPositionY = (pparallax.recorrido - pparallax.seccion.offsetTop) /1.5+ "px";
		} else{
			pparallax.seccion.style.backgroundPositionY = 0;
		}
	}
}

mparallax.inicio();

}())

