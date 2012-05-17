var winFoto = Titanium.UI.currentWindow;
winFoto.title = 'foto';
winFoto.backgroundImage= '/images/fondo.png';
var  baner = Titanium.UI.createImageView({
	image:'/images/banner.png',
	top:'5dp',
	height:'70dp',
	width:'270dp'
});
winFoto.add(baner);

/////////////////////////////////////////////////////////////////////////////////////////

var dialogo = Ti.UI.createOptionDialog({
	title: '¿que deseas hacer?',
	options:['camara','galeria', 'cancelar'],
	cancel:2,
});

var imageView =null;

dialogo.addEventListener('click', function(e){
	Ti.API.info('has seleccionado ' + e.index );

	if (e.index == 0) {
		Titanium.Media.showCamera({
			success:function(event){
				var imagen = event.media;

				if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) 
				{
					 imagenView = Titanium.UI.createImageView({
						top:'90dp',
						left:'20dp',
						width:'100dp',
						height:'120dp',
						backgroundColor:'#fff',
						borderSize:'10',
						borderColor:'#fff',
						
					});
					imagenView.image = imagen;
					winFoto.add(imagenView)
				};
			},
			cancel:function()
			{
				winFoto.close();
			},
			error:function(error)
			{
				var a = Titanium.UI.createAlertDialog({
					title:'camara',
				});

				if (error.code == Titanium.Media.NO_CAMERA) 
				{
					a.setMessage('el dispositivo no puede guardar imagenes');
				}
				else
				{
					a.setMessage('Error inesperado ' + error.code );
				}
				a.show();
			},
			allowImageEditing:true,
			saveToPhotoGallery:true,
		});
	}
	else
	{
		if (e.index == 1) 
		{
			Titanium.Media.openPhotoGallery({
				success:function(event){
					var imagen = event.media;
					Ti.API.debug('el type era ' + event.medyaType);
					if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) 
					{
						 imagenView = Ti.UI.createImageView({
							top:'90dp',
						left:'20dp',
						width:'100dp',
						height:'120dp',
						backgroundColor:'#fff',
						borderSize:'10',
						borderColor:'#fff',
						});
						imagenView.image= imagen;
						winFoto.add(imagenView);
					};
				},
				cancel:function()
				{
					winFoto.close()
				}
			});
		}
		else
		{
			if (e.index == 2) 
			{
				winFoto.close();
			}
		}
	}
	


});

dialogo.show();

if(Titanium.Platform.osname == 'android') {

	var activity = Ti.Android.currentActivity;

	activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;

		var acercaAlert = menu.add({
			title : "enviar"
		});

		acercaAlert.addEventListener("click", function(e) {
			 var alertDialog = Titanium.UI.createAlertDialog({
              title: 'enviando',
              message: ' ',
              buttonNames: ['OK']
            });
            alertDialog.show();
			
		});
	}
}





var label = Titanium.UI.createLabel({
	width:'280dp',
	height:'auto',
	top:'20dp',
	left:'20dp',
	color:'#000',
	text: 'Photo share \nEmail, Facebook, Twitter',
});


winFoto.add(label);

/////////////////////////////////////////////////////////////////////////////////

var txtTitle = Titanium.UI.createTextField({
	width:'160dp',
	height:'35dp',
	top:'90dp',
	left:'140dp',
	borderStyle:2,
	backgroundColor:'#fff',
});

winFoto.add(txtTitle);


////////////////////////////////////////////////////////////////////////////////

var txtMessage =Ti.UI.createTextArea({
	width:'160dp',
	height:'120dp',
	top:'130dp',
	left:'140dp',
	borderStyle:2,
	backgroundColor:'#fff',
});

winFoto.add(txtMessage);


function postToEmail(){
	var emailDialog = Titanium.UI.createEmailDialog();
	emailDialog.subject=txtTitle.value;
	emailDialog.toRecipients=['addieljuarez@gmail.com'];
	emailDialog.messageBody=txtMessage.value;
	emailDialog.open();
}


var buttonEmail = Titanium.UI.createButton({
	width:'280dp',
	height:'35dp',
	top:'280dp',
	left:'20dp',
	title:'enviar Via Email',
});



buttonEmail.addEventListener('click', function(e){
	if(imageView == null){
		postToEmail();
	}
	else{
		alert ('falta imagen');
	}
});

winFoto.add(buttonEmail);
///////////////////////////////////////////////////////////////////
