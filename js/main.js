
// add/remove filled CSS class for inputs
const userDetailsForm = document.querySelector(".user-details");

userDetailsForm.addEventListener("input", function(event) {
  if (event.target.value) {
    event.target.classList.add("filled");
  } else {
    event.target.classList.remove("filled");
  }
});