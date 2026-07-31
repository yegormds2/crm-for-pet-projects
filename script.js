const addNewIdeaButton = document.querySelectorAll('.add-raw-idea')
const rejectIdeaButton = document.getElementById('reject-idea-button')
const newIdeaContiner = document.getElementById('new-raw-idea-container')
const allNewIdeasContainers = document.querySelectorAll('.new-raw-idea-container')
const rawIdeasContainer = document.getElementById('raw-ideas-container')
const thinkedIdeasContainer = document.getElementById('thinked-ideas-container')
const workingIdeasContainer = document.getElementById('working-idea-container')
const realizedIdeasContainer = document.getElementById('realized-idea-container')
const appContainer = document.querySelector('.app-content')

const chooseTagContainer = document.querySelector('.choose-tag-container')
const chooseTagButton = document.querySelector('.choose-tag')
const closetagMenuButton = document.querySelector('.idea-tag-option-back')
const tagButtonContainer = document.querySelector('.new-idea-tags-container')
const rawIdeasCounterHTML = document.getElementById('raw-ideas-counter')
const thinkedIdeasCounterHTML = document.getElementById('thinked-ideas-counter')
const workingIdeasCounterHTML = document.getElementById('working-ideas-counter')
const realizedIdeasCounterHTML = document.getElementById('realized-ideas-counter')

const newIdeadHeading = document.querySelector('.idea-name')
const newIdeadNameInput = document.querySelector('.new-idea-input-name')
const newIdeaDescriptionInput = document.querySelector('.new-idea-input-description')
const saveNewIdeaButton = document.querySelector('.save-idea-button')

const rawIdeasHeadingContainer = document.getElementById('raw-headings-container')
const thinkedIdeasheadingContiner = document.getElementById('thinked-headings-container')
const workingIdeasHeadingContainer = document.getElementById('working-headings-container')
const realizedIdeasHeadingContainer = document.getElementById('realized-headings-container')

const moveIdeaLeftButton = document.getElementById('move-idea-left')
const moveIdeaRightButton = document.getElementById('move-idea-right')
const deleteIdeaButton = document.getElementById('delete-idea')

const ideasTypeContainers = [
    rawIdeasContainer,
    thinkedIdeasContainer,
    workingIdeasContainer,
    realizedIdeasContainer
]

const ideasTypeCountersHTML = [
    rawIdeasCounterHTML,
    thinkedIdeasCounterHTML,
    workingIdeasCounterHTML,
    realizedIdeasCounterHTML
]

const ideasCounting = {
    counterRaw: 0,
    counterThinked: 0,
    counterWorking: 0,
    counterRealized: 0,
    counterUpdate(container, whatCounter) {
        switch (whatCounter) {
            case 'raw':
                this.counterRaw = 0
                Object.values(container.children).forEach(el => {
                    if (el.dataset.idea == 'raw') {
                        this.counterRaw += 1
                    }
                })
                break
            case 'thinked':
                this.counterThinked = 0
                Object.values(container.children).forEach(el => {
                    if (el.dataset.idea == 'thinked') {
                        this.counterThinked += 1
                    }
                })
                break
            case 'working':
                this.counterWorking = 0
                Object.values(container.children).forEach(el => {
                    if (el.dataset.idea == 'working') {
                        this.counterWorking += 1
                    }
                })
                break
            case 'realized':
                this.counterRealized = 0
                Object.values(container.children).forEach(el => {
                    if (el.dataset.idea == 'realized') {
                        this.counterRealized += 1
                    }
                })
                break
        }
    }
}

function updateAllCounters() {
    ideasTypeContainers.forEach(el => {
        ideasCounting.counterUpdate(el, el.dataset.idea)
    })
    rawIdeasCounterHTML.dataset.counter = ideasCounting.counterRaw
    thinkedIdeasCounterHTML.dataset.counter = ideasCounting.counterThinked
    workingIdeasCounterHTML.dataset.counter = ideasCounting.counterWorking
    realizedIdeasCounterHTML.dataset.counter = ideasCounting.counterRealized
}

updateAllCounters()
ideasTypeCountersHTML.forEach(el => {
    el.textContent = el.dataset.counter
})

const tagElements = {
    mobileApp: document.querySelector('.idea-tag-option-mobile-app'),
    telegramBot: document.querySelector('.idea-tag-option-telegram-bot'),
    webService: document.querySelector('.idea-tag-option-web-servise'),
    idea: document.querySelector('.idea-tag-option-idea')
}

let whereToPlaceNewIdea = ''

