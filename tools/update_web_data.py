import openpyxl
import json
import csv
import os
import re
import locale

# Konfiguration
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))
WORTLISTE_DIR = os.path.join(PROJECT_ROOT, "wortliste")
TABELLE_SRC = os.path.join(WORTLISTE_DIR, "Tabelle-src.xlsx")
TABELLE_PATH = os.path.join(WORTLISTE_DIR, "Tabelle.xlsx")
RECORDER_TOOL_DIR = os.path.join(WORTLISTE_DIR, "RecorderTool")
AUDIO_RECORDER = os.path.join(PROJECT_ROOT, "audio/recorder")
AUDIO_RED = os.path.join(PROJECT_ROOT, "audio/redewendungen")

GERMAN_SORT_TRANS = str.maketrans({
    "ä": "ae",
    "ö": "oe",
    "ü": "ue",
    "Ä": "ae",
    "Ö": "oe",
    "Ü": "ue",
    "ß": "ss"
})

try:
    locale.setlocale(locale.LC_COLLATE, "de_DE.UTF-8")
except locale.Error:
    try:
        locale.setlocale(locale.LC_COLLATE, "de_DE")
    except locale.Error:
        pass

def sort_key(value):
    value = (value or "").lower()
    try:
        return locale.strxfrm(value)
    except Exception:
        return value.translate(GERMAN_SORT_TRANS)

def clean_whitespace_excel(val):
    """Bereinigt Whitespace für Excel: Erhält Zeilenumbrüche, reduziert aber mehrfache Leerzeichen in Zeilen."""
    if isinstance(val, str):
        lines = val.splitlines()
        cleaned_lines = []
        for line in lines:
            # Reduziere mehrfache Leerzeichen/Tabs innerhalb einer Zeile auf eines
            cleaned_line = re.sub(r'[ \t]+', ' ', line).strip()
            if cleaned_line or len(lines) == 1: # Behalte leere Zeilen nur wenn gewollt, hier eher nicht
                 cleaned_lines.append(cleaned_line)
        return "\n".join(cleaned_lines).strip()
    return val

def clean_content_web(val):
    """Extrahiert für die Web-Version nur die erste Zeile und bereinigt Sonderzeichen."""
    if val is None: return ""
    if isinstance(val, str):
        # Nur die erste Zeile nehmen (für deklinierte Verben)
        val = val.splitlines()[0]
        
        # Silbentrennungs-Marker \- entfernen
        val = val.replace("\\-", "")
        # Auslassungspunkte auf das Zeichen … (U+2026) normalisieren
        val = val.replace("...", "…")
        
        # Audio-Kompatibilität
        val = val.replace("?", "︖").replace(":", "：").replace("'", "’").replace("`", "’")
        
        return val.strip()
    return str(val).strip()

def get_prefix(plattdeutsch, artikel, existing_prefixes):
    """Ermittelt den Sprecher-Präfix. Priorität: 1. Existierende Datei, 2. Altes JSON, 3. Standard 'hw'."""
    full_p = f"{artikel} {plattdeutsch}" if artikel else plattdeutsch
    clean_p = full_p.replace('?', '').replace('︖', '')
    
    if os.path.exists(os.path.join(AUDIO_RECORDER, f"ab-{clean_p}.flac")): return "ab"
    if os.path.exists(os.path.join(AUDIO_RECORDER, f"hw-{clean_p}.flac")): return "hw"
    if plattdeutsch in existing_prefixes: return existing_prefixes[plattdeutsch]
    return "hw"

def get_existing_prefixes():
    old_json = os.path.join(WORTLISTE_DIR, "wortliste.json")
    prefix_map = {}
    if os.path.exists(old_json):
        try:
            with open(old_json, "r", encoding="utf-8") as f:
                data = json.load(f)
                for entry in data:
                    prefix_map[entry['plattdeutsch']] = entry['sprecher']
        except: pass
    return prefix_map

def sync_excel_from_src():
    """Stellt die Struktur aus src wieder her und bereinigt sie sauber."""
    print(f"Lade {TABELLE_SRC} und bereinige nach {TABELLE_PATH}...")
    wb = openpyxl.load_workbook(TABELLE_SRC)
    for sheet in wb.worksheets:
        for row in sheet.iter_rows():
            for cell in row:
                if cell.value is not None:
                    cell.value = clean_whitespace_excel(cell.value)
    wb.save(TABELLE_PATH)
    return wb

