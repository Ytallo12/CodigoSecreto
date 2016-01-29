$(function() {
	// Definir playlist
	var playlist = [{
		artist: 'Interchange',
		title: 'Conversation',
		mp3: '../audios/Unidade_01/Unit01_Pg002_Ex01_Conversation_PtA.mp3'
	}, {
		artist: 'Interchange',
		title: 'SnapShot',
		mp3: '../audios/Unidade_01/Unit01_Pg002_Ex02_Snapshot.mp3'
	}, {
		artist: 'Interchange',
		title: 'GrammarFocus',
		mp3: '../audios/Unidade_01/Unit01_Pg003_Ex03_GrammarFocus.mp3'
	}];
	var currentTrack = 0;
	var numTracks = playlist.length;
	var player = $(".player").jPlayer({
		ready: function () {
			//configura a faixa inicial do jPlayer
			player.jPlayer("setMedia", playlist[currentTrack]) // na pagina nao existe o ";"
			player.playCurrent();
		},
		ended: function () {
			//quando terminar de tocar uma música, ir para a próxima
			$(this).playNext;
		},
		play: function () {
			// quando começar a tocar, escrever o nome da faixa sendo executada
			$('.player-current-track').text(playlist[currentTrack].artist+' - '+playlist[currentTrack].title);
		},
		swfPath: 'js/plugins/jplayer/jquery.jplayer.swf',
		supplied: "mp3",
		cssSelectorAncestor: "",
		cssSelector: {
			play: '.player-play',
			pause: '.player-pause',
			stop: '.player-stop',
			seekBar: '.player-timeline',
			playBar: '.player-timeline-control'
		},
		size: {
			width: "1px",
			height: "1px"
		}
	});
	// testar dentro da funcao anterior, na linha 42
	player.playCurrent = function() {
		player.jPlayer("setMedia", playlist[currentTrack]).jPlayer("play");
	}

	player.playNext = function() {
		currentTrack = (currentTrack == (numTracks - 1)) ? 0 : ++currentTrack;
		player.playCurrent();
	};

	player.playPrevious = function() {
		currentTrack = (currentTrack == 0) ? numTracks - 1 : --currentTrack;
		player.playCurrent;
	};
	$('.player-next').click(function() {
		player.playNext();
	});

	$('.player-prev').click(function() {
		player.playPrevious();
	});
});