wortliste.forEach(function(wort) {
	let plattdeutschId = wort.plattdeutsch.replace(/[^a-zA-Z ]/g, '')
	let wortblock = document.createElement('li')
	wortblock.classList.add('col-md-4')
	wortblock.setAttribute('id', plattdeutschId + ' ' + wort.hochdeutsch);

	let block = '<div class="d-inline-flex p-2">'

	// TEMPORÄR: Audio-Abspielfunktion erst für Wortblöcke, die bereits aufgenommen sind. Aktuell alle Worte mit a, w und z
	if (wort.plattdeutsch.toLowerCase().startsWith('a') ||
		wort.plattdeutsch.toLowerCase().startsWith('ä')) {
		// Helga Wittenfeld: "hw-"
		if(wort.artikel) wort.plattdeutsch = wort.artikel + ' ' + wort.plattdeutsch
		block += '<audio id="' + plattdeutschId + '-audio" src="audio/recorder/hw-' + wort.plattdeutsch + '.flac" preload="none"></audio>'
		block += '<button onclick="document.getElementById(\'' + plattdeutschId + '-audio\').play();" type="button" class="btn btn-primary btn-play me-3" aria-label="Abspielen">'
		block += '</button>'
	} else if (wort.plattdeutsch.toLowerCase().startsWith('t') ||
		wort.plattdeutsch.toLowerCase().startsWith('u') ||
		wort.plattdeutsch.toLowerCase().startsWith('ü') ||
		wort.plattdeutsch.toLowerCase().startsWith('v') ||
		wort.plattdeutsch.toLowerCase().startsWith('w') ||
		wort.plattdeutsch.toLowerCase().startsWith('z')) {
		// Annette Borchardt: "ab-"
		if(wort.artikel) wort.plattdeutsch = wort.artikel + ' ' + wort.plattdeutsch
		block += '<audio id="' + plattdeutschId + '-audio" src="audio/recorder/ab-' + wort.plattdeutsch + '.flac" preload="none"></audio>'
		block += '<button onclick="document.getElementById(\'' + plattdeutschId + '-audio\').play();" type="button" class="btn btn-primary btn-play me-3" aria-label="Abspielen">'
		block += '</button>'
	} else {
		// Noch keine Aufnahme
		if(wort.artikel) wort.plattdeutsch = wort.artikel + ' ' + wort.plattdeutsch
		block += '<div class="btn-placeholder me-3"></div>'
	}

	block += '<div>'
	block += '<h3 class="mb-0">' + wort.plattdeutsch + '</h3>'
	block += '<p>' + wort.hochdeutsch + '</p>'
	block += '</div>'
	block += '</div>'

	wortblock.innerHTML = block

	document.getElementById('wortliste').appendChild(wortblock)
})



var search = function() {
	var value = $(this).val().toLowerCase()

	if(value.length != 1) { // Nur mit mindestens 2 Buchstaben suchen
		// Auf Basis der Suche die Wörter zeigen oder verstecken
		var find = $('#wortliste li').filter(function() {
			return this.id.toLowerCase().match(value)
		})
		if (find.length) { // Gibt Suchergebnisse
			$('#search-error').css('visibility', 'hidden')
			$('#wortliste li').hide()
			find.show()
		} else { // Keine Suchergebnisse
			$('.search-item').text(value)
			$('#search-error').css('visibility', 'visible')
		}
	}
}

$('#search').keyup(search).keyup()