addNewIdeaButton.forEach(button => {
    button.addEventListener('click', (e) => {
        newIdeaContiner.style.display = 'flex'
        appContainer.style.filter = 'blur(3px)'
        switch (e.target.dataset.add) {
            case 'raw':
                whereToPlaceNewIdea = 'raw'
                break
            case 'thinked':
                whereToPlaceNewIdea = 'thinked'
                break
            case 'working':
                whereToPlaceNewIdea = 'working'
                break
            case 'realized':
                whereToPlaceNewIdea = 'realized'
                break
        }
    })
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

let newIdeaNameInputResult = '' // yes
newIdeadNameInput.addEventListener('input', (e) => {
    newIdeadHeading.textContent = e.target.value
    newIdeaNameInputResult = e.target.value
})

let newIdeaDescriptionResult = '' // yes
newIdeaDescriptionInput.addEventListener('input', (e) => {
    newIdeaDescriptionResult = e.target.value
})

function insertingIdeas(what, where) {
    newIdeaNameInputResult = ''
    newIdeaDescriptionResult = ''
    where.insertAdjacentHTML('afterend', what)
    tagButtonContainer.lastChild.remove()
    newIdeaContiner.style.display = 'none'
    appContainer.style.filter = 'blur(0px)'
    chooseTagButton.style.display = 'block'
    chooseTagButton.style.display = 'block'
    newIdeadHeading.textContent = 'НОВАЯ ИДЕЯ'
    newIdeadNameInput.value = ''
    newIdeaDescriptionInput.value = ''
    whereToPlaceNewIdea = ''
}

const parentHeadingsToAdd = [
    rawIdeasHeadingContainer,
    thinkedIdeasheadingContiner,
    workingIdeasHeadingContainer,
    realizedIdeasHeadingContainer
    ]

const addNewRawIdeaButton = document.querySelector('[data-AddNewIdeaType="raw"]')
const addNewThinkingIdeaButton = document.querySelector('[data-AddNewIdeaType="thinked"]')
const addNewWorkedIdeaButton = document.querySelector('[data-AddNewIdeaType="working"]')
const addNewRealizedIdeaButton = document.querySelector('[data-AddNewIdeaType="realized"]')

const addNewButtons = [
    addNewRawIdeaButton,
    addNewThinkingIdeaButton,
    addNewWorkedIdeaButton,
    addNewRealizedIdeaButton
    ]

const moveRight = (e) => {
    console.log(e.target.parentElement.parentElement.parentElement.parentElement)
    switch (e.target.parentElement.parentElement.parentElement.parentElement.dataset.idea) {
        case 'raw':
            addNewThinkingIdeaButton.insertAdjacentElement('beforebegin', e.target.parentElement.parentElement.parentElement)
            break
        case 'thinked':
            addNewWorkedIdeaButton.insertAdjacentElement('beforebegin', e.target.parentElement.parentElement.parentElement)
            break
        case 'working':
            addNewRealizedIdeaButton.insertAdjacentElement('beforebegin', e.target.parentElement.parentElement.parentElement)
            break
    }    
}

const moveLeft = (e) => {
    console.log(e.target.parentElement.parentElement.parentElement.parentElement)
    switch (e.target.parentElement.parentElement.parentElement.parentElement.dataset.idea) {
        case 'realized':
            addNewWorkedIdeaButton.insertAdjacentElement('beforebegin', e.target.parentElement.parentElement.parentElement)
            break
        case 'working':
            addNewThinkingIdeaButton.insertAdjacentElement('beforebegin', e.target.parentElement.parentElement.parentElement)
            break
        case 'thinked':
            addNewRawIdeaButton.insertAdjacentElement('beforebegin', e.target.parentElement.parentElement.parentElement)
            break
    }
}

const deleteIdea = (e) => {
    e.target.parentElement.parentElement.remove()
}
moveIdeaRightButton.addEventListener('click', moveRight)
moveIdeaLeftButton.addEventListener('click', moveLeft)
deleteIdeaButton.addEventListener('click', deleteIdea)


// ИСПРАВИТЬ СЧЕТКИ В ЗАГОЛОВКАХ КОЛЧИСТВА ИДЕЙ
saveNewIdeaButton.addEventListener('click', () => {
    if (newIdeaNameInputResult !== '' && newIdeaDescriptionResult !== '' && tagButtonContainer.lastChild.tagName == 'P') {
        switch (whereToPlaceNewIdea) {
            case 'raw':
                const htmlString = `
                    <div data-idea="raw" id="raw-idea-container" class="idea-container">
                    <div class="heading-idea-delete-container">
                        <h1 class="idea-heading">${newIdeaNameInputResult}</h1>
                        <button onclick="deleteIdea(event)" id="delete-idea" class="delete-idea">X</button>
                    </div>
                        <p class="idea-description">${newIdeaDescriptionResult}</p>
                        <div class="tag-moving-buttons-containaer">
                        <p 
                            class="${tagButtonContainer.lastElementChild.classList[0]}"
                            style="justify-self: unset; width: fit-content;"
                        >
                            ${tagButtonContainer.lastChild.textContent}
                        </p>
                                <div class="move-buttons-container">
                                    <button onclick="moveLeft(event)" id="move-idea-left"><-</button>
                                    <button onclick="moveRight(event)" id="move-idea-right">-></button>
                                </div>
                        </div>
                    </div>`
                insertingIdeas(htmlString, rawIdeasHeadingContainer)
                ideasCounting.counterUpdate(rawIdeasContainer, 'raw')
                rawIdeasCounterHTML.textContent = ideasCounting.counterRaw
                break
            case 'thinked':
                const htmlStringThinked = `
                    <div data-idea="thinked" class="idea-container">
                    <div class="heading-idea-delete-container">
                        <h1 class="idea-heading">${newIdeaNameInputResult}</h1>
                        <button onclick="deleteIdea(event)" id="delete-idea" class="delete-idea">X</button>
                    </div>
                        <p class="idea-description">${newIdeaDescriptionResult}</p>
                        <div class="tag-moving-buttons-containaer">
                            <p 
                                class="${tagButtonContainer.lastElementChild.classList[0]}"
                                style="justify-self: unset; width: fit-content;"
                            >
                                ${tagButtonContainer.lastChild.textContent}
                            </p>
                                    <div class="move-buttons-container">
                                        <button onclick="moveLeft(event)" id="move-idea-left"><-</button>
                                        <button onclick="moveRight(event)" id="move-idea-right">-></button>
                                    </div>
                        </div>                        
                    </div>`
                insertingIdeas(htmlStringThinked, thinkedIdeasheadingContiner)
                ideasCounting.counterUpdate(thinkedIdeasContainer, 'thinked')
                thinkedIdeasCounterHTML.textContent = ideasCounting.counterThinked
                break
            case 'working':
                const htmlStringThinkedWorking = `
                    <div data-idea="working" class="idea-container">
                    <div class="heading-idea-delete-container">
                        <h1 class="idea-heading">${newIdeaNameInputResult}</h1>
                        <button onclick="deleteIdea(event)" id="delete-idea" class="delete-idea">X</button>
                    </div>
                        <p class="idea-description">${newIdeaDescriptionResult}</p>
                        <div class="tag-moving-buttons-containaer">
                            <p 
                                class="${tagButtonContainer.lastElementChild.classList[0]}"
                                style="justify-self: unset; width: fit-content;"
                            >
                                ${tagButtonContainer.lastChild.textContent}
                            </p>
                                    <div class="move-buttons-container">
                                        <button onclick="moveLeft(event)" id="move-idea-left"><-</button>
                                        <button onclick="moveRight(event)" id="move-idea-right">-></button>
                                    </div>
                        </div>                          
                    </div>`
                insertingIdeas(htmlStringThinkedWorking, workingIdeasHeadingContainer)
                ideasCounting.counterUpdate(workingIdeasContainer, 'working')
                workingIdeasCounterHTML.textContent = ideasCounting.counterWorking
                break
            case 'realized':
                const htmlStringThinkedRealized = `
                    <div data-idea="realized" class="idea-container">
                    <div class="heading-idea-delete-container">
                        <h1 class="idea-heading">${newIdeaNameInputResult}</h1>
                        <button onclick="deleteIdea(event)" id="delete-idea" class="delete-idea">X</button>
                    </div>
                        <p class="idea-description">${newIdeaDescriptionResult}</p>
                        <div class="tag-moving-buttons-containaer">
                            <p 
                                class="${tagButtonContainer.lastElementChild.classList[0]}"
                                style="justify-self: unset; width: fit-content;"
                            >
                                ${tagButtonContainer.lastChild.textContent}
                            </p>
                                    <div class="move-buttons-container">
                                        <button onclick="moveLeft(event)" id="move-idea-left"><-</button>
                                        <button onclick="moveRight(event)" id="move-idea-right">-></button>
                                    </div>
                        </div>                          
                    </div>`
                insertingIdeas(htmlStringThinkedRealized, realizedIdeasHeadingContainer)
                ideasCounting.counterUpdate(realizedIdeasContainer, 'realized')
                realizedIdeasCounterHTML.textContent = ideasCounting.counterRealized
                break
        }
    } else {
        alert('Заполни поля!')
    }
})


