var grid  = Titanium.UI.currentWindow;
grid.backgroundColor = '#000';
grid.layout = 'vertical';


		// ID1:clv,
		// ID2:nomb,
		// ID3:ubc,
		// ID4:lg,
		// ID5:tlf,
		// ID6:dirc,
		// ID7:nmr,

var pagina = Titanium.UI.createButton({
	title :'página',
	heigth:'75dp',
	width:'120dp',
});

grid.add(pagina);

pagina.addEventListener('click', function(e){
	alert(grid.ID1);
	
});


var infoGeneral = Titanium.UI.createButton({
	title :'info general',
	heigth:'75dp',
	width:'120dp',
});

grid.add(infoGeneral);
infoGeneral.addEventListener('click', function(e){
	alert(grid.ID1);
	
});

var infoRelevante = Titanium.UI.createButton({
	title :'Info Relevante',
	heigth:'75dp',
	width:'120dp',
});

grid.add(infoRelevante);
infoRelevante.addEventListener('click', function(e){
	alert(grid.ID1);
});

var correo = Titanium.UI.createButton({
	title :'correo',
	heigth:'75dp',
	width:'120dp',
});

grid.add(correo);
correo.addEventListener('click', function(e){
	alert(grid.ID1);
	
});

var multimedia = Titanium.UI.createButton({
	title :'multimedia',
	heigth:'75dp',
	width:'120dp',
});

grid.add(multimedia);
multimedia.addEventListener('click', function(e){
	alert(grid.ID6);
	
});

var mapa = Titanium.UI.createButton({
	title :'mapa',
	heigth:'75dp',
	width:'120dp',
});
mapa.addEventListener('click', function(e){
	alert(grid.ID7);
	
});

grid.add(mapa);