const _cards = document.querySelectorAll('.card');
const _restart = document.querySelector('.restart')
let cardsFliped = [];

document.addEventListener('DOMContentLoaded', () => {
    shuffle();
    eventListeners();
})

function eventListeners() {
    _restart.addEventListener('click', () => restartGame());
    
    _cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
            cardsFliped.push(card);
    
            if (cardsFliped.length === 2) {
                verify(cardsFliped);
                cardsFliped = [];
            }
        })
    })
}

function shuffle() {
    _cards.forEach(card => {
        const randomIndex = Math.floor(Math.random() * 16);
        card.style.order = randomIndex;
    });
};

function verify(cardsFliped) {
    if (cardsFliped[0].children[0].src !== cardsFliped[1].children[0].src) {
        setTimeout(() => {
            cardsFliped.forEach(card => card.classList.remove('active'));
        }, 300)

    } 
}

function restartGame() {
    _cards.forEach(card => card.classList.remove('active'));
    shuffle();
}