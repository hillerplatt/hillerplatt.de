# Daten-Sync für Hiller Platt

**Arbeitsverzeichnis für alle Befehle:** `web/repo` (das Git-Repository). Benötigt werden Python 3 und `openpyxl` (`python3 -m pip install openpyxl`).

## Quellen und erzeugte Dateien

| Ort | Rolle |
| --- | --- |
| `wortliste/Tabelle.xlsx` | Einzige aktuelle Datenquelle. Blatt `Wörterbuch`: A Artikel, B Plattdeutsch, C Hochdeutsch. Blatt `Redewendungen u. Sprachgebrauch`: A Plattdeutsch, B Hochdeutsch. |
| `tools/update_web_data.py` | Liest die Tabelle und erzeugt `wortliste.json`, `wortliste.js`, `wortliste.csv`, `redewendungen.json`, `redewendungen.js` und beide vollständigen Recorder-Listen. Schreibt **nicht** in die Excel-Datei. |
| `tools/generate_todo_lists.py` | Erzeugt die beiden `_todo.txt`-Listen aus den Webdaten und den tatsächlich vorhandenen aktiven `.flac`-Dateien. |
| `tools/check_sync.py` | Vergleicht Quelle, erzeugte Dateien, To-dos und Audioverweise. Fehlende Aufnahmen sind erwartete To-dos und kein Prüffehler. |

Die älteren Dateien in `web/Tabelle.xlsx`, `web/tools` und `web/tmp` sind **keine Quellen** für diesen Sync. Die Skripte in `web/tools` leiten nur noch an die Versionen in `web/repo/tools` weiter. Die vier offensichtlichen Tippfehler wurden auch in der älteren Excel-Kopie bereinigt; ihre Zeilenreihenfolge bleibt anders.

## Schreibweise und Audiovertrag

- Für die Webseite zählt pro Excel-Zelle nur die erste Zeile. Der Generator entfernt `\-`, ersetzt `...` durch `…` sowie `?`, `:` und gerade Apostrophe durch die für bestehende Dateinamen verwendeten Zeichen `︖`, `：` und `’`. Er sortiert mit deutscher Umlaut-Umschreibung unabhängig von der System-Locale.
- Die Werte `plattdeutsch` und `artikel` bestimmen zusammen den **exakten** Audiodateinamen. Leerzeichen, Großschreibung, Interpunktion und Unicode-Zeichen sind relevant. Identitätsfelder mit offensichtlichen Leerzeichenfehlern lassen den Generator abbrechen, statt stillschweigend neue Dateinamen zu erzeugen.
- `audio` in den generierten Daten ist der komplette Dateiname einschließlich `.flac`. Die Website öffnet ihn aus `audio/recorder/` oder `audio/redewendungen/`. Nur Dateien direkt in diesen Ordnern sind aktiv; `outdated/` zählt nicht.
- Wörter haben die Präfixe `ab-` oder `hw-`. Der Generator wählt zuerst eine exakt passende aktive Datei, sonst den Sprecher der bisherigen JSON-Zeile mit demselben Artikel und Stichwort, sonst `hw`. Ein alter Präfix ohne Datei ist möglich und landet im To-do. Für Redewendungen gibt es keinen Präfix.
- Die vollständigen Recorder-Listen enthalten **jede Tabellenzeile**, auch gleiche Stichwörter mit mehreren Bedeutungen. Die `_todo`-Listen enthalten jeden fehlenden Audiodateinamen genau einmal. Sie beziehen sich nur auf fehlende `.flac`-Dateien, da die Webseite `.flac` abspielt. Eine `.wav`-Datei allein erfüllt das To-do nicht.

## Ablauf bei Änderungen

1. `wortliste/Tabelle.xlsx` bearbeiten. Offensichtliche Schreibfehler in der **Quelle** korrigieren, nicht nur in CSV/JSON/Listen. Bei einer geänderten Schreibung entscheiden, ob die alte Aufnahme sprachlich noch stimmt. Das kann kein Skript erkennen.
2. Veraltete Aufnahmen nach `audio/recorder/outdated/` bzw. `audio/redewendungen/outdated/` verschieben. Nur wenn der gesprochene Inhalt unverändert richtig ist, eine Aufnahme auf den neuen exakten Namen umbenennen. Bei neuen Aufnahmen das richtige Sprecherpräfix wählen.
3. Aus `web/repo` ausführen:

   ```bash
   python3 tools/update_web_data.py
   python3 tools/generate_todo_lists.py
   python3 tools/check_sync.py
   node --check hillerplatt.js
   ```

4. Den Git-Diff prüfen: Excel-Änderung, Web-Anzeige, `audio`-Feld, umbenannte/verschobene Dateien und To-dos müssen dieselbe Entscheidung abbilden. Fehlende Einträge gehören in `_todo`; aktive Audiodateien ohne Webverweis meldet `check_sync.py` als „Ungenutzt“.

**Grenze der Prüfung:** Eine vorhandene Datei beweist nur, dass der Dateiname passt. Ob Aussprache oder Inhalt nach einer fachlichen Änderung neu aufgenommen werden muss, muss ein Mensch entscheiden und die alte Datei gegebenenfalls nach `outdated/` verschieben.

## Erkenntnisse vom 26.09.2026

- `Wörterbuch!B345` enthielt `Bass ( in Bass kurm)`. Korrigiert zu `Bass (in Bass kurm)` und in allen abgeleiteten Dateien nachgezogen. Drei weitere eindeutige Leerzeichenfehler in Übersetzungen wurden in der Excel-Quelle bereinigt (`Wörterbuch!C711`, `Wörterbuch!C2040`, `Redewendungen!B171`).
- `nich woar︖` hatte bereits `ab-nich woar︖.flac`, aber in den Webdaten noch `hw` als Sprecher. Die exakte Dateisuche wählt nun `ab`.
- Doppelte Stichwörter mit verschiedenen Bedeutungen sind beabsichtigt. Drei fehlende Stichwörter standen deshalb doppelt im alten Wort-To-do; die neue Liste zählt Audiodateinamen einmal.
- Eine nicht mehr referenzierte, längere Aufnahme zu `Mi döat de Rügge weih.` wurde nach `audio/redewendungen/outdated/` verschoben. Die kurze aktuelle Fassung steht weiterhin im To-do.
- Nach dem Sync: 5.618 Wörter (5.571 verschiedene Audionamen), 226 Sprüche (225 verschiedene Audionamen), davon 157 Wort- und 98 Spruchaufnahmen offen. Diese Zahlen ändern sich mit neuen Daten und Aufnahmen.
