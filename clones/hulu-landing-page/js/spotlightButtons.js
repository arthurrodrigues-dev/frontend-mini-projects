const spotlightContent = document.querySelector('.spotlight-content');
const spotlightChildrens = Array.from(spotlightContent.children)
const spotlightDivsContent = spotlightChildrens.filter(children => children.classList[0] !== 'btns')
const divButtons = spotlightContent.querySelectorAll('.btn');
const buttons = spotlightContent.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        removeClasses(divButtons, 'btn-active');
        button.parentElement.classList.add('btn-active');
    })
})

function removeClasses(array, classe) {
    array.forEach(element => {
        element.classList.remove(classe);
    })
}