var pagina = Titanium.UI.currentWindow;
pagina.backgroundColor= '#000';

var boton = Titanium.UI.createButton({
	title:'prueba',
});

boton.addEventListener('click', function(e){
	alert(pagina.id)
});
