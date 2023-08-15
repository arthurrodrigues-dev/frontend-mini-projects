const spotlightContent = document.querySelector('.spotlight-content');
const spotlightChildrens = Array.from(spotlightContent.children)
const spotlightDivsContent = spotlightChildrens.filter(children => children.classList[0] !== 'btns')
const divButtons = spotlightContent.querySelectorAll('.btn');
const buttons = spotlightContent.querySelectorAll('button');
const spotlightBackground = document.querySelector('.spotlight-background') 

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonDiv = button.parentElement;
        const buttonId = button.getAttribute('id');
        styleButton(buttonDiv)

        spotlightDivsContent
            .filter(div => div.classList[0] !== buttonId)
            .forEach(div => {
                if (!div.classList.contains('inactive')) addClass(div, 'inactive')
            })
        
        const activeDiv = spotlightDivsContent.filter(div => div.classList[0] === buttonId)[0];
        removeClass(activeDiv, 'inactive');
        changeBackground(activeDiv);
    })
})

function removeClass(element, classe) {
    element.classList.remove(classe);
}

function removeClasses(array, classe) {
    array.forEach(element => element.classList.remove(classe));
}

function addClasses(array, classe) {
    array.forEach(element => element.classList.add(classe));
}

function addClass(element, classe) {
    element.classList.add(classe);
}

function styleButton(button) {
    removeClasses(divButtons, 'btn-active');
    addClass(button, 'btn-active');
}

function changeBackground(div) {
    const divId = div.classList[0];
    const path = `assets/images/backgrounds/${divId}.jpg`
        
    const img = spotlightBackground.querySelector('img');
    img.setAttribute('src', path);
    
}