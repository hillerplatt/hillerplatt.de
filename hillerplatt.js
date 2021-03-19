wortliste.forEach(function(wort) {
	let plattdeutschId = wort.plattdeutsch.replace(/[^a-zA-Z ]/g, '')
	let wortblock = document.createElement('li')
	wortblock.classList.add('col-md-4', 'media')
	wortblock.setAttribute('id', plattdeutschId);

	let block = ''

	// TEMPORÄR: Audio-Abspielfunktion erst für Wortblöcke, die bereits aufgenommen sind. Aktuell alle Worte mit a
	if(wort.plattdeutsch.toLowerCase().startsWith('a')) {
		if(wort.artikel) wort.plattdeutsch = wort.artikel + ' ' + wort.plattdeutsch
		block += '<audio id="' + plattdeutschId + '-audio" src="audio/recorder/hw-' + wort.plattdeutsch + '.flac" preload="none"></audio>'
		block += '<button onclick="document.getElementById(\'' + plattdeutschId + '-audio\').play();" type="button" class="btn btn-primary mr-3 btn-play" aria-label="Abspielen">'
		block += '</button>'
	} else {
		if(wort.artikel) wort.plattdeutsch = wort.artikel + ' ' + wort.plattdeutsch
		block += '<div class="mr-3"></div>'
	}

	block += '<div class="media-body">'
	block += '<h3 class="mt-0 mb-1">' + wort.plattdeutsch + '</h3>'
	block += '<p>' + wort.hochdeutsch + '</p>'
	block += '</div>'

	wortblock.innerHTML = block

	document.getElementById('wortliste').appendChild(wortblock)
})
