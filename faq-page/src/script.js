const _questions = document.querySelectorAll('.question');

_questions.forEach(_question => {
    _question.addEventListener('click', () => {
        _question.parentElement.classList.toggle('active');
    })
})