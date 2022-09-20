function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) return; // stop function from running when no associate keycode press
    
    audio.currentTime = 0; // to rewind from the start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if not transform
    this.classList.remove('playing');
}

const key = document.querySelectorAll('.key');
key.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);