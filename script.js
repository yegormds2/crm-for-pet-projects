const addNewIdeaButton = document.querySelector('.add-raw-idea')
const rejectIdeaButton = document.querySelector('.reject-idea-button')
const newIdeaContiner = document.querySelector('.new-idea-container')
const appContainer = document.querySelector('.app-content')
const chooseTagContainer = document.querySelector('.choose-tag-container')
const chooseTagButton = document.querySelector('.choose-tag')
const closetagMenuButton = document.querySelector('.idea-tag-option-back')
const tagButtonContainer = document.querySelector('.new-idea-tags-container')


const tagElements = {
    mobileApp: document.querySelector('.idea-tag-option-mobile-app'),
    telegramBot: document.querySelector('.idea-tag-option-telegram-bot'),
    webService: document.querySelector('.idea-tag-option-web-servise'),
    idea: document.querySelector('.idea-tag-option-idea')
}



addNewIdeaButton.addEventListener('click', () => {
    newIdeaContiner.style.display = 'flex';
    appContainer.style.filter = 'blur(3px)';
})

rejectIdeaButton.addEventListener('click', () => {
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

chooseTagButton.addEventListener('click', () => {
    newIdeaContiner.style.filter = 'blur(3px)'
    chooseTagContainer.style.display = 'grid'
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
                chooseTagContainer.style.display = 'none'
                newIdeaContiner.style.filter = 'blur(0px)'
                break
            case 'Веб - сервис':
                tagButtonContainer.append(el.cloneNode(true))
                chooseTagContainer.style.display = 'none'
                newIdeaContiner.style.filter = 'blur(0px)'
                break
            case 'Telegram Bot':
                tagButtonContainer.append(el.cloneNode(true))
                chooseTagContainer.style.display = 'none'
                newIdeaContiner.style.filter = 'blur(0px)'
                break
            case 'Идея':
                tagButtonContainer.append(el.cloneNode(true))
                chooseTagContainer.style.display = 'none'
                newIdeaContiner.style.filter = 'blur(0px)'
                break;
        }
    })
})

