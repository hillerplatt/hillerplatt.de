# Hillerplatt Daten-Synchronisation

Dieses Tool dient dazu, die Daten aus der zentralen `wortliste/Tabelle.xlsx` zu bereinigen und automatisch die Dateien für die Web-Anwendung im Ordner `repo/wortliste` zu aktualisieren.

## Vorraussetzungen

Das Tool benötigt Python 3 und die Bibliothek `openpyxl`.
Installation der Abhängigkeit:
```bash
pip install openpyxl
```

## Funktionsweise

Das Skript führt folgende Schritte nacheinander aus:

1.  **Excel-Bereinigung:** In der `Tabelle.xlsx` werden in allen Zellen führende und abschließende Leerzeichen entfernt sowie mehrfache Leerzeichen innerhalb von Texten auf ein einzelnes Leerzeichen reduziert.
2.  **Daten-Abbildung (Wörterbuch):** 
    *   Extrahiert Artikel, Plattdeutsch und Hochdeutsch.
    *   Entfernt Silbentrennungs-Marker (`\-`).
    *   Normalisiert Auslassungspunkte (ersetzt `...` durch `…`).
    *   Sortiert die Liste alphabetisch (fallunabhängig).
    *   Generiert `wortliste.json`, `wortliste.js` und `wortliste.csv`.
3.  **Daten-Abbildung (Redewendungen):**
    *   Extrahiert Plattdeutsch und Hochdeutsch aus dem entsprechenden Blatt.
    *   Führt dieselben Textbereinigungen durch (Auslassungspunkte, Silbentrennung).
    *   Behält die ursprüngliche Reihenfolge der Tabelle bei.
    *   Generiert `redewendungen.json` und `redewendungen.js`.

## Ausführung

Führe das Skript einfach aus dem Hauptverzeichnis des Projekts aus:

```bash
python3 tools/update_web_data.py
```

## Fehlende Audio-Aufnahmen ermitteln (`generate_todo_lists.py`)

Zusätzlich gibt es ein Hilfsskript zum Erzeugen von Recorder-Listen mit fehlenden Audioaufnahmen.

Ausführung:

```bash
python3 tools/generate_todo_lists.py
```

Was erzeugt das Skript:

- Vollständige Listen (jeweils im Ordner `wortliste/RecorderTool`):
    - `Woerterliste.txt` — alle Wörter (sortiert nach deutschem Alphabet)
    - `Redewendungen.txt` — alle Redewendungen (sortiert nach deutschem Alphabet)
- Gefilterte ToDo-Listen (ebenfalls in `wortliste/RecorderTool`):
    - `Woerterliste_todo.txt` — nur Wörter ohne vorhandene Aufnahme (`ab-`/`hw-`)
    - `Redewendungen_todo.txt` — nur Redewendungen ohne Aufnahme

Die Sortierung verwendet die deutsche Kollation (Umlaut-/ß-Fallback).

