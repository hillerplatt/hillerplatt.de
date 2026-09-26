// Shuffle function from https://stackoverflow.com/a/12646864
// Creative Commons BY-SA by Laurens Holst
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #333;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 9999;
        font-size: 14px;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function playAudio(filename, kind) {
    const folder = kind === 'redewendungen' ? 'redewendungen' : 'recorder';
    // Der Generator liefert den exakten Dateinamen; URL-Sonderzeichen müssen kodiert werden.
    const audioPath = 'audio/' + folder + '/' + encodeURIComponent(filename);
    const audio = new Audio(audioPath);
    let reported = false;
    const reportMissing = () => {
        if (reported) return;
        reported = true;
        showToast('Noch keine Audiodatei verfügbar.');
        console.warn('Noch keine Audiodatei verfügbar: ' + audioPath);
    };
    audio.onerror = reportMissing;
    audio.play().catch(reportMissing);
}

function makeEntry(entry, kind) {
    const item = document.createElement('li');
    item.classList.add('col-md-4');
    const button = document.createElement('button');
    button.type = 'button';
    button.addEventListener('click', () => playAudio(entry.audio, kind));
    const title = document.createElement('h3');
    title.textContent = kind === 'redewendungen'
        ? entry.plattdeutsch
        : (entry.artikel ? entry.artikel + ' ' : '') + entry.plattdeutsch;
    const translation = document.createElement('p');
    translation.textContent = entry.hochdeutsch;
    button.append(title, translation);
    item.appendChild(button);
    return item;
}

const wortlisteRandom = wortliste.slice();
function zufallsworte() {
    shuffleArray(wortlisteRandom);
    const fragment = document.createDocumentFragment();
    wortlisteRandom.slice(0, 9).forEach(entry => fragment.appendChild(makeEntry(entry, 'woerter')));
    const list = document.getElementById('wortliste-random');
    list.replaceChildren(fragment);
}
zufallsworte();

const wortlisteFragment = document.createDocumentFragment();
wortliste.forEach(entry => wortlisteFragment.appendChild(makeEntry(entry, 'woerter')));
const wortlisteElement = document.getElementById('wortliste');
wortlisteElement.appendChild(wortlisteFragment);

const wordItems = Array.from(wortlisteElement.querySelectorAll('li'));
document.getElementById('search').addEventListener('input', function() {
    const value = this.value.toLocaleLowerCase('de');
    let matches = 0;
    wordItems.forEach(item => {
        const visible = item.textContent.toLocaleLowerCase('de').includes(value);
        item.style.display = visible ? '' : 'none';
        if (visible) matches++;
    });
    document.querySelector('.search-item').textContent = this.value;
    document.getElementById('search-error').style.visibility = matches ? 'hidden' : 'visible';
});

const redewendungenFragment = document.createDocumentFragment();
redewendungen.forEach(entry => redewendungenFragment.appendChild(makeEntry(entry, 'redewendungen')));
document.getElementById('wortliste-redewendungen').appendChild(redewendungenFragment);
