function build(n) {
    let bricks = 1;
    const tower = document.getElementById('tower');

    const interval = setInterval(() => {
        if (bricks > n) { 
            clearInterval(interval);
            return;
        }
        
        let brick = document.createElement('div'); 
        brick.id = 'brick-' + bricks; 
        if (bricks % 3 === 2) brick.dataset.foundation = true; 

        tower.appendChild(brick);
        bricks++;
    }, 100);
}

function repair(...ids) {
    ids.forEach(id => {
        const brick = document.getElementById(id);
        if (brick) {
            if (brick.dataset.foundation) {
                brick.dataset.repaired = 'in progress'; 
            } else {
                brick.dataset.repaired = true;
            }
        }
    });
}

function destroy() {
    const bricks = document.querySelectorAll('div[id^="brick-"]');
    if (bricks.length > 0) {
        const lastBrick = bricks[bricks.length - 1]; 
        lastBrick.remove();
    }
}
