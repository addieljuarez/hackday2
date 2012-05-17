var mapaGeneral = Ti.UI.currentWindow;
mapaGeneral.backgroundColor = '#000';


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
		//annotations:[nombrePunto],
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


 