const pauseBtn = document.querySelector('.pause-btn');
const video = document.querySelector('video');

pauseBtn.addEventListener('click', (e) => {
    const icon = pauseBtn.querySelector('i')
    icon.classList.toggle('bx-pause');
    icon.classList.toggle('bxs-right-arrow');
    if (e.target.classList[1] === 'bxs-right-arrow') {
        video.pause();
        return;
    }
    video.play();
})