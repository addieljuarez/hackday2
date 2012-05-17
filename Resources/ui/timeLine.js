var timeLine = Titanium.UI.currentWindow;
//timeLine.backgroundColor='#000';
//timeLine.backgroundImage = 'images/splasColor.png'
////////////////////////////////////////////////////////////////////////////////////////

var search = Titanium.UI.createSearchBar({
	  barColor: '#385292', 
	height : '40dp',
	hintText : 'Busca tu escuela',
	top : '0dp',
	showCancel:false,
	
});
/////////////////////////////////////////////////////////////////////////////


var url = "http://dimsatec.com/services/hubbers/api/escuelas";
var table = Ti.UI.createTableView({
	top : '50dp',
	left:'15dp',
	right:'15dp',
	down:'25dp',
	//width:'25dp',
	minRowHeight : '60dp',
	maxRowHeight : '70dp',
	editable : true,
	backgroundColor:'#fff',
 	search:search,
 	filterAttribute:'filter'
 
});
var tableData = [];
var json;

var xhr = Ti.Network.createHTTPClient({
    onload: function() {
	// Ti.API.debug(this.responseText);
	
	var tableData = [];
			json = JSON.parse(this.responseText);



	var cuenta = json.length;
			for( i = 0; i < cuenta; i++) {

				var row = Titanium.UI.createTableViewRow({
					id : json[i].id_sede,
					hasChild : true,
					height:'50dp',
					backgroundColor : '#fff',
					filter:json[i].Nombre,
				});
				
				var nombreEscuela= Titanium.UI.createLabel({
					text : json[i].Nombre,
					font : {
						fontSize : '18dp',
						fontWeight : 'bold'
					},
					left : '40dp',
					top : '15dp',
					color:'#000',
					width:'280dp',
					
					touchEnabled : false
				});
				
				var imagenEscuela = Titanium.UI.createImageView({
					height : '38dp',
					width : '38dp',
					top : '3dp',
					left : '2dp',
					image : '/images/escuelaSecundaria.jpg',
					touchEnabled : false,
					backgroundColor : '#000',

				});

	    row.add(nombreEscuela);
	    row.add(imagenEscuela)
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

//timeLine.add(table);

//////////////////////////////////////////////////////////////////////////////////////////////
