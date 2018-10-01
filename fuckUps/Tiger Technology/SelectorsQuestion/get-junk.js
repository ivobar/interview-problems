function getJunk() {
    let elements = document.querySelectorAll('div[junk="1"]');
    let trash = document.getElementsByName('trash')[0];
    for (let element of elements) {
        trash.appendChild(element);
    }
}