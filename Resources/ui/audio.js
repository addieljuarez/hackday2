var winAudio = Ti.UI.currentWindow;
winAudio.backgroundColor = '#000';


var file;
var timer;
var sound;
var duration = 0;

var label =Titanium.UI.createLabel({
	text:'',
	top:'150dp',
	color:'#999',
	textAlign:'center',
	width:'250dp',
	height:'auto',
});
winAudio.add(label);


var linetype = Titanium.UI.createLabel({
	text:'audio line type ',//+ lineTypeToStr(),
	bottom:'15dp',
	color:'#999',
	textAlign:'center',
	width:'250dp',
	height:'auto',
});
winAudio.add(linetype);

var volume =Titanium.UI.createLabel({
	text:'volumen '+ Titanium.Media.volume,
	bottom:'50dp',
	color:'#999',
	textAlign:'center',
	width:'250dp',
	height:'auto',
})
winAudio.add(volume);

var switchLabel = Ti.UI.createLabel({
	text:'alta definición '+ Titanium.Media.volume,
	color:'#999',
	textAlign:'center',
	width:'250dp',
	height:'auto',
	bottom:'115dp'
});
winAudio.add(switchLabel);

var switcher = Ti.UI.createSwitch({
	value:false,
	bottom:'80dp',
});
winAudio.add(switcher);

var b2 = Ti.UI.createButton({
	title:'Playback recording',
	width:'200dp',
	height:'40dp',
	top:'80dp',
});

winAudio.add(b2);

var b1 = Titanium.UI.createButton({
	title:'Start recording',
	width:'200dp',
	height:'40dp',
	top:'20dp',
});
winAudio.add(b1);

///////////////////////////////////////////////////////////////////////////////////////////////

var recording = Ti.Media.createAudioRecorder();

recording.compression = Titanium.Media.AUDIO_FORMAT_LINEAR_PCM;
recording.format = Ti.Media.AUDIO_FILEFORMAT_CAF;

Ti.Media.addEventListener('recordinginput', function(e){
	Ti.API.info('input avaliable changed: ' + e.avaliable);
	if (!e.avaliable && recording.recording) 
	{
		b1.fireEvent('click', {});
	};
});

Ti.Media.addEventListener('linechange', function(e){
	linetype.text = 'audio line type:  ' ;
});

Ti.Media.addEventListener('volume', function(e){
	volume.text = "volumen: " + e.volume;
});
