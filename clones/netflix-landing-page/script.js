const _questions = document.querySelectorAll('.question-text');

_questions.forEach(question => {
    question.addEventListener('click', () => question.nextElementSibling.classList.toggle('active'));
})