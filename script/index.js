
const typeText = [
    ['S', 'i', 'm', 'p', 'l', 'e', '.', '.', '.'],
    ['S', 't', 'a', 'b', 'l', 'e', '.', '.', '.'],
    ['S', 'e', 'c', 'u', 'r', 'e', '.', '.', '.']
]
let currentIndex = 0
let currentString = 0
let domString = ''
let deleteInterval = null
let typingInterval = null

const typeSelector = document.querySelector('.hero-feature span')
const imgSelector = document.querySelectorAll('.hero-right img')

const deleteType = () => {
    deleteInterval = setInterval(() => {
        domString = domString.slice(0,-1)
        typeSelector.innerHTML = domString ? domString : ' '
        if (domString.length === 0) {
            clearInterval(deleteInterval)
            startTyping()
            imgSelector.forEach(e => {
                e.style.display = 'none'
            })
            imgSelector[currentString].style.display = 'block'
        }
    }, 100)
}

const pauseType = () => {
    clearInterval(typingInterval)
    currentString++
    currentIndex = 0
    if (currentString === typeText.length) {
        currentString = 0
    }
    setTimeout(() => {
        deleteType()
    }, 800)
}

const startTyping = () => {
    typing = true
    typingInterval = setInterval(() => {
        domString += typeText[currentString][currentIndex]
        typeSelector.innerHTML = domString
        currentIndex++
        if (currentIndex >= typeText[currentString].length) {
            pauseType()
        }
    }, 150)
}

imgSelector.forEach(e => {
    e.style.display = 'none'
})
imgSelector[currentString].style.display = 'block'
startTyping()