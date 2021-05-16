# [Hiller Platt](https://hillerplatt.de)

**Hiller Platt ist ein Dialekt unter den unzähligen Varianten der Niederdeutschen Sprache. Einer Sprache, die bis vor etwa 80 Jahren noch überall in Norddeutschland auf dem Land die Alltagssprache war und die bis Ende des 16. Jahrhunderts als Handelssprache im Ostseeraum in Wort und Schrift verwendet wurde.**

Auf dieser Webseite und dem dazugehörigen Buch sind über 5.000 Wörter vom Hiller Platt dokumentiert, um sie als Kulturgut der Nachwelt zu überliefern. Hiller Platt ist nie eine Schriftsprache gewesen. Die Verantwortlichen dieser Website und des Buches haben es gewagt, mit vielen Gedanken hin und her Hiller Platt angemessen zu Papier zu bringen. Dabei stellten sie fest, dass es sogar im Hiller Platt Varianten gibt. Auch die vorliegende Rechtschreibung ist eine Momentaufnahme, ein Versuch, an dem es weiter zu arbeiten gilt.

Mit den Redewendungen und den geschichtlichen Beiträgen samt Fotos findet der Leser mit diesem Wörterbuch und der Webseite einen besonderen kulturellen Schatz aus Hille, der engagiert und liebevoll zusammengetragen wurde.

[Arbeitskreis Plattdeutsch](https://www.altebrennereihille.de/dorf-hille/wi-k%C3%BCet-hiller-platt/):
Hermann Böhne, Annette Borchardt, Karin Childs, Karl-Heinz Hucke, Ewald Kröger, Helmut Möller & Helga Wittenfeld


--------------------------------------


## Fragen & Aufgaben
- Mail-Weiterleitung ist möglich, zB moin at hillerplatt.de
- Lizenzierung der Inhalte? Creative Commons (Namensnennung - Weitergabe unter gleichen Bedingungen) https://creativecommons.org/licenses/by-sa/4.0/deed.de

### Hauptseite
- [ ] Wo gibt es das Buch?

### Wörterbuch
- [ ] Alphabetischer Buchstaben-Separator
- [ ] Unterstützung von ungenauer Suche evtl, via [List.js](https://listjs.com/examples/fuzzy-search/) oder [Fuse.js](https://fusejs.io/demo.html)
- [ ] Erklärung oder Konjugation auf 3. Zeile?
- [ ] ? Favorit-Stern
- [ ] ? Bild → vieeel Arbeit
- [ ] ? Link falls sinnvoll (Brennerei, Moor, Karte, Wikipedia etc.)

### Sprache
- [ ] Hinweise zu Schreibung und Aussprache
- [ ] Grammatik
- [ ] Zahlen & Zeiten
- [ ] Wörter verlinken / Aufnahmen

### Info / über Hille
- [ ] Fotos von früher
- [ ] Chronik
- [ ] Ortsteile
- [ ] Link auf hille.de
- [ ] Sünnematen-Video


--------------------------------------


## Wortliste konvertieren
1. XLSX → CSV per LibreOffice "Speichern als". Field delimiter `Tab`, String delimiter `` (leer)
2. CSV → JSON per https://csvjson.com/csv2json → Headings ändern auf "artikel	plattdeutsch	hochdeutsch"
3. JSON → JS object per https://www.convertonline.io/convert/json-to-js → mit `const wortliste = ` davor speichern


## Aufnahmen
- .flac als Format, ist klein und kompatibel https://caniuse.com/#feat=flac
- Dateinamenbenennung: mit Initialen, Bindestrich und Wort, zB `hw-dat Aai.flac` – unklar, ob Initialen eine gute Idee ist, weil es nicht performant ist, per Javascript zu testen, welche Datei vorhanden ist
- Ein gutes Mikrofon (welches wird genutzt?)
- Aufnahme einfach mit Laptop oder Handy, Aufnahmeprogramm.
- Jedes Wort oder Sprichwort einzeln aufnehmen. Direkt anfangen zu reden, so wenig wie möglich Pause am Anfang und Ende. Aufnahme sofort nach aufgenommenem Wort benennen.
- Mit Artikeln und Pluralversionen aufnehmen.
- Keine Hintergrundgeräusche, Atmen, Schmatzen, Räuspern, etc.
- Raum ohne Hall. Aufnahmen immer im gleichen Raum, gleiche Position
- Immer gleichen Abstand vom Mikrofon, gleiche Lautstärke.
- Drauf achten, dass es laut genug ist. Abgleich mit existierenden Worten, ob die Lautstärke ähnlich ist.
- Lautstärke ist gut, vergleichbar mit Leveln von Videos oder Musik.