def main():
    if not os.path.exists(TABELLE_PATH):
        print(f"Fehler: {TABELLE_PATH} nicht gefunden.")
        return

    # 1. Excel bereinigen (direkt in Tabelle.xlsx)
    wb = openpyxl.load_workbook(TABELLE_PATH)
    print(f"Bereinige Whitespaces in {TABELLE_PATH} (mehrzeilig bleibt erhalten)...")
    for sheet in wb.worksheets:
        for row in sheet.iter_rows():
            for cell in row:
                if cell.value is not None:
                    cell.value = clean_whitespace_excel(cell.value)
    wb.save(TABELLE_PATH)
    
    # 2. Altbestand-Präfixe laden
    existing_prefixes = get_existing_prefixes()
    
    # 3. Wortliste verarbeiten (Web-Extraktion: Nur 1. Zeile)
    sheet_w = wb["Wörterbuch"]
    wortliste = []
    for row in sheet_w.iter_rows(min_row=2, values_only=True):
        if not row[1] and not row[2]:
            continue

        p_web = clean_content_web(row[1])
        art_web = clean_content_web(row[0])

        wortliste.append({
            "artikel": art_web,
            "plattdeutsch": p_web,
            "hochdeutsch": clean_content_web(row[2]),
            "sprecher": get_prefix(p_web, art_web, existing_prefixes)
        })
    wortliste.sort(key=lambda x: sort_key(x["plattdeutsch"]))

    # 4. Redewendungen verarbeiten
    sheet_r = wb["Redewendungen u. Sprachgebrauch"]
    redewendungen = []
    for row in sheet_r.iter_rows(min_row=2, values_only=True):
        if not row[0]:
            continue
        p = clean_content_web(row[0])
        h = clean_content_web(row[1])
        redewendungen.append({"plattdeutsch": p, "hochdeutsch": h})

    redewendungen.sort(key=lambda x: sort_key(x["plattdeutsch"]))

    # 5. Web-Dateien speichern
    os.makedirs(WORTLISTE_DIR, exist_ok=True)
    with open(os.path.join(WORTLISTE_DIR, "wortliste.json"), "w", encoding="utf-8") as f:
        json.dump(wortliste, f, ensure_ascii=False, indent=2)
    with open(os.path.join(WORTLISTE_DIR, "wortliste.js"), "w", encoding="utf-8") as f:
        f.write("const wortliste = ")
        json.dump(wortliste, f, ensure_ascii=False)
    with open(os.path.join(WORTLISTE_DIR, "wortliste.csv"), "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["artikel", "plattdeutsch", "hochdeutsch", "sprecher"])
        writer.writeheader()
        writer.writerows(wortliste)
    with open(os.path.join(WORTLISTE_DIR, "redewendungen.json"), "w", encoding="utf-8") as f:
        json.dump(redewendungen, f, ensure_ascii=False, indent=4)
    with open(os.path.join(WORTLISTE_DIR, "redewendungen.js"), "w", encoding="utf-8") as f:
        f.write("const redewendungen = ")
        json.dump(redewendungen, f, ensure_ascii=False, indent=4)

    os.makedirs(RECORDER_TOOL_DIR, exist_ok=True)
    with open(os.path.join(RECORDER_TOOL_DIR, "Woerterliste.txt"), "w", encoding="utf-8") as f:
        for entry in wortliste:
            full_p = f"{entry['artikel']} {entry['plattdeutsch']}" if entry['artikel'] else entry['plattdeutsch']
            f.write(full_p + "\n")
    with open(os.path.join(RECORDER_TOOL_DIR, "Redewendungen.txt"), "w", encoding="utf-8") as f:
        for entry in redewendungen:
            f.write(entry['plattdeutsch'] + "\n")

    print("\nErfolg! Tabelle.xlsx wurde korrekt bereinigt (mehrzeilig erhalten).")
    print("Web-Dateien enthalten nur die jeweils erste Zeile.")
    print("RecorderTool-Dateien wurden ebenfalls aktualisiert.")

if __name__ == "__main__":
    main()
