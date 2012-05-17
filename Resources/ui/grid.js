var grid  = Titanium.UI.currentWindow;
grid.backgroundImage = '/images/fondo.png';
//grid.layout = 'vertical';


var  baner = Titanium.UI.createImageView({
	image:'/images/banner.png',
	top:'5dp',
	height:'70dp',
	width:'270dp'
});
grid.add(baner);
//////////////////////////////////////////////////////////////////////////////////////////////////

var imagen1 = Titanium.UI.createImageView({
	image:'/images/imagen1.jpg'
});
var imagen2 = Titanium.UI.createImageView({
	image:'/images/imagen2.JPG'
});
var imagen3 = Titanium.UI.createImageView({
	image:'/images/imagen3.jpg'
});
var imagen4 = Titanium.UI.createImageView({
	image:'/images/imagen4.png'
});


var scroll = Titanium.UI.createScrollableView({
	top:'60dp',
	height:'180dp',
	width:'200dp',
	views:[imagen1, imagen2, imagen3, imagen4],  
    showPagingControl:true,  
    clipViews:false,  
    pagingControlColor:'#f3f4f6',
})
grid.add(scroll);

//////////////////////////////////////////////////////////////////////////////////////////////////
		// ID1:clv,
		// ID2:nomb,
		// ID3:ubc,
		// ID4:lg,
		// ID5:tlf,
		// ID6:dirc,
		// ID7:nmr,

var pagina = Titanium.UI.createImageView({
	image :'/images/url.png',
	heigth:'75dp',
	width:'75dp',
	top:'50%',
	left:'5%'
});

grid.add(pagina);


pagina.addEventListener('click', function(e){
	//alert(grid.ID1);
	var winPagina = Titanium.UI.createWindow({
		title:'pagina web',
		backgroundColor:'#000',
		navBarHidden:true,
	});
	winPagina.open({modal:true});
	//alert(grid.ID1);
	
	var webView = Ti.UI.createWebView({
		url:'http://www.dimsatec.com/services/hubbers/principal/informacion/'+grid.ID1,
		
	});
	winPagina.add(webView);
	
	
});

/////////////////////////////////////////////////////////////////////////////7
var infoGeneral = Titanium.UI.createImageView({
	image :'/images/info.png',
	heigth:'75dp',
	width:'75dp',
	top:'50%',
	left:'35%'
});

grid.add(infoGeneral);
infoGeneral.addEventListener('click', function(e){
	alert(grid.ID1);
	
});

var infoRelevante = Titanium.UI.createImageView({
	image :'/images/noticias.png',
	heigth:'75dp',
	width:'75dp',
	top:'50%',
	left:'70%'
});

grid.add(infoRelevante);
infoRelevante.addEventListener('click', function(e){
	alert(grid.ID1);
});


///////////////////////////////////////////////////////////////////////////////////////

var correo = Titanium.UI.createImageView({
	image :'/images/correo.png',
	heigth:'75dp',
	width:'75dp',
	top:'70%',
	left:'5%',
});

grid.add(correo);
correo.addEventListener('click', function(e){
	//alert(grid.ID1);
	// var winEmail = Titanium.UI.createWindow({
		// title:'email',
		// url:'ui/email.js',
		// navBarHidden:true,
	// });
	// winEmail.open({modal:true});
	
	var newDir = Titanium.Filesystem.get
	
 });





//////////////////////////////////////////////////////////////////////////////////////////////

var multimedia = Titanium.UI.createImageView({
	image :'/images/multim.png',
	heigth:'75dp',
	width:'75dp',
	top:'70%',
	left:'35%',
	backgroundSelectedImage:'/images/multimediaS.png',
	//backgroundSelectedColor :'#000',
	
});

grid.add(multimedia);
multimedia.addEventListener('click', function(e){
	//alert(grid.ID6);
	var winMultimedia = Ti.UI.createWindow({
		title:'multimedia',
		url:'ui/multimedia.js',	
		navBarHidden:true,
	});
	winMultimedia.open({modal:true});
});


////////////////////////////////////////////////////////////////////////////////////////////
var mapa = Titanium.UI.createImageView({
	image :'/images/geo.png',
	heigth:'75dp',
	width:'75dp',
	top:'70%',
	left:'70%',
});
mapa.addEventListener('click', function(e){
	//alert(grid.ID7);
	
var mapaGeneral = Ti.UI.createWindow({
	backgroundColor : '#000',
	navBarHidden:true,
	
});



var anotaciones = Titanium.Map.createAnnotation({
    latitude:grid.ID9,
    longitude:grid.ID10,
    title:grid.ID2,
    subtitle:grid.ID7,
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true,
    
});

//
// create map
//




var mapView = Titanium.Map.createView({
		mapType:Titanium.Map.STANDARD_TYPE,
		//mapType:Titanium.Map.SATELLITE_TYPE,
		//mapType:Titanium.Map.HYBRID_TYPE,
		//region:{latitude:latitude, longitude:longitude, latitudeDelta:0.05, longitudeDelta: 0.05},
		
		regionFit:true,
		animate:true,
		userLocation:true,
		annotations:[anotaciones],
	});
	//
	// add map to window
	//
	mapaGeneral.add(mapView);
	
	
	

//
// geo
//
//
Titanium.Geolocation.getCurrentPosition(function(e){
	if (e.error) 
	{
		alert("lo sentimos tu geolocalizador no esta disponible en tu dispositivo :(" );
		return;
	};
	
	var longitude = e.coords.longitude;
	var latitude = e.coords.latitude;
	var altitude = e.coords.altitude;
	var heading = e.coords.heading;
	var accuracy= e.coords.accuracy;
	var timestamp = e.coords.timestamp;
//	var altitudeAccuracy = e.coord.altitudeAccuracy;
	
	mapView.region = {latitude: latitude, longitude : longitude, latitudeDelta:0.01, longitudeDelta: 0.01};
	//Ti.API.info('inicia la localización ' + e.latitude + 'latitud '+ e.longitude + ' longitud' );
	// var nombrePunto = Titanium.Map.createAnnotation({
		// latitude:e.latitude,
		// longitude: e.longitude,
		// title: 'usted está aqui',
	// //	subtitle: txtStartLocation.value,
		// animate:true,
		// pincolor:Titanium.Map.ANNOTATION_RED,
	// });
	// //mapView.addAnnotation(nombrePunto);
	
		
		
});
mapaGeneral.open();
	 
	

});

grid.add(mapa);

/////////////////////////////////////////////////////////////////////////////////////////////////////77