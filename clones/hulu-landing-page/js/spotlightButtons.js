const spotlightContent = document.querySelector('.spotlight-content');
const spotlightChildrens = Array.from(spotlightContent.children)
const spotlightDivsContent = spotlightChildrens.filter(children => children.classList[0] !== 'btns')
const divButtons = spotlightContent.querySelectorAll('.btn');
const buttons = spotlightContent.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonDiv = button.parentElement;
        const buttonId = button.getAttribute('id');
        styleButton(buttonDiv)

        spotlightDivsContent
            .filter(div => div.classList[0] !== buttonId)
            .forEach(div => {
                if (!div.classList.contains('inactive')) div.classList.add('inactive')
            })
        
        spotlightDivsContent.filter(div => div.classList[0] === buttonId)[0].classList.remove('inactive');
    })
})


function removeClasses(array, classe) {
    array.forEach(element => element.classList.remove(classe))
}

function addClasses(array, classe) {
    array.forEach(element => element.classList.add(classe))
}

function addClass(element, classe) {
    element.classList.add(classe);
}

function styleButton(button) {
    removeClasses(divButtons, 'btn-active');
    addClass(button, 'btn-active');
}