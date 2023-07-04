console.log('hi');

const form = document.querySelector("#contant-form")
const submitButton = document.querySelector("#form-control-Submit")
const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'

form.addEventListener("submit", function (e) {
  //submitButton.disabled = true
  e.preventDefault(); 
  let requestBody = new FormData(this)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})