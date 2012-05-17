var winFoto = Titanium.UI.currentWindow;
winFoto.title = 'foto';
winFoto.backgroundColor = '#000';

var dialogo = Ti.UI.createOptionDialog({
	title: '¿que deseas hacer?',
	options:['camara','galeria', 'cancelar'],
	cancel:2,
});



dialogo.addEventListener('click', function(e){
	Ti.API.info('has seleccionado ' + e.index );

	if (e.index == 0) {
		Titanium.Media.showCamera({
			success:function(event){
				var imagen = event.media;

				if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) 
				{
					var imagenView = Titanium.UI.createImageView({
						top:'10dp',
						left:'10dp',
						width:'300dp',
						height:'300dp',
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
						var imagenView = Ti.UI.createImageView({
							top:'10dp',
							left:'10dp',
							width:'300dp',
							height:'300dp',
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