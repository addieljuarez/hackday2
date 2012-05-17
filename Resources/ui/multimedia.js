var multimedia = Titanium.UI.currentWindow;
multimedia.backgroundColor = '#000';

var botonVideo = Titanium.UI.createButton({
	title: 'video',
	width:'100dp',
	height:'50dp',
	top:'30%',
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

var botonAudio = Titanium.UI.createButton({
	title: 'audio',
	width:'100dp',
	height:'50dp',
	top:'10%',
});
multimedia.add(botonAudio);

//
// add event
//
botonAudio.addEventListener('click', function(e){
	var winAudio = Ti.UI.createWindow({

		url:'ui/audio.js',
	});
	winAudio.open({modal:true});
});

//////////////////////////////////////////////////////////////////////////////////////////

//
// create button for  picture
//
var botonFoto = Titanium.UI.createButton({
	title: 'foto',
	width:'100dp',
	height:'50dp',
	top:'50%',
});
multimedia.add(botonFoto);
//
// add event
//
botonFoto.addEventListener('click',function(e){
	var winFoto = Ti.UI.createWindow({
		url:'ui/foto.js'
	});
	winFoto.open({modal:true});
});




/////////////////////////////////////////////////////////////////////////////

var botonDoc = Titanium.UI.createButton({
	title: 'documentos',
	width:'100dp',
	height:'50dp',
	top:'80%',
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