// Wortliste füllen
wortliste.forEach(function(wort) {
	let plattdeutschId = wort.plattdeutsch.replace(/[^a-zA-Z ]/g, '')
	let wortblock = document.createElement('li')
	wortblock.classList.add('col-md-4', 'd-inline-flex', 'p-1')
	wortblock.setAttribute('id', plattdeutschId + ' ' + wort.hochdeutsch);

	let block = ''
	let prefix = ''

	// Präfixe basiert auf Sprecherin
	if(wort.plattdeutsch.localeCompare('i', 'de') < 0) {
		// Helga Wittenfeld: "hw-", Worte A bis H
		prefix = 'hw'
	} else if (wort.plattdeutsch.localeCompare('s', 'de') > 0) {
		// Annette Borchardt: "ab-", Worte S bis Z
		prefix = 'ab'
	}

	// Artikel sind in den Daten separat. Wir sortieren nach Wort, zeigen aber mit Artikel an.
	if(wort.artikel) wort.plattdeutsch = wort.artikel + ' ' + wort.plattdeutsch

	// HTML zusammenbauen
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



// Suchfunktion
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
