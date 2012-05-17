var winEmail =Ti.UI.currentWindow;
winEmail.backgroundImage = '/images/fondo.png';

var  baner = Titanium.UI.createImageView({
	image:'/images/banner.png',
	top:'5dp',
	height:'70dp',
	width:'270dp'
});
winEmail.add(baner);


var webView = Ti.UI.createWebView({
	url:'http://mail.google.com',
	top : '70dp',
	left:'15dp',
	right:'15dp',
	down:'25dp',
	//width:'25dp',
	backgroundColor:'#f3f4f6',
 });

    
    
 winEmail.add(webView);
   
