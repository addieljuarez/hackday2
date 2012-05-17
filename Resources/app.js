// 
//  app.js
//  hackday2
//  
//  Created by addiel on 2012-05-16.
//  Copyright 2012 addiel. All rights reserved.
// 



// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var Main = Titanium.UI.createWindow({
	url:'ui/timeLine.js',
	title:'TL',
	backgroundImage:'/images/splashColor.png',
	
});
Main.open();

