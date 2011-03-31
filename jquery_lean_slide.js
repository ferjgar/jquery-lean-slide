/**
 * Plugin de jQuery para generar un slider über simple sobre cualquier conjunto de elementos
 * Detalles en http://www.usuariodeinternet.es/desarrollo/jquery-lean-slide
 * @author Fernando García <http://www.usuariodeinternet.es>
 * @author basado en jquery.innerfade.js de Torsten Baldes <http://medienfreunde.com/lab/innerfade>
 * @version 0.1
 */

(function($) {

	$.fn.leanslide = function(argumentos)	{

		var configuracion = {
			'id_anterior'  : 'slide_ant',
    	'id_siguiente' : 'slide_sig',
    	'callback'		 : function(obj) {}
    };

		return this.each(function() {

			if(argumentos) {
        $.extend(configuracion, argumentos);
      }

			var contenedor = $(this);
			var slides = contenedor.children();
			var num_slides = slides.length;

			// preparamos el contenedor para el position absolute de los hijos
			contenedor.css('position', 'relative');

		  for(var i = 0; i < num_slides; i++)	{
				$(slides[i]).css('position', 'absolute').hide();
			}

			$(slides[0]).show();

			$('#' + configuracion.id_anterior).click(function(event) {
				event.preventDefault();
				slide_mov('ant');
			});

			$('#' + configuracion.id_siguiente).click(function(event) {
				event.preventDefault();
				slide_mov('sig');
			});

			function slide_mov(orden) {

				var actual = slides.filter(':visible');
				var siguiente =  actual.next();
				if(orden == 'ant') {
					siguiente =  actual.prev();
				}

				if(siguiente.length == 0) {
					// hemos llegado al final (o principio) del conjunto de slides
					siguiente = slides.first();
					if(orden == 'ant') {
						siguiente =  slides.last();
					}
				}

				actual.fadeOut();
				siguiente.fadeIn(function() { configuracion.callback(this); });

			}

		});

	};

})(jQuery);