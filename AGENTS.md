# Hiller Platt: Hinweise für Agents

Vor Änderungen an Wörterbuch, Redewendungen oder Audio `tools/README.md` lesen. Die einzige aktuelle Datenquelle ist `wortliste/Tabelle.xlsx` in diesem Repository. CSV, JSON, JS und Recorder-Listen sind generiert; nicht einzeln korrigieren. Die Dateien unter dem übergeordneten `web/tools` bzw. `web/tmp` sind Altbestand.

Für einen Sync aus diesem Repository nacheinander `python3 tools/update_web_data.py`, `python3 tools/generate_todo_lists.py` und `python3 tools/check_sync.py` ausführen. Danach den Diff einschließlich Audiodateien und To-dos prüfen. Eine existierende Audiodatei bestätigt keinen fachlich korrekten Inhalt: Bei geänderter Aussprache oder Formulierung die Aufnahme manuell beurteilen und gegebenenfalls nach `outdated/` verschieben. Neue Erkenntnisse und Entscheidungen mit konkretem Datum in `tools/README.md` dokumentieren.
