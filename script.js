const addNewIdeaButton = document.querySelector('.add-raw-idea')
const rejectIdeaButton = document.querySelector('.reject-idea-button')
const newIdeaContiner = document.querySelector('.new-idea-container')
const allNewIdeasContainers = document.querySelectorAll('.new-idea-container')
const appContainer = document.querySelector('.app-content')
const chooseTagContainer = document.querySelector('.choose-tag-container')
const chooseTagButton = document.querySelector('.choose-tag')
const closetagMenuButton = document.querySelector('.idea-tag-option-back')
const tagButtonContainer = document.querySelector('.new-idea-tags-container')
const rawIdeasCounterHTML = document.querySelector('.raw-ideas-counter')

const newIdeadHeading = document.querySelector('.idea-name')
const newIdeadNameInput = document.querySelector('.new-idea-input-name')
const newIdeaDescriptionInput = document.querySelector('.new-idea-input-description')
const saveNewIdeaButton = document.querySelector('.save-idea-button')

const rawIdeasContainer = document.querySelector('.raw-ideas-container')
const rawIdeasHeadingContainer = document.querySelector('.headings-container')

let rawIdeasCounterNum = allNewIdeasContainers.length
rawIdeasCounterHTML.textContent = rawIdeasCounterNum
const tagElements = {
    mobileApp: document.querySelector('.idea-tag-option-mobile-app'),
    telegramBot: document.querySelector('.idea-tag-option-telegram-bot'),
    webService: document.querySelector('.idea-tag-option-web-servise'),
    idea: document.querySelector('.idea-tag-option-idea')
}



addNewIdeaButton.addEventListener('click', () => {
    newIdeaContiner.style.display = 'flex'
    appContainer.style.filter = 'blur(3px)'
})

rejectIdeaButton.addEventListener('click', () => {
    newIdeadHeading.textContent = 'НОВАЯ ИДЕЯ'
    newIdeadNameInput.value = ''
    newIdeaDescriptionInput.value = ''
    if (tagButtonContainer.lastChild.tagName == 'P') {
        tagButtonContainer.lastChild.remove()
        newIdeaContiner.style.display = 'none'
        appContainer.style.filter = 'blur(0px)'
    } else {
        newIdeaContiner.style.display = 'none'
        appContainer.style.filter = 'blur(0px)'
    }
    chooseTagButton.style.display = 'block'
})

function chooseTagButon() {
    if (tagButtonContainer.lastChild.tagName == 'P') {
        newIdeaContiner.style.filter = 'blur(3px)'
        chooseTagContainer.style.display = 'grid'
        tagButtonContainer.lastChild.remove()
    } else {
        newIdeaContiner.style.filter = 'blur(3px)'
        chooseTagContainer.style.display = 'grid'
    }

}

chooseTagButton.addEventListener('click', () => {
    chooseTagButon()
})

closetagMenuButton.addEventListener('click', () => {
    chooseTagContainer.style.display = 'none'
    chooseTagButton.style.display = 'block'
    newIdeaContiner.style.filter = 'blur(0px)';
})

// Сделать чтобы при клике на итоговый выбранный тег его можно было изменить

Object.values(tagElements).forEach(el => {
    el.addEventListener('click', (e) => {
        chooseTagButton.style.display = 'none'
        switch (e.target.textContent) {
            case 'Мобильноеприложение':
                tagButtonContainer.append(el.cloneNode(true))
                tagButtonContainer.lastChild.addEventListener('click', chooseTagButon)
                chooseTagContainer.style.display = 'none'
                newIdeaContiner.style.filter = 'blur(0px)'
                break
            case 'Веб - сервис':
                tagButtonContainer.append(el.cloneNode(true))
                tagButtonContainer.lastChild.addEventListener('click', chooseTagButon)
                chooseTagContainer.style.display = 'none'
                newIdeaContiner.style.filter = 'blur(0px)'
                break
            case 'Telegram Bot':
                tagButtonContainer.append(el.cloneNode(true))
                tagButtonContainer.lastChild.addEventListener('click', chooseTagButon)
                chooseTagContainer.style.display = 'none'
                newIdeaContiner.style.filter = 'blur(0px)'
                break
            case 'Идея':
                tagButtonContainer.append(el.cloneNode(true))
                tagButtonContainer.lastChild.addEventListener('click', chooseTagButon)
                chooseTagContainer.style.display = 'none'
                newIdeaContiner.style.filter = 'blur(0px)'
                break;
        }
    })
})

// WORKING WITH FORM


let newIdeaNameInputResult = '' // yes
newIdeadNameInput.addEventListener('input', (e) => {
    newIdeadHeading.textContent = e.target.value
    newIdeaNameInputResult = e.target.value

})

let newIdeaDescriptionResult = '' // yes
newIdeaDescriptionInput.addEventListener('input', (e) => {
    newIdeaDescriptionResult = e.target.value
})

saveNewIdeaButton.addEventListener('click', () => {
    if (newIdeaNameInputResult !== '' && newIdeaDescriptionResult !== '' && tagButtonContainer.lastChild.tagName == 'P') {
        rawIdeasCounterNum += 1
        rawIdeasCounterHTML.textContent = rawIdeasCounterNum
        // element.style.removeProperty('background-color');
        const htmlString = `
        <div class="idea-container">
            <h1 class="idea-heading">${newIdeaNameInputResult}</h1>
            <p class="idea-description">${newIdeaDescriptionResult}</p>
            <p 
                class="${tagButtonContainer.lastElementChild.classList[0]}"
                style="justify-self: unset; width: fit-content;"
            >
                ${tagButtonContainer.lastChild.textContent}</p>
        </div>`
        newIdeaNameInputResult = ''
        newIdeaDescriptionResult = ''
        rawIdeasHeadingContainer.insertAdjacentHTML('afterend', htmlString)
        tagButtonContainer.lastChild.remove()
        newIdeaContiner.style.display = 'none'
        appContainer.style.filter = 'blur(0px)'
        chooseTagButton.style.display = 'block'
        chooseTagButton.style.display = 'block'
        newIdeadHeading.textContent = 'НОВАЯ ИДЕЯ'
        newIdeadNameInput.value = ''
        newIdeaDescriptionInput.value = ''
    } else {
        alert('Заполните поля!')
    }
})

