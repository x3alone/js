export function generateLetters() {
    const container = document.getElementById('letter-container'); 
    const totalLetters = 120;

    for (let i = 0; i < totalLetters; i++) {
        const letterDiv = document.createElement('div');

        const letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        letterDiv.textContent = letter;

        const fontSize = 11 + Math.floor((i / totalLetters) * 119);
        letterDiv.style.fontSize = fontSize + 'px';

        if (i < totalLetters / 3) {
            letterDiv.style.fontWeight = '300';
        } else if (i < (totalLetters * 2) / 3) {
            letterDiv.style.fontWeight = '400'; 
        } else {
            letterDiv.style.fontWeight = '600';
        }

        container.appendChild(letterDiv);
    }
}

generateLetters();
