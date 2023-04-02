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
	const wortlisteRandomFragment = document.createDocumentFragment()

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

		wortblock.classList.add('col-md-4')

		let block = ''

		// HTML zusammenbauen
		// Fragezeichen sind in Dateinamen nicht erlaubt
		block += '<button type="button" onclick="document.getElementById(\'' + plattdeutschId + '-audio\').play();">'
		block += '<audio id="' + plattdeutschId + '-audio" src="audio/recorder/' + prefix + '-' + wort.plattdeutschKomplett.replace('?', '') + '.flac" preload="none"></audio>'
		block += '<h3>' + wort.plattdeutschKomplett + '</h3>'
		block += '<p>' + wort.hochdeutsch + '</p>'
		block += '</button>'

		wortblock.innerHTML = block
		wortlisteRandomFragment.appendChild(wortblock)
	})

	document.getElementById('wortliste-random').innerHTML = ''
	document.getElementById('wortliste-random').appendChild(wortlisteRandomFragment)
}

zufallsworte()



// Wortliste füllen
const wortlisteFragment = document.createDocumentFragment()

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
	wortblock.classList.add('col-md-4')

	let block = ''

	// HTML zusammenbauen
	// Fragezeichen sind in Dateinamen nicht erlaubt
	block += '<button type="button" onclick="document.getElementById(\'' + plattdeutschId + '-audio\').play();">'
	block += '<audio id="' + plattdeutschId + '-audio" src="audio/recorder/' + prefix + '-' + wort.plattdeutschKomplett.replace('?', '') + '.flac" preload="none"></audio>'
	block += '<h3>' + wort.plattdeutschKomplett + '</h3>'
	block += '<p>' + wort.hochdeutsch + '</p>'
	block += '</button>'

	wortblock.innerHTML = block
	wortlisteFragment.appendChild(wortblock)
})

document.getElementById('wortliste').appendChild(wortlisteFragment)


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
const redewendungenFragment = document.createDocumentFragment()

redewendungen.forEach(function(wort) {
	let plattdeutschId = wort.plattdeutsch.replace(/[^0-9a-zA-ZäöüÄÖÜß ]/g, '')
	let hochdeutschId = wort.hochdeutsch.replace(/[^0-9a-zA-ZäöüÄÖÜß ]/g, '')
	let wortblock = document.createElement('li')
	wortblock.classList.add('col-md-4')

	let block = ''
	let prefix = ''
	// Aktuell keine Präfixe, alles Marie Wiese

	// HTML zusammenbauen
	// Fragezeichen sind in Dateinamen nicht erlaubt
	block += '<button type="button" onclick="document.getElementById(\'' + plattdeutschId + '-audio\').play();">'
	block += '<audio id="' + plattdeutschId + '-audio" src="audio/redewendungen/' + wort.plattdeutsch.replace('?', '') + '.wav" preload="none"></audio>'
	block += '<h3>' + wort.plattdeutsch + '</h3>'
	block += '<p>' + wort.hochdeutsch + '</p>'
	block += '</button>'

	wortblock.innerHTML = block
	redewendungenFragment.appendChild(wortblock)
})

document.getElementById('wortliste-redewendungen').appendChild(redewendungenFragment)