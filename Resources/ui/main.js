// 
//  main.js
//  hackday2
//  
//  Created by addiel on 2012-05-16.
//  Copyright 2012 addiel. All rights reserved.
// 



exports.Main = function() {

	Ti.UI.setBackgroundColor('#fff');

	var tabGroup = Titanium.UI.createTabGroup({
		
	});
	
	//
	//creación de ventanas
	//

	var timeLine = Titanium.UI.createWindow({
		title : 'TL',
		url:'/ui/timeLine.js',
		navBarHidden:true ,
		
	});

	var mapasGeneral = Ti.UI.createWindow({
		title : 'Geolocalizacion',
		url:'/ui/mapaGeneral.js',
		navBarHidden:true,
	
	});
	
	var feedback = Ti.UI.createWindow({
		title : 'FeedBack',
		url:'/ui/feedback.js',
		navBarHidden:true,
	
	});
	
	//
	//creación de las tabs
	//
		
	var timeLineTab = Titanium.UI.createTab({
		title : 'TL',
		top:'0dp',
		left:'0dp',
		right:'0dp',
		window : timeLine,
	});

	var mapasGeneralTab = Ti.UI.createTab({
		title : 'geolocalizacion',
		window : mapasGeneral,
	});
	
	var feedbackTab = Ti.UI.createTab({
		title : 'feedback',
		window : feedback,
	});


	
	tabGroup.addTab(timeLineTab);
	tabGroup.addTab(mapasGeneralTab);
	tabGroup.addTab(feedbackTab);

	return tabGroup;

}