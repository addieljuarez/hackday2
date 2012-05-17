var timeLine = Titanium.UI.currentWindow;
timeLine.backgroundImage='/images/fondo.png';
timeLine.navBarHidden= true;
//timeLine.fullscreen= true;
//timeLine.backgroundImage = 'images/splasColor.png'
////////////////////////////////////////////////////////////////////////////////////////
var  baner = Titanium.UI.createImageView({
	image:'/images/banner.png',
	top:'5dp',
});
timeLine.add(baner);

/////////////////////////////////////////////////////////////////
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
					id : json[i].clave,
					id1 : json[i].Nombre,
					id2 : json[i].Ubicacion,
					id3 : json[i].zona_id_zona,
					id4 : json[i].logo,
					id5 : json[i].telefono,
					id6 : json[i].director,
					id7 : json[i].numero,
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

	row.addEventListener('click', function(e){
	
	var  clv=e.rowData.id;
	var nomb = e.rowData.id1;
	var ubc = e.rowData.id2;
	var zon =e.rowData.id3;
	var lg = e.rowData.id4;
	var tlf = e.rowData.id5;
	var dirc = e.rowData.id6;
	var nmr = e.rowData.id7;
	
	 var grid = Ti.UI.createWindow({
		url:'/ui/grid.js',
		ID1:clv,
		ID2:nomb,
		ID3:ubc,
		ID4:zon,
		ID5:lg,
		ID6:tlf,
		ID7:dirc,
		ID8:nmr,
		 navBarHidden:true ,
		
	 });
	grid.open({modal:true});
	//alert(clv);

});

        }

	table.setData(tableData);
    },
    onerror: function(e) {
	Ti.API.debug("STATUS: " + this.status);
	Ti.API.debug("TEXT:   " + this.responseText);
	Ti.API.debug("ERROR:  " + e.error);
	alert('sin internet.');
    },
    timeout:5000
});

xhr.open("GET", url);
xhr.send();


timeLine.add(table);

//////////////////////////////////////////////////////////////////////////////////////////////
