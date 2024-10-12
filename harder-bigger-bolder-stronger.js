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


// export function generateLetters() {
//     let letters = "abcdefghijklmnopqrstuvwxyz";
//     letters = letters.toUpperCase();
//     for (let i = 1; i <= 120; i++) {
//       let letter= '';
//       letter = letters.charAt(Math.floor(Math.random() * letters.length)); 
//       let elem = document.createElement("div");
//       elem.innerHTML = letter;
//       elem.style.fontSize = (i + 10) + 'px'; // 10px is the minimum font size
  
//       if (i <= 40) { // 40 is the number of letters with font-weight: 300
//         elem.style.fontWeight = "300"; //
//       } else if (i <= 80) { // 80 is the number of letters with font-weight: 400
//         elem.style.fontWeight = "400";
//       } else {
//         elem.style.fontWeight = "600";
//       }
//       document.body.append(elem);
      
//     }
//   }
