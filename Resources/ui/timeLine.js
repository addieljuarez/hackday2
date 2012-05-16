var timeLine = Titanium.UI.currentWindow;
timeLine.backgroundColor='#000';
////////////////////////////////////////////////////////////////////////////////////////

var sedesTV = Titanium.UI.createTableView({

	top : '50dp',
	left:'15dp',
	right:'15dp',
	down:'25dp',
	//width:'25dp',
	minRowHeight : '55dp',
	maxRowHeight : '60dp',
	editable : true,
	backgroundColor:'#fff',
});

timeLine.add(sedesTV);
/////////////////////////////////////////////////////////////////////////////////////////////7


var url = "https://raw.github.com/appcelerator/Documentation-Examples/master/HTTPClient/data/json.txt";
var table = Ti.UI.createTableView();
var tableData = [];
var json, fighters, fighter, i, row, nameLabel, nickLabel;

var xhr = Ti.Network.createHTTPClient({
    onload: function() {
	// Ti.API.debug(this.responseText);

	json = JSON.parse(this.responseText);
	for (i = 0; i < json.fighters.length; i++) {
	    fighter = json.fighters[i];
	    row = Ti.UI.createTableViewRow({
	        height:'60dp'
	    });
	    nameLabel = Ti.UI.createLabel({
	        text:fighter.name,
	        font:{
	            fontSize:'24dp',
		    fontWeight:'bold'
		},
		height:'auto',
		left:'10dp',
		top:'5dp',
		color:'#000',
		touchEnabled:false
	    });
	    nickLabel = Ti.UI.createLabel({
		text:'"' + fighter.nickname + '"',
		font:{
		    fontSize:'16dp'
		},
		height:'auto',
		left:'15dp',
		bottom:'5dp',
		color:'#000',
		touchEnabled:false
	    });

	    row.add(nameLabel);
	    row.add(nickLabel);
	    tableData.push(row);
        }

	table.setData(tableData);
    },
    onerror: function(e) {
	Ti.API.debug("STATUS: " + this.status);
	Ti.API.debug("TEXT:   " + this.responseText);
	Ti.API.debug("ERROR:  " + e.error);
	alert('There was an error retrieving the remote data. Try again.');
    },
    timeout:5000
});

xhr.open("GET", url);
xhr.send();

win.add(table);
win.open();

//////////////////////////////////////////////////////////////////////////////////////////////