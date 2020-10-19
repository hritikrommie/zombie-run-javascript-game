let score = 0;
let cross = true;

document.onkeydown = (e) => {
    console.log(e);
    if (e.keyCode === 38) {
        const char1 = document.querySelector('.character');
        char1.classList.add('jump');
        setTimeout(() => {
            char1.classList.remove('jump');
        }, 700);
    }
    if (e.keyCode === 39) {
        const char1 = document.querySelector('.character');
        let cx = parseInt(window.getComputedStyle(char1, null).getPropertyValue('left'));
        char1.style.left = cx + 112 + "px";
    }
    if (e.keyCode == 37) {
        const char1 = document.querySelector('.character');
        let cx = parseInt(window.getComputedStyle(char1, null).getPropertyValue('left'));
        char1.style.left = cx - 112 + "px";
    }
};

setInterval(() => {
    const char1 = document.querySelector('.character');
    const gameover = document.querySelector('.reset');
    const enemy1 = document.querySelector('.enemy');

    let cx = parseInt(window.getComputedStyle(char1, null).getPropertyValue('left'));
    let cy = parseInt(window.getComputedStyle(char1, null).getPropertyValue('top'));

    let ex = parseInt(window.getComputedStyle(enemy1, null).getPropertyValue('left'));
    let ey = parseInt(window.getComputedStyle(enemy1, null).getPropertyValue('top'));

    let xdist = Math.abs(cx - ex);
    let ydist = Math.abs(cy - ey);
    document.querySelector('.max-score').innerHTML = `Highest Score : ${localStorage.getItem('score')}`;
    console.log(xdist, ydist);
    if(localStorage.getItem('score') <score){
        localStorage.setItem('score',score);
        
    }
    if (xdist < 93 && ydist < 90) {
        cross=false;
        gameover.style.visibility = 'visible';
        document.querySelector('.max-score').innerHTML = `Highest Score : ${localStorage.getItem('score')}`;
        const menu = document.querySelector('.reset');
        
        menu.addEventListener('click', (e) => {
            console.log(e);
            if(e.target.className==='menu'){
                location.reload();
            }
        });
        enemy1.classList.remove('enemyani');
        document.querySelector('.show').innerHTML+=`<span>${score}</span>`;
    }
    else if (cross) {
        score += 1;
        updatescore(score);
    }

}, 10);

function updatescore(score) {
    const scoree = document.querySelector('.score');
    scoree.innerHTML = `<p>Score : ${score}`;
}
