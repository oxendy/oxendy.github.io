var saveModal = document.getElementById("saveModal");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function savedSuccessfully() {
  saveModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  saveModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == saveModal) {
    saveModal.style.display = "none";
  }
}

