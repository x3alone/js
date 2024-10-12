export function compose() {
    document.addEventListener("keydown", (event) => {
        const key = event.key;
        const eventCode = event.keyCode;

        if (key >= 'a' && key <= 'z') {
            const note = document.createElement("div");
            note.classList.add("note");
            
            let color = "#" + "99" + eventCode.toString(16).padStart(4, '0');
            note.style.backgroundColor = color;

            note.textContent = key; 
            document.body.appendChild(note);
        } else if (event.key === "Backspace") {
            const notes = document.querySelectorAll(".note");
            if (notes.length > 0) {
                notes[notes.length - 1].remove(); 
            }
        } else if (event.key === "Escape") {
            document.querySelectorAll(".note").forEach(note => note.remove());
        }
    });
}
