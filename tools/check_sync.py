"""Prüfe, ob Excel, Webdaten, Recorder-Listen und Audioverweise zusammenpassen."""

import csv
import json
from pathlib import Path

from generate_todo_lists import build_lists
from update_web_data import PROJECT_ROOT, RECORDER_TOOL_DIR, WORTLISTE_DIR, build_data, full_word, sort_key


ROOT = Path(PROJECT_ROOT)
DATA = Path(WORTLISTE_DIR)
LISTS = Path(RECORDER_TOOL_DIR)


def check_equal(path, expected, problems):
    actual = path.read_text(encoding="utf-8")
    if actual != expected:
        problems.append(f"Veraltet oder abweichend: {path.relative_to(ROOT)}")


def main():
    problems = []
    words, sayings = build_data()
    for name, expected in (("wortliste.json", words), ("redewendungen.json", sayings)):
        try:
            actual = json.loads((DATA / name).read_text(encoding="utf-8"))
            if actual != expected:
                problems.append(f"Veraltet oder abweichend: wortliste/{name}")
        except (OSError, ValueError) as error:
            problems.append(f"Nicht lesbar: wortliste/{name}: {error}")
    for name, variable, expected in (("wortliste.js", "wortliste", words),
                                     ("redewendungen.js", "redewendungen", sayings)):
        try:
            content = (DATA / name).read_text(encoding="utf-8")
            actual = json.loads(content.removeprefix(f"const {variable} = "))
            if not content.startswith(f"const {variable} = ") or actual != expected:
                problems.append(f"Veraltet oder abweichend: wortliste/{name}")
        except (OSError, ValueError) as error:
            problems.append(f"Nicht lesbar: wortliste/{name}: {error}")
    try:
        with (DATA / "wortliste.csv").open(encoding="utf-8", newline="") as file:
            actual = list(csv.DictReader(file))
        if actual != words:
            problems.append("Veraltet oder abweichend: wortliste/wortliste.csv")
    except OSError as error:
        problems.append(f"Nicht lesbar: wortliste/wortliste.csv: {error}")

    full_words = sorted((full_word(entry) for entry in words), key=sort_key)
    expected_lists = {
        "Woerterliste.txt": full_words,
        "Redewendungen.txt": [entry["plattdeutsch"] for entry in sayings],
        **build_lists(words, sayings),
    }
    for name, entries in expected_lists.items():
        try:
            check_equal(LISTS / name, "".join(entry + "\n" for entry in entries), problems)
        except OSError as error:
            problems.append(f"Nicht lesbar: wortliste/RecorderTool/{name}: {error}")

    for kind, entries in (("recorder", words), ("redewendungen", sayings)):
        names = {}
        for entry in entries:
            names.setdefault(entry["audio"], set()).add(
                full_word(entry) if kind == "recorder" else entry["plattdeutsch"])
        for filename, labels in names.items():
            if len(labels) > 1:
                problems.append(f"Kollision verschiedener Stichwörter: audio/{kind}/{filename}: {labels}")
        directory = ROOT / "audio" / kind
        present = {path.name for path in directory.glob("*.flac")}
        missing = set(names) - present
        unused = present - set(names)
        print(f"{kind}: {len(names)} eindeutige Verweise, {len(missing)} fehlende .flac, "
              f"{len(unused)} ungenutzte .flac")
        for name in sorted(unused):
            print(f"  Ungenutzt: audio/{kind}/{name}")

    if problems:
        for problem in problems:
            print(f"FEHLER: {problem}")
        return 1
    print("Sync konsistent; fehlende Aufnahmen stehen in den _todo-Listen.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
