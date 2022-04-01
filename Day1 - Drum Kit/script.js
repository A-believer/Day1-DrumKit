function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; //stops the function from running

    audio.currentTime = 0; //rewinds to the start of the audio

    audio.play(); //play the audio on command

    key.classList.add("playing");

}

function removeTransition (e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);