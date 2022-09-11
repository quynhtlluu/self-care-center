//buttons
var recieveMessageButton = document.querySelector('#recieve')
var clearPageButton = document.querySelector('#clear')

//inputs
var affirmationInput = document.getElementById('affirmation')
var mantraInput = document.getElementById('mantra')

//elements
var body = document.querySelector('body')
var bellImage = document.getElementById('bellIcon')
var paragraph = document.querySelector('p')
var loadingAnimation = document.querySelector('.loader')
var question = document.querySelector('h4')
var form = document.querySelector('form')

//event listeners
recieveMessageButton.addEventListener('click', recieveMessageOnClick)
clearPageButton.addEventListener('click', refreshPage)

//functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function hiddenProperties() {
  recieveMessageButton.classList.add('hidden')
  bellImage.classList.add('hidden')
  loadingAnimation.classList.add('hidden')
  question.classList.add('hidden')
  paragraph.classList.remove('hidden')
  clearPageButton.classList.remove('hidden')
}

function recieveMessageOnClick(event) {
  event.preventDefault()
  setTimeout(recieveMessage, 2000)
  recieveMessageButton.disabled = true
  loadingAnimation.classList.remove('hidden')
}

function recieveMessage() {
  if (affirmationInput.checked === true) {
    console.log(affirmation[getRandomIndex(affirmation)])
    paragraph.innerText = affirmation[getRandomIndex(affirmation)]
    hiddenProperties();
    body.style.background = 'linear-gradient(#134d71 40%, #78a7c6, #f7e4bf)'
}
  else if (mantraInput.checked === true) {
    console.log(mantra[getRandomIndex(mantra)])
    paragraph.innerText = mantra[getRandomIndex(mantra)]
    hiddenProperties();
    body.style.background = 'linear-gradient(#134d71 40%, #78a7c6, #f7e4bf)'
}
  else if (!alert('Please select which kind of message you are requesting.')) {
   location.reload();
  }
}

function refreshPage() {
  location.reload()
}
