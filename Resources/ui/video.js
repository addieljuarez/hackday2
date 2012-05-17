var winVideo = Titanium.UI.currentWindow;
winVideo.title = 'video';
winVideo.backgroundColor = '#000';


var VideoGrabadora = 'video/video-test.mp4';

var botonGrabar = Titanium.UI.createButton({
	title:'grabar video',
});
winVideo.add(botonGrabar);


botonGrabar.addEventListener('click', function(e){
	var intent = Titanium.Android.createIntent({
		action:'android.media.action.VIDEO_CAPTURE'
	});

	Titanium.Android.currentActivity.startActivityForResult(
		intent, function(e){
			if(e.error)
			{
				Titanium.UI.createNotification({
					duration:Ti.UI.NOTIFICATION_DURATION_LONG,
					message:'error '+ e.error,
				}).show();
			}
			else
			{
				if (e.resultCode === Titanium.Android.RESULT_OK) 
				{
					VideoGrabadora = e.intent.data;
					var source = Ti.Filesystem.getFile(VideoGrabadora);
					movieFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'miVideo.3gp');
					source.copy(movieFile.nativePath);
					VideoGrabadora = movieFile.nativePath;
					botonGrabar.title= 'play';
				}
				else
				{
					Ti.UI.createNotification({
						duration:Ti.UI.NOTIFICATION_DURATION_LONG,
						message:'¿cancelado/error?' + e.resultCode,
					}).show();
				}

			}
		})

});