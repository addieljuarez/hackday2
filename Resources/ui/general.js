var general = Titanium.UI.currentWindow;
general.backgroundImage = '/images/fondo.png';

var  ban = Titanium.UI.createImageView({
	image:'/images/banner.png',
	top:'5dp',
	height:'70dp',
	width:'270dp'
});
general.add(ban);

var img= Ti.UI.createImageView({
	image:'/images/back.png',
	top:'15%',
	height:'35dp',
	width:'300dp',
})
general.add(img);

var foto=Ti.UI.createImageView({
	image:'/images/escuela.jpg',
	top:'27%',
	height:'160dp',
	width:'200dp',
})
general.add(foto);

