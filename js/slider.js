(function () {
	

/*==========================================
=            Propiedades Slider            =
==========================================*/


var pslider = {

	slider: document.getElementById('slider'),
	primerSlide: null,
	ultimoSlide: null

}



/*======================================
=            Metodos slider            =
======================================*/

var mslider = {

	inicio: function () {
		pslider.primerSlide = pslider.slider.firstElementChild;
		pslider.ultimoSlide = pslider.slider.lastElementChild;
		pslider.slider.insertBefore(pslider.ultimoSlide, pslider.primerSlide);
		pslider.slider.style.marginLeft = '-100%';

		setInterval(mslider.moverSlide, 3000);
	},

	moverSlide: function () {
		pslider.slider.style.transition = 'all 1s ease';
		pslider.slider.style.marginLeft = '-200%';
				
		setTimeout(function() {
			pslider.primerSlide = pslider.slider.firstElementChild;
			pslider.ultimoSlide = pslider.slider.lastElementChild;
			pslider.slider.appendChild(pslider.slider.firstElementChild);
			pslider.slider.style.transition = 'unset';
			pslider.slider.style.marginLeft = '-100%';
		}, 1000);
	}

}


mslider.inicio();



}())