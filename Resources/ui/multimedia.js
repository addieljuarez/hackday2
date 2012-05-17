var multimedia = Titanium.UI.currentWindow;
multimedia.backgroundImage = '/images/fondo.png';


var  baner = Titanium.UI.createImageView({
	image:'/images/banner.png',
	top:'5dp',
	height:'70dp',
	width:'270dp'
});
multimedia.add(baner);

///////////////////////////////////////////////////////////////////////////////////


var botonVideo = Titanium.UI.createImageView({
	image: '/images/video.png',
	heigth:'75dp',
	width:'75dp',
	top:'20%',
	left:'40%'
});
multimedia.add(botonVideo);

//
// add event
//
botonVideo.addEventListener('click', function(e){
	var winVideo = Ti.UI.createWindow({

		url:'ui/video.js',
	});
	winVideo.open({modal:true});
});

//////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////

//
// create button for  picture
//
var botonFoto = Titanium.UI.createImageView({
	image: '/images/foto.png',
	heigth:'75dp',
	width:'75dp',
	top:'48%',
	left:'40%'
});
multimedia.add(botonFoto);
//
// add event
//
botonFoto.addEventListener('click',function(e){
	var winFoto = Ti.UI.createWindow({
		url:'ui/foto.js',
		navBarHidden:true,
	});
	winFoto.open({modal:true});
});




/////////////////////////////////////////////////////////////////////////////

var botonDoc = Titanium.UI.createImageView({
	image: '/images/documentos.png',
	heigth:'75dp',
	width:'75dp',
	top:'75%',
	left:'40%',
});
multimedia.add(botonDoc);
//
// add event
//
botonDoc.addEventListener('click',function(e){
	var winDoc = Ti.UI.createWindow({
		url:'ui/doc.js'
	});
	winDoc.open({modal:true});
});