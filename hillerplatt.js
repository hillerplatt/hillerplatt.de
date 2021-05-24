// Shuffle function from https://stackoverflow.com/a/12646864
// Creative Commons BY-SA by Laurens Holst
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Randomisierte Wortliste füllen
wortlisteRandom = wortliste.slice(0)

function zufallsworte() {
	shuffleArray(wortlisteRandom)
	document.getElementById('wortliste-random').innerHTML = ''

	wortlisteRandom.slice(0, 9).forEach(function(wort) {
		let prefix = ''

		// Präfixe basiert auf Sprecherin
		if(wort.plattdeutsch.localeCompare('n', 'de') < 0) {
			// Helga Wittenfeld: "hw-", Worte A bis M
			prefix = 'hw'
		} else if (wort.plattdeutsch.localeCompare('n', 'de') > 0) {
			// Annette Borchardt: "ab-", Worte N bis Z
			prefix = 'ab'
		}

		// Artikel sind in den Daten separat. Wir sortieren nach Wort, zeigen aber mit Artikel an.
		if(wort.artikel) {
			wort.plattdeutschKomplett = wort.artikel + ' ' + wort.plattdeutsch
		} else {
			wort.plattdeutschKomplett = wort.plattdeutsch
		}

		let plattdeutschId = wort.plattdeutschKomplett.replace(/[^0-9a-zA-ZäöüÄÖÜß ]/g, '') + '-random'
		let hochdeutschId = wort.hochdeutsch.replace(/[^0-9a-zA-ZäöüÄÖÜß ]/g, '') + '-random'
		let wortblock = document.createElement('li')
		wortblock.classList.add('col-md-4', 'd-inline-flex', 'p-1')
		wortblock.setAttribute('id', plattdeutschId + ' ' + hochdeutschId);

		let block = ''

		// HTML zusammenbauen
		// Fragezeichen sind in Dateinamen nicht erlaubt
		if(prefix) {
			block += '<button type="button" class="play p-3" onclick="document.getElementById(\'' + plattdeutschId + '-audio\').play();">'
			block += '<audio id="' + plattdeutschId + '-audio" src="audio/recorder/' + prefix + '-' + wort.plattdeutschKomplett.replace('?', '') + '.flac" preload="none"></audio>'
		} else {
			block += '<div class="play play-placeholder p-3">'
		}
		block += '<h3 class="mb-0">' + wort.plattdeutschKomplett + '</h3>'
		block += '<p class="mb-0">' + wort.hochdeutsch + '</p>'
		if(prefix) {
			block += '</button>'
		} else {
			block += '</div>'
		}

		wortblock.innerHTML = block
		document.getElementById('wortliste-random').appendChild(wortblock)
	})
}

zufallsworte()



// Wortliste füllen
wortliste.forEach(function(wort) {
	let prefix = ''

	// Präfixe basiert auf Sprecherin
	if(wort.plattdeutsch.localeCompare('n', 'de') < 0) {
		// Helga Wittenfeld: "hw-", Worte A bis M
		prefix = 'hw'
	} else if (wort.plattdeutsch.localeCompare('n', 'de') > 0) {
		// Annette Borchardt: "ab-", Worte N bis Z
		prefix = 'ab'
	}

	// Artikel sind in den Daten separat. Wir sortieren nach Wort, zeigen aber mit Artikel an.
	if(wort.artikel) {
		wort.plattdeutschKomplett = wort.artikel + ' ' + wort.plattdeutsch
	} else {
		wort.plattdeutschKomplett = wort.plattdeutsch
	}

	let plattdeutschId = wort.plattdeutschKomplett.replace(/[^0-9a-zA-ZäöüÄÖÜß ]/g, '')
	let hochdeutschId = wort.hochdeutsch.replace(/[^0-9a-zA-ZäöüÄÖÜß ]/g, '')
	let wortblock = document.createElement('li')
	wortblock.classList.add('col-md-4', 'd-inline-flex', 'p-1')
	wortblock.setAttribute('id', plattdeutschId + ' ' + hochdeutschId);

	let block = ''

	// HTML zusammenbauen
	// Fragezeichen sind in Dateinamen nicht erlaubt
	if(prefix) {
		block += '<button type="button" class="play p-3" onclick="document.getElementById(\'' + plattdeutschId + '-audio\').play();">'
		block += '<audio id="' + plattdeutschId + '-audio" src="audio/recorder/' + prefix + '-' + wort.plattdeutschKomplett.replace('?', '') + '.flac" preload="none"></audio>'
	} else {
		block += '<div class="play play-placeholder p-3">'
	}
	block += '<h3 class="mb-0">' + wort.plattdeutschKomplett + '</h3>'
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



// Redewendungen füllen
redewendungen.forEach(function(wort) {
	let plattdeutschId = wort.plattdeutsch.replace(/[^0-9a-zA-ZäöüÄÖÜß ]/g, '')
	let hochdeutschId = wort.hochdeutsch.replace(/[^0-9a-zA-ZäöüÄÖÜß ]/g, '')
	let wortblock = document.createElement('li')
	wortblock.classList.add('col-md-4', 'd-inline-flex', 'p-1')
	wortblock.setAttribute('id', plattdeutschId + ' ' + hochdeutschId);

	let block = ''
	let prefix = ''
	// Aktuell keine Präfixe, alles Marie Wiese

	// HTML zusammenbauen
	// Fragezeichen sind in Dateinamen nicht erlaubt
	block += '<button type="button" class="play p-3" onclick="document.getElementById(\'' + plattdeutschId + '-audio\').play();">'
	block += '<audio id="' + plattdeutschId + '-audio" src="audio/redewendungen/' + wort.plattdeutsch.replace('?', '') + '.wav" preload="none"></audio>'
	block += '<h3 class="mb-0">' + wort.plattdeutsch + '</h3>'
	block += '<p class="mb-0">' + wort.hochdeutsch + '</p>'
	block += '</button>'

	wortblock.innerHTML = block
	document.getElementById('wortliste-redewendungen').appendChild(wortblock)
})
