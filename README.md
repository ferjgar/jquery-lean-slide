jQuery Lean Slide
=================

Plugin de jQuery para generar un slider über simple sobre cualquier conjunto de elementos.

No es automático, requiere la interacción del usuario para pasar las slides.

El objetivo ha sido la simplificación máxima, el plugin compactado ocupa **635 bytes** ;)


Uso
---

Teniendo en HTML

	<ul>
		<li>uno</li>
		<li>dos</li>
		<li>tres</li>
	</ul>

Simplemente añadiríamos en javascript

	$('ul').leanslide();

Las opciones de configuración son

	$('ul').leanslide({
		'id_anterior'  : id del elemento al que clickar para ir a la slide anterior
		'id_siguiente' : id del elemento al que clickar para ir a la slide siguiente
		'callback'		 : función a ejecutar tras el movimiento de un slide
	});

En el fichero `jquery_lean_slide_demo.html` hay varios ejemplos de uso.

Recursos
--------

* Basado inicialmente en el plugin [innerfade][1]
* Los gatetes de [placekitten][2]

Más información
---------------

En el siguiente post podéis encontrar más detalles sobre el plugin: [jQuery Lean Slide][blog]

[blog]: http://www.usuariodeinternet.es/desarrollo/jquery-lean-slide
[1]: http://medienfreunde.com/lab/innerfade
[2]: http://placekitten.com/