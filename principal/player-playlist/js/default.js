$(function() {
	// Definir playlist
	var playlist = [{
		artist: 'Interchange',
		title: 'Ex01-Conversation',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg002_Ex01_Conversation_PtA.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex02-Snapshot',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg002_Ex02_Snapshot.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex03-Grammar Focus',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg003_Ex03_GrammarFocus.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex04 A-Spelling Names',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg003_Ex04_SpellingNames_PtA.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex04 B-Spelling Names',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg003_Ex04_SpellingNames_PtB.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex05-Listening',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg003_Ex05_Listening.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex06 A-Word Power',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg004_Ex06_WordPower_PtA.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex06 B-Word Power',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg004_Ex06_WordPower_PtB.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex07-Saying Hello',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg004_Ex07_SayingHello_PtA.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex08-Conversation',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg005_Ex08_Conversation_PtA.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex09-Grammar Focus',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg005_Ex09_GrammarFocus.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex10-Pronunciation',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg006_Ex10_Pronunciation.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex11 A-Personal Information',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg006_Ex11_PersonalInformation_PtA.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex11 B-Personal Information',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg006_Ex11_PersonalInformation_PtB.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex12-Listening',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg007_Ex12_Listening_PtA.mp3'
	}, {
		artist: 'Interchange',
		title: 'Ex14-Saying Good-Bye',
		album: 'Unit 01',
		mp3: '../audios/Unidade_01/Unit01_Pg007_Ex14_SayingGood-bye_PtA.mp3'
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
			$('.player-current-track').text(playlist[currentTrack].artist+' - '+playlist[currentTrack].album+' - '+playlist[currentTrack].title);
		},
		swfPath: 'js/plugins/jplayer/',
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
		player.playCurrent();
	};
	$('.player-next').click(function() {
		player.playNext();
	});

	$('.player-prev').click(function() {
		player.playPrevious();
	});
});