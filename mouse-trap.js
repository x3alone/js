
let containerBox; 
let isTrapped = true; 

export const createCircle = () => {
    document.body.addEventListener('click', (e) => createElementCircle(e));
};

const createElementCircle = (event) => {
    const newCircle = document.createElement('div');
    newCircle.className = 'circle';
    newCircle.style.background = 'white';
    newCircle.style.position = 'absolute'; 
    newCircle.style.top = event.clientY + 'px';
    newCircle.style.left = event.clientX + 'px';
    
    document.body.appendChild(newCircle);
    moveCircle(newCircle);
};

export const moveCircle = (newCircle) => {
    document.body.addEventListener('mousemove', (e) => {
        if (isTrapped) {
            newCircle.style.top = e.clientY + 'px';
            newCircle.style.left = e.clientX + 'px';

            if (
                e.clientX >= containerBox.getBoundingClientRect().left + 25 &&
                e.clientX <= containerBox.getBoundingClientRect().right - 25 &&
                e.clientY >= containerBox.getBoundingClientRect().top + 25 &&
                e.clientY <= containerBox.getBoundingClientRect().bottom - 25
            ) {
                newCircle.style.background = 'var(--purple)';
                isTrapped = false; 
            }
        }
    });
};

export const setBox = () => {
    containerBox = document.createElement('div');
    containerBox.className = 'box';
    containerBox.style.position = 'absolute';
    containerBox.style.top = '50%'; 
    containerBox.style.left = '50%'; 
    containerBox.style.transform = 'translate(-50%, -50%)';
    containerBox.style.width = '200px'; 
    containerBox.style.height = '200px'; 
    document.body.appendChild(containerBox);
};
