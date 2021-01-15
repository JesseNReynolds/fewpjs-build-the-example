// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.getElementById('modal')


// Your JavaScript code goes here
// Invocations
listenForLikes()


// Select all like buttons and add event listeners


function listenForLikes() {
  const hearts = document.getElementsByClassName('like-glyph')
  
  Array.from(hearts).forEach(function(element) {
    element.addEventListener('click', (event) => clickLike(event))
  })
}

// Handle click

function clickLike(event) {
  const element = event.target
  
  if (!element.classList.contains('activated-heart')) {
    mimicServerCall()
      .then(function () {
        element.classList.add('activated-heart')
        element.innerHTML = FULL_HEART
      })
      .catch(function() {
        errorModal.classList.remove('hidden')
        setTimeout(function(rejection) {
          errorModal.classList.add('hidden');
          errorModal.innerHTML = rejection;
        },
           5000)
      })
  }

}

// error modal handling


// function showError() {
//   errorModal.classList.remove('hidden')
//   setTimeout(errorModal.classList.add('hidden'), 5000)
// }



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}