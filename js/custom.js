// TOASTS
console.log("Script is loading");
window.onload = (e) => {
    console.log("windows is loading");
  let myToast = document.querySelector(".toast"); // Selectionne l'id de myToast
  let toasted = new bootstrap.Toast(myToast); // Initialise
  toasted.show(); // show myToast
};
