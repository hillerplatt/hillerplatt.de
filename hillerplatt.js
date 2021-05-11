wortliste.forEach(function(wort) {
	let plattdeutschId = wort.plattdeutsch.replace(/[^a-zA-Z ]/g, '')
	let wortblock = document.createElement('li')
	wortblock.classList.add('col-md-4', 'd-inline-flex', 'p-1')
	wortblock.setAttribute('id', plattdeutschId + ' ' + wort.hochdeutsch);

	let block = ''
	let prefix = ''

	// TEMPORÄR: Audio-Abspielfunktion erst für Wortblöcke, die bereits aufgenommen sind. Aktuell alle Worte mit a, w und z
	if (wort.plattdeutsch.toLowerCase().startsWith('a') ||
		wort.plattdeutsch.toLowerCase().startsWith('ä')) {
		// Helga Wittenfeld: "hw-"
		prefix = 'hw'
	} else if (wort.plattdeutsch.toLowerCase().startsWith('t') ||
		wort.plattdeutsch.toLowerCase().startsWith('u') ||
		wort.plattdeutsch.toLowerCase().startsWith('ü') ||
		wort.plattdeutsch.toLowerCase().startsWith('v') ||
		wort.plattdeutsch.toLowerCase().startsWith('w') ||
		wort.plattdeutsch.toLowerCase().startsWith('z')) {
		// Annette Borchardt: "ab-"
		prefix = 'ab'
	}

	if(wort.artikel) wort.plattdeutsch = wort.artikel + ' ' + wort.plattdeutsch

	if(prefix) {
		block += '<button type="button" class="play p-3" onclick="document.getElementById(\'' + plattdeutschId + '-audio\').play();">'
		block += '<audio id="' + plattdeutschId + '-audio" src="audio/recorder/' + prefix + '-' + wort.plattdeutsch + '.flac" preload="none"></audio>'
	} else {
		block += '<div class="play play-placeholder p-3">'
	}
	block += '<h3 class="mb-0">' + wort.plattdeutsch + '</h3>'
	block += '<p class="mb-0">' + wort.hochdeutsch + '</p>'
	if(prefix) {
		block += '</button>'
	} else {
		block += '</div>'
	}

	wortblock.innerHTML = block

	document.getElementById('wortliste').appendChild(wortblock)
})


document.querySelector('#search').addEventListener('keyup', function() {
	var value = this.value.toLowerCase()

	// Erst alle Wörter verstecken
	document.querySelectorAll('#wortliste li').forEach(el => el.style.setProperty('display', 'none', 'important'))

	// Auf Basis der Suche die Wörter zeigen
	Array.from(document.querySelectorAll('#wortliste li'))
		.filter(el => el.id.toLowerCase().match(value))
		.forEach(el => el.style.display = null)

	// Suchmeldung anfangs verstecken
	document.querySelector('#search-error').style.visibility = 'hidden'

	// Keine Suchergebnisse (leere Liste) → Suchmeldung anzeigen
	if(document.querySelector('#wortliste').offsetHeight === 0) {
		document.querySelector('.search-item').textContent = value
		document.querySelector('#search-error').style.visibility = 'visible'
	}
})
