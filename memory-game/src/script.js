const _cards = document.querySelectorAll('.card');

console.log(_cards);

(function shuffle() {
    _cards.forEach(card => {
        const randomIndex = Math.floor(Math.random() * 16);
        card.style.order = randomIndex;
    });
})();

_cards.forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('active'));
})