// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener('DOMContentLoaded', function() {
  const likeButton = document.getElementById('likeButton');
  likeButton.addEventListener('click', function() {
      mimicServerCall()
          .then(response => {
              updateHeart(likeButton);
          })
          .catch(error => {
              displayErrorModal(error);
          });
  });
});

function displayErrorModal(errorMessage) {
  const errorModal = document.getElementById('errorModal');
  const errorMessageElement = document.getElementById('errorMessage');
  errorMessageElement.textContent = errorMessage;
  errorModal.classList.remove('hidden');
  setTimeout(function() {
      errorModal.classList.add('hidden');
  }, 3000);
}

function updateHeart(likeButton) {
  const heartIcon = likeButton.querySelector('.like-glyph');
  if (heartIcon.classList.contains('activated-heart')) {
      heartIcon.classList.remove('activated-heart');
      heartIcon.textContent = EMPTY_HEART;
  } else {
      heartIcon.classList.add('activated-heart');
      heartIcon.textContent = FULL_HEART;
  }
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
