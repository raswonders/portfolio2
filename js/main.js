// add/remove filled CSS class for inputs
const userDetailsForm = document.querySelector(".user-details");

userDetailsForm.addEventListener("input", function(event) {
  if (event.target.value) {
    event.target.classList.add("filled");
  } else {
    event.target.classList.remove("filled");
  }
});

document.querySelector(".cta-btn").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth"
  });
});
