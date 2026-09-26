"""Erzeuge Aufnahme-To-dos für Audiodateien, die der Website fehlen."""

import json
import os

from update_web_data import PROJECT_ROOT, RECORDER_TOOL_DIR, WORTLISTE_DIR, full_word, sort_key


def build_lists(words, sayings):
    audio_words = os.path.join(PROJECT_ROOT, "audio", "recorder")
    audio_sayings = os.path.join(PROJECT_ROOT, "audio", "redewendungen")

    # Mehrere Bedeutungen desselben Stichworts teilen sich dieselbe Aufnahme.
    missing_words = {entry["audio"]: full_word(entry) for entry in words
                     if not os.path.isfile(os.path.join(audio_words, entry["audio"]))}
    missing_sayings = {entry["audio"]: entry["plattdeutsch"] for entry in sayings
                       if not os.path.isfile(os.path.join(audio_sayings, entry["audio"]))}
    return {
        "Woerterliste_todo.txt": sorted(missing_words.values(), key=sort_key),
        "Redewendungen_todo.txt": sorted(missing_sayings.values(), key=sort_key),
    }


def generate_todo():
    with open(os.path.join(WORTLISTE_DIR, "wortliste.json"), encoding="utf-8") as file:
        words = json.load(file)
    with open(os.path.join(WORTLISTE_DIR, "redewendungen.json"), encoding="utf-8") as file:
        sayings = json.load(file)
    os.makedirs(RECORDER_TOOL_DIR, exist_ok=True)
    for filename, entries in build_lists(words, sayings).items():
        with open(os.path.join(RECORDER_TOOL_DIR, filename), "w", encoding="utf-8") as file:
            file.write("".join(entry + "\n" for entry in entries))
        print(f"{filename}: {len(entries)} fehlende Aufnahmen")


if __name__ == "__main__":
    generate_todo()
