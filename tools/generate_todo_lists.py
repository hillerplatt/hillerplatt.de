import json
import os
import locale

# Konfiguration
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))
WORTLISTE_JSON = os.path.join(PROJECT_ROOT, "wortliste/wortliste.json")
RED_JSON = os.path.join(PROJECT_ROOT, "wortliste/redewendungen.json")
RECORDER_TOOL_DIR = os.path.join(PROJECT_ROOT, "wortliste", "RecorderTool")
AUDIO_RECORDER = os.path.join(PROJECT_ROOT, "audio/recorder")
AUDIO_RED = os.path.join(PROJECT_ROOT, "audio/redewendungen")

OUTPUT_WORTLISTE = "Woerterliste.txt"
OUTPUT_RED = "Redewendungen.txt"

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

def check_file_exists(directory, filename_no_ext):
    """Prüft, ob eine Audio-Datei mit beliebigem unterstütztem Format existiert."""
    for ext in ['.flac', '.wav', '.mp3']:
        if os.path.exists(os.path.join(directory, filename_no_ext + ext)):
            return True
    return False


def generate_todo():
    # 1. Wortliste verarbeiten
    print(f"Lese {WORTLISTE_JSON}...")
    with open(WORTLISTE_JSON, "r", encoding="utf-8") as f:
        wortliste = json.load(f)

    full_words = []
    missing_words = []
    for entry in wortliste:
        p = entry['plattdeutsch']
        a = entry.get('artikel', '')
        full_p = f"{a} {p}".strip() if a else p

        # Name für Dateisystem/JS (Standard-Fragezeichen werden von hillerplatt.js entfernt)
        # Die speziellen ︖ bleiben aber erhalten!
        clean_name = full_p.replace('?', '')

        full_words.append(full_p)

        # Prüfen, ob IRGENDEINE Aufnahme (ab- oder hw-) existiert
        has_ab = check_file_exists(AUDIO_RECORDER, f"ab-{clean_name}")
        has_hw = check_file_exists(AUDIO_RECORDER, f"hw-{clean_name}")

        if not has_ab and not has_hw:
            # Der Ziel-Dateiname (Rest nach dem Präfix hw-)
            # Dies ist gleichzeitig der vorzulesende String.
            missing_words.append(clean_name)

    # Sortieren
    full_words.sort(key=sort_key)
    missing_words.sort(key=sort_key)

    os.makedirs(RECORDER_TOOL_DIR, exist_ok=True)
    with open(os.path.join(RECORDER_TOOL_DIR, OUTPUT_WORTLISTE), "w", encoding="utf-8") as f:
        for word in full_words:
            f.write(word + "\n")
    with open(os.path.join(RECORDER_TOOL_DIR, OUTPUT_WORTLISTE.replace('.txt', '_todo.txt')), "w", encoding="utf-8") as f:
        for word in missing_words:
            f.write(word + "\n")

    print(f"Erfolg: {len(missing_words)} Ziel-Dateinamen in {os.path.join(RECORDER_TOOL_DIR, OUTPUT_WORTLISTE.replace('.txt','_todo.txt'))} gespeichert.")

    # 2. Redewendungen verarbeiten
    print(f"Lese {RED_JSON}...")
    with open(RED_JSON, "r", encoding="utf-8") as f:
        redewendungen = json.load(f)

    full_red = []
    missing_red = []
    for entry in redewendungen:
        p = entry['plattdeutsch']
        clean_name = p.replace('?', '')

        full_red.append(p)

        if not check_file_exists(AUDIO_RED, clean_name):
            # Ziel-Dateiname entspricht exakt dem plattdeutsch-String
            missing_red.append(clean_name)

    full_red.sort(key=sort_key)
    missing_red.sort(key=sort_key)

    with open(os.path.join(RECORDER_TOOL_DIR, OUTPUT_RED), "w", encoding="utf-8") as f:
        for red in full_red:
            f.write(red + "\n")
    with open(os.path.join(RECORDER_TOOL_DIR, OUTPUT_RED.replace('.txt', '_todo.txt')), "w", encoding="utf-8") as f:
        for red in missing_red:
            f.write(red + "\n")

    print(f"Erfolg: {len(missing_red)} fehlende Redewendungen in {os.path.join(RECORDER_TOOL_DIR, OUTPUT_RED.replace('.txt','_todo.txt'))} gespeichert.")


if __name__ == "__main__":
    generate_todo()
